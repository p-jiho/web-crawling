// 참고 : https://velog.io/@jinuku/Puppeteer%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%9B%B9-%ED%81%AC%EB%A1%A4%EB%A7%81-%ED%95%B4%EB%B3%B4%EA%B8%B0-%EC%98%88%EC%A0%9C-1


var TARGET_URL = "http://jpub.tistory.com";
var puppeteer = require("puppeteer");
var cheerio = require("cheerio");

(async () => {
    var browser = await puppeteer.launch({ args: ['--no-sandbox']});
    var page = await browser.newPage();
    await page.setViewport({
        width: 1366,
        height: 768
      });
    await page.goto(TARGET_URL);

    var content = await page.content(); // HTML 가져오기
    var $ = cheerio.load(content);
    var lists = $("head > title");
    var name = $(lists).text();   // title 가져오기
    console.log(name);
    
    browser.close();

})();
