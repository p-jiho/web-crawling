client.fetch(VISIT_URL, function(err,$, res){
    const book=[];
    if(err){console.log("DL error"); return;}

    var tr = $("#content > div.inner").children("div.post-item").each(function(index,item){
        book[index] = $(this).find("a>span.title").text();
        booklist.push(book[index]);
    });
    if (!tr) {
        console.log("페이지 형식 에러"); return;
    }
    
    scrape(page+1);
});
