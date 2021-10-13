const LoginPage = require('../pageobjects/loginimdb.page');
const SecurePage = require('../pageobjects/secureimdb.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        const enterKey = browser.keys("\uE007"); 
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'To better protect your account, please re-enter your password and then enter the characters as they are shown in the image below.');
    });
});


