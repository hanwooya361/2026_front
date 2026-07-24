getboard();
function getboard(){
    // 상위 웹주소 
    let url = new URLSearchParams(location.search);
    // 게시물 번호 갖고오기
    let selectno = url.get('no')
    // local 배열 갖고오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList)}
    // 게시물번호와 일치한 게시물 찾기
    for(let i=0; i<boardList.length; i++){
        let obj = boardList[i]
        if(obj.no == selectno){
            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content
            return;
        }
    }
}

// 삭제
function boardDelete(){
    let url = new URLSearchParams(location.search);
    // 게시물번호 갖고오고
    let selectno = url.get('no')
    // 배열 갖고오고
    let boardList = localStorage.getItem('boardList')
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList)}
    // 배열 내 게시물 번호 존재하면
    for(let i=0; i<boardList.length; i++){
        let obj = boardList[i]
        if(obj.no == selectno){
            let confirm = prompt('비밀번호 입력')
            if(obj.pw == confirm){
                boardList.splice(i,1)
                localStorage.setItem('boardList',JSON.stringify(boardList))
                alert('삭제 성공')
                location.href = 'list.html'
            }else{
                alert('삭제 실패: 비밀번호 불일치')
            }
        }
    } 
}

// 수정
function boardUpdate(){
    let url = new URLSearchParams(location.search);
    // 게시물번호 갖고오고
    let selectno = url.get('no')
    // 배열 갖고오고
    let boardList = localStorage.getItem('boardList')
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList)}
    // 배열 내 게시물 번호 존재하면
    for(let i=0; i<boardList.length; i++){
        let obj = boardList[i]
        if(obj.no == selectno){
            let confirm = prompt('비밀번호 입력')
            if(obj.pw == confirm){
                location.href = `update.html?no=${selectno}`
            }else{
                alert('수정 불가: 비밀번호 불일치 ')
            }
        }
    }
    
}