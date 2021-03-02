const Page = require('./page');

class RegisterPage extends Page {

    get inputFirstName () { return $('[name="firstname"]') }
    get inputLastName () { return $('[name="lastname"]') }
    get inputEmail () { return $('[name="email"]') }
    get inputTelephone () { return $('[name="telephone"]') }
    get inputPassword () { return $('#input-password') }
    get inputPasswordConf () { return $('#input-confirm') }
    get privacyCheckBox () { return $('[type="checkbox"]') }
    
    get registeredResult () { return $('h1') }
    get unregisteredResult () { return $('/html/body/div[2]/div[1]') }

    async register (firstname, lastname, email, password, telephone) {
        await (await this.myAccountBut).click();
        await (await this.registerBut).click();

        await (await this.inputFirstName).setValue(firstname);
        await (await this.inputLastName).setValue(lastname);
        await (await this.inputEmail).setValue(email);
        await (await this.inputTelephone).setValue(telephone);
        await (await this.inputPassword).setValue(password);
        await (await this.inputPasswordConf).setValue(password);
        await (await this.privacyCheckBox).click();
        await (await this.btnSubmit).click();
    }
}

module.exports = new RegisterPage();