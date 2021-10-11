const LoginPage = require('../pageobjects/loginfacebook.page');
const SecurePage = require('../pageobjects/securefacebook.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Sorry, something went wrong.');
    });
});


