function boardWrite(){
    // 입력 마크업 객체 
    let titleinput = document.querySelector('#titleinput');
    let contentinput = document.querySelector('#contentinput');
    let pwinput = document.querySelector('#pwinput');
    // 입력값
    let title = titleinput.value;
    let content = contentinput.value;
    let pw = pwinput.value;
    // obj 객체화
    let obj = {title,content,pw};
    // localstorage 배열 갖고오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else(boardList=JSON.parse(boardList))
    // 객체 배열 저장
    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1
    boardList.push(obj)
    // local에도 저장
    localStorage.setItem('boardList', JSON.stringify(boardList));
    alert('게시물 작성 성공')
    location.href = 'list.html' 
}