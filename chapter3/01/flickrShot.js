// 참고 1 :https://blog.daehwan.dev/2018/12/27/how-puppeteer-used-1-page-capture/ 
// 참고 2 : https://loy124.tistory.com/288

var puppeteer = require("puppeteer");

puppeteer.launch({ args: ['--no-sandbox']}).then(async browser => {
    var page = await browser.newPage();
    page.setViewport({
        width: 1400,
        height: 800,
      });
    var text = encodeURIComponent("고양이");
    await browser.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36");
    await page.goto("https://www.flickr.com/search/?text="+text);
    await page.screenshot({
        clip : {x:0,y:0,width : 1400,height:800},
        path : `jpub2.jpeg`
    });
    await browser.close();
});