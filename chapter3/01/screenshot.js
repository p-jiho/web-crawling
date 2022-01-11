// 참고 : https://blog.daehwan.dev/2018/12/27/how-puppeteer-used-1-page-capture/


var puppeteer = require("puppeteer");

(async () => {
    var browser = await puppeteer.launch({ args: ['--no-sandbox']});
    var page = await browser.newPage();
    await page.goto("http://jpub.tistory.com");
    await page.screenshot({
        fullPage: true,
        path : `jpub.jpeg`
    });
    await browser.close();
})();