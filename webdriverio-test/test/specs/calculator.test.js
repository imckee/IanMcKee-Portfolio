describe('Professional Football reference website', () => {
    it('should open the main url and verify the title', async ()  => {
         await browser.url('https://www.imdb.com/');
         await expect(browser).toHaveTitle(
            'IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows'
        );
    });

    it('should enter a movie title in the search bar', async () => {       
        const searchInput = await $('#suggestion-search');
        await searchInput.setValue('The Wolf of Wall Street');
        await expect(searchInput).toHaveText(
            ''
        );
        const enterKey = browser.keys("\uE007"); 
        const searchResult = await $('#result_text a')
        await expect(browser).toHaveText(
            'The Wolf of Wall Street'
        )
        await searchResult.click();
        const searchClick = await $('#hero-title-block__title');
        await expect(searchClick).toHaveText(
            'The Wolf of Wall Street'
        );
    });


});

