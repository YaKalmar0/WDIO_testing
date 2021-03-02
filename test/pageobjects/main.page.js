const Page = require('./page');

class MainPage extends Page {
    get see_all () { return $('*=All') }
    
    get desktops () { return $('=Desktops') }
    get laptops () { return $('*=Laptops') }
    get components () { return $('=Components') }
    get tablets () { return $('=Tablets') }
    get software () { return $('=Software') }
    get phones () { return $('*=Phones') }
    get cameras () { return $('=Cameras') }
    get mp3 () { return $('*=MP3') }

    async goToStore () {
        await (await this.h1).click();
    }

    async goToDesktops () {
        await (await this.desktops).click();
        await (await this.see_all).click();
    }

    async goToLaptops () {
        await (await this.laptops).click();
        await (await this.see_all).click();
    }

    async goToComponents () {
        await (await this.components).click();
        await (await this.see_all).click();
    }

    async goToTablets () {
        await (await this.tablets).click();
    }

    async goToSoftware () {
        await (await this.software).click();
    }

    async goToPhones () {
        await (await this.phones).click();
    }

    async goToCameras() {
        await (await this.cameras).click();
    }

    async goToMP3 () {
        await (await this.mp3).click();
        await (await this.see_all).click();
    }

}

module.exports = new MainPage();