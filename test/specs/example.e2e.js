const RegisterPage = require('../pageobjects/register.page');
const LoginPage = require('../pageobjects/login.page');
const MainPage = require('../pageobjects/main.page');

let name = 'Bob', surname = 'Bobbington';
let email = 'lolka@lolmail.com', pass = 'BestPassEver', phone = '044525312';


describe('WebsiteTest1', () => {
    /*
    it('should register', async () => {
        await RegisterPage.open();
        await RegisterPage.register(name, surname, email, pass, phone);
        
        let res = await (await RegisterPage.registeredResult).getText();//browser[RegisterPage.registerResult].getText();
        console.log("LOG!", await res);
        if (res !== 'Your Account Has Been Created!')
        {
            res = await (await RegisterPage.unregisteredResult).getText();
        }
        expect(res).toBeTruthy();
        //RegisterPage.close();
    });

    */
    it('should login with my credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(email, pass);
        await expectAsync(LoginPage.h2).toHaveTextContaining('My Account');
    })

    
    it('Your Store available', async () => {
        await MainPage.goToStore();
        const res1 = (( await ( await MainPage.h3).getText() ) === 'Featured');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/index.php?route=common/home')
                expect(res1 && res2).toBeTrue();
            })
    })
    
    it ('Desktops available', async () => {
        await MainPage.goToDesktops();
        const res1 = (( await ( await MainPage.h2).getText() ) === 'Desktops');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/desktops')
                expect(res1 && res2).toBeTrue();
            })
    })

    it ('Laptops available', async () => {
        await MainPage.goToLaptops();
        const res1 = (( await ( await MainPage.h2).getText() ) === 'Laptops & Notebooks');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/laptop-notebook')
                expect(res1 && res2).toBeTrue();
            })
    })

    it ('Components available', async () => {
        await MainPage.goToComponents();
        const res1 = (( await ( await MainPage.h2).getText() ) === 'Components');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/component')
                expect(res1 && res2).toBeTrue();
            })
    })

    it ('Tablets available', async () => {
        await MainPage.goToTablets();
        const res1 = (( await ( await MainPage.h2).getText() ) === 'Tablets');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/tablet')
                expect(res1 && res2).toBeTrue();
            })
    })

    it ('Software available', async () => {
        await MainPage.goToSoftware();
        const res1 = (( await ( await MainPage.h2).getText() ) === 'Software');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/software')
                expect(res1 && res2).toBeTrue();
            })
    })

    it ('Phones available', async () => {
        await MainPage.goToPhones();
        const res1 = (( await ( await MainPage.h2).getText() ) === 'Phones & PDAs');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/smartphone')
                expect(res1 && res2).toBeTrue();
            })
    })

    it ('Cameras available', async () => {
        await MainPage.goToCameras();
        const res1 = (( await ( await MainPage.h2).getText() ) === 'Cameras');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/camera')
                expect(res1 && res2).toBeTrue();
            })
    })

    it ('MP3 available', async () => {
        await MainPage.goToMP3();
        const res1 = (( await ( await MainPage.h2).getText() ) === 'MP3 Players');
        return browser.getUrl()
            .then( (url) => {
                const res2 = (url === 'http://93.126.97.71:10082/mp3-players')
                expect(res1 && res2).toBeTrue();
            })
    })
    
});