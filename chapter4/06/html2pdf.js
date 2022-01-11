// 1. pdf 생성하기 참고 : https://ichi.pro/ko/puppeteer-mich-node-jsleul-sayonghayeo-web-peijileul-pdflo-byeonhwan-156624492497874ㄴ

var puppeteer = require("puppeteer");

var url = "http://jpub.tistory.com/";
var savepath = "test.pdf";
(async ()=> {
    const browser = await puppeteer.launch({ headless:true,args: ['--no-sandbox']});
    const webPage = await browser.newPage();
    await webPage.goto(url);

    await webPage.pdf({
        printBackground: true,
        path: savepath,
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
        }
    });

    await browser.close();
})();