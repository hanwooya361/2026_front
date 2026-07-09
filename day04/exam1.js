
// 연산/함수 결과는 항상 1개   

// 분기/조건문 : 상황에따라 흐름 분기/재어 
    // 프로젝트/실무 : 어떠한 기능에 따른 상황 판단 

// 1. if문: if(조건식) 실행문 ,    조건식의 반환값은 1개이면서 true or false 여야함
if( 10 > 3 ) console.log("1번: 10은 3보다 크다. ")           
if( 10 > 30 ) console.log("2번: 10은 30보다 크다. ")        // fail

// 2. if문 : if(조건식){ 실행문; 실행문; } , 실행문이 2개 이상이면 { } 묶는다
if( 10 > 3 ){
    console.log("3번. 10은 3보다 크다 ");
    console.log("3번. [2] ");
}

// 3. if문: 조건식 결과가 ture , false 분기 처리
if( 10 > 3 ) {console.log('4번. 10은 3보다 크다');}
else {console.log('4번. 10은 3보다 작다');}

// 4. if문 ~else if ~else if ~else : 다수 조건에 따른 true 결과를 하나만 처리할때
if( 10 > 3 ) {console.log('5번. 10은 3보다 크다');}
else if( 10 > 2 ) {console.log('5번. 10은 2보다 크다');}
else if( 10 > 1 ) {console.log('5번. 10은 1보다 크다');}
else{console.log('5번. 거짓');}
// vs   if if if : 다수 조건에 따른 다수 결과를 처리
if( 10 > 3 ) {console.log('5번. 10은 3보다 크다');}
if( 10 > 2 ) {console.log('5번. 10은 2보다 크다');}
if( 10 > 1 ) {console.log('5번. 10은 1보다 크다');}
else{console.log('5번. 거짓');}

// 5. 중첩if
let 성별 = '남자'
let 점수 = '90'
if( 성별 == '여자' ){ // 만약 성별이 여자이면
    if( 점수 >= 80 ){ // '여'이면서 점수가 80 이상이면
        console.log('여학생 우수')
    }else {
        console.log('여학생')
    }
}else{ // 아니고 남자이면   
    if( 점수 >= 80 ) {console.log('남학생 우수')}
    else(console.log('남학생'))
}