let team = [ {tcode: 1, tname: '개발팀'},{ tcode:2, tname: '디자인팀'},{tcode: 3, tname: '기획팀' } ];

let position = [ {pcode: 1, pname: '선임 개발자'},{ pcode:2, pname: '수석 디자이너'},{pcode: 3, pname: '팀장' } ];

let staff = [{ scode: 1, sname: '김민준', pcode: 1 ,simage: 'https://placehold.co/100', tcode: 1},
            {scode: 2, sname: '이서연', pcode: 2 , simage: 'https://placehold.co/100',tcode: 2},
            {scode: 3, sname: '박도윤', pcode:3, simage: 'https://placehold.co/100', tcode: 3}];

let vacation = [{ vcode: 1, scode: 1, vstart: '2026-07-25', vend: '2026-07-27', vstory: '여름휴가'},
                {vcode: 2, scode: 2, vstart: '2026-08-01', vend: '2026-08-02', vstory: '병원 진료'}];


TotalPrint()
function TotalPrint(){
    let tbody = document.querySelector('.card-sub-section table tbody')
    let html = ''
    for(let i=0; i<staff.length; i++){
        let Total = staff[i]
        let tname = '';
        let pname = '';
        for( let j = 0 ; j < team.length ; j++ ){
            if(team[j].tcode == Total.tcode){
                tname = team[j].tname;
                break;
            }
        }

        for(let k=0; k<position.length; k++){
            if(position[k].pcode == Total.pcode){
                pname = position[k].pname
                break
            }
        }   
        html += `<tr>
              <td><img src=${Total.simage}></td>
              <td>${Total.sname}</td>
              <td>${tname}</td>
              <td>${pname}</td>
              <td class="action-links align-right">
                <a href="#" class="link-edit" onClick="staffUpdate(${Total.scode})">수정</a>
                <a href="#" class="link-delete" onClick="staffDelete(${Total.scode})">삭제</a>
              </td>
            </tr>`
    }
    tbody.innerHTML = html
}

// 삭제
function staffDelete(scode){
    for(let i=0; i<staff.length; i++){
        if(staff[i].scode == scode){
            staff.splice(i,1)
            alert('삭제 완료')
            TotalPrint()    
            return
        }
    }
}

// 수정
function staffUpdate(scode){
    for(let i=0; i<staff.length; i++){
        if(staff[i].scode == scode){
            let newSname = prompt('수정할 이름을 입력하세요')
            let newTname = prompt('수정할 부서의 이름을 입력하세요')
            let newPname = prompt('수정할 직급을 입력하세요')
            staff[i].sname = newSname
            staff[i].tcode = newTname
            staff[i].pcode = newPname
            TotalPrint(); return;
        }
    }
}

//등록
let finalstaff = 3
function staffAdd(){
    let name = document.querySelector('.name').value
    let position = document.querySelector('.position').value
    let team = document.querySelector('.team').value
    let image = document.querySelector('.image').value.files
    if(team == 'disabled'){
        alert('부서명을 선택해주세요');
        return;
    }
    let object = {
        tcode:team, pcode:position, sname:name, 
        simage : image == undefined ? 'https://placehold.co/100' : URL.createObjectURL(image),
        scode : finalstaff+1 }
    staff.push(object); finalstaff += 1
    alert('등록 완료');
    TotalPrint()
}
