boardPrint();   // 실행 당 함수 1번 호출
function boardPrint(){
    // 어디에
    let boardTbody = document.querySelector('#boardTbody');
    // 무엇을
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList = JSON.parse(boardList)}
    let html = ``
    for(let i=0; i<boardList.length; i++){
        let obj = boardList[i]
        html += `<tr>
            <td>${obj.no}</td>
            <td><a href="view.html?no=${obj.no}">${obj.title}</a></td>
            </tr>`
    }
    boardTbody.innerHTML = html
}