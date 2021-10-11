describe('Internet Movie Database website', () => {
    it('should open the main url and verify the title', async ()  => {
         await browser.url('https://www.imdb.com/');
         await expect(browser).toHaveTitle(
            'IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows'
        );
    });

    it('should enter a movie name in the search bar', async () => {       
        const searchInput = await $('#suggestion-search');
        await searchInput.setValue('The Wolf of Wall Street');
        const enterKey = browser.keys("\uE007"); 
        await expect(searchInput).toHaveText(
            ''
        );
    });

    it('should expect the movie title Wolf of Wall Street', async () => {
        const searchResult = await $('.result_text a');
        await expect(searchResult).toHaveText(
            'The Wolf of Wall Street' 
        );
    });

    it('should click on title and expect to have year of release at top', async () => {
        const searchResult = await $('.result_text a');
        await searchResult.click();
        const searchClick = await $('.ipc-inline-list__item a');
        await expect(searchClick).toHaveText(
            '2013'
        );
    });


});


