module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get btnSubmit () { return $('[type="submit"]') }
    get myAccountBut () { return $('/html/body/nav/div/div[2]/ul/li[2]/a') }
    get registerBut () { return $('*=Register') }
    get loginBut () { return $('*=Login') }
    get h1() { return $('h1') }
    get h2 () { return $('h2') }
    get h3 () { return $('h3') }


    open (path) {
        if (path === undefined)
        {
            path = '';
        }
        return browser.url('http://93.126.97.71:10082/test/' + path);
    }
}