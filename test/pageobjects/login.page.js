const Page = require('./page');

class LoginPage extends Page {
    get inputUsername () { return $('#input-email') }
    get inputPassword () { return $('#input-password') }

    async login (username, password) {
        await (await this.myAccountBut).click();
        await (await this.loginBut).click();
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

}

module.exports = new LoginPage();
