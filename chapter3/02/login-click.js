// 로그인 해서 글 작성 탭으로 이동하기

var puppeteer = require("puppeteer");

var url = "http://jiho-0728.tistory.com/admin/center/";
(async ()=> {
    var browser = await puppeteer.launch({ headless:true,args: ['--headless','--no-sandbox','--netifs-to-ignore=INTERFACE_TO_IGNORE']});
    var page = await browser.newPage();
    var tis_id = "아이디";
    var tis_pw = "비밀번호";

    await page.goto(url);
    await page.waitForSelector("#cMain > div > div > div > a.btn_login.link_kakao_id");

    await page.click("#cMain > div > div > div > a.btn_login.link_kakao_id");
    const pageWidth = 1440
    const viewportHeight = 800
    
    await page.setViewport({
          width: pageWidth,
          height: viewportHeight
    });
    await page.waitForSelector("#login-form > fieldset > div.wrap_btn > button.btn_g.btn_confirm.submit");
    await page.evaluate((id, pw) => {
        document.querySelector("#id_email_2").value = id;
        document.querySelector("#id_password_3").value = pw;
    }, tis_id,tis_pw);

    await page.click("#login-form > fieldset > div.wrap_btn > button.btn_g.btn_confirm.submit");
    await page.waitForTimeout(2000);   // 2초 기다림
    await page.click("#kakaoLnb > div:nth-child(3) > ul > li:nth-child(1) > a");
  
    await page.screenshot({
        fullPage: true,
        path : `caputre.jpeg`
    });
    await browser.close();
})();