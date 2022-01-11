// 참고 : https://blog.daehwan.dev/2018/12/27/how-puppeteer-used-1-page-capture/


var TARGET_URL = "http://jpub.tistory.com";
var puppeteer = require("puppeteer");

puppeteer.launch({ args: ['--no-sandbox']}).then(async browser => {
    var page = await browser.newPage();
    page.setViewport({
        width: 750,
        height: 1334,
      });
    await browser.userAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53");
    await page.goto(TARGET_URL);
    await page.screenshot({
        fullPage:true,
        path : `screenshot.png`
    });
    await browser.close();
});