// 로그인하고 작성된 글 수 긁어오기

var puppeteer = require("puppeteer");

var url = "http://jiho-0728.tistory.com/admin/center/";
(async ()=> {
    var browser = await puppeteer.launch({ headless:true,args: ['--no-sandbox']});
    var page = await browser.newPage();
    var tis_id = "아이디";
    var tis_pw = "비밀번호";

    await page.goto(url);
    await page.waitForSelector("#cMain > div > div > div > a.btn_login.link_kakao_id");  // 카카오로 로그인하기가 뜰 때까지 기다림

    await page.click("#cMain > div > div > div > a.btn_login.link_kakao_id");  // 카카오로 로그인하기 클릭
    const pageWidth = 1440
    const viewportHeight = 800
    
    await page.setViewport({
          width: pageWidth,
          height: viewportHeight
    });
    await page.waitForTimeout(500);   // 페이지가 로딩될 때까지 0.5초 기다림
    await page.evaluate((id, pw) => {
        document.querySelector("#id_email_2").value = id;   // id 입력
        document.querySelector("#id_password_3").value = pw;  // password 입력
    }, tis_id,tis_pw);

    await page.click("#login-form > fieldset > div.wrap_btn > button.btn_g.btn_confirm.submit");  // 로그인
    
    await page.goto('https://jiho-0728.tistory.com');
    var nu = await page.evaluate(() => {
        var number = document.querySelector("#container > main > div > div.area-common > h2 > span");

        return number.textContent;
    });
    console.log("새 댓글 수 : " + nu);
    browser.close();
})();