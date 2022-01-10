// 2. HTML 파일에서 링크 추출 : 페이지에 링크된 URL 을 추출(상대경로에 따른 링크)

var client = require("cheerio-httpcli");

var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function(err, $, res){
    if (err) {console.log("error"+err); return;}

    $("a > span.title").each(function(idx){  // HTML 문서 내의 모든 <a> 태그를 추출, each를 이용해 추출한 각 요소에 대해 지정한 함수 사용
        var text = $(this).text();  
        console.log(text);
    });
});