// 반복문 : for(초기값 ; 조건식 ; 증감식){ 실행문 }
// 배열과 반복문 관계 : 배열의 인덱스는 0부터 요소/자료가 저장되는 순서 규칙
// 즉 인덱스는 0부터 마지막인덱스까지 1씩증가

// [1] 배열의 데이터를 하나씩 출력하시오
/*let  과일목록 = ['사과', '포도', '딸기']
// 2. .length 란? 배열내 요소/자료 개수 반환 , 마지막인덱스 : 배열.length - 1 
for(let 인덱스 = 0; 인덱스 <= 과일목록.length-1; 인덱스++){
    console.log(과일목록[인덱스])
}

// [생각해보기] 3개의 이름을 입력받아 html에 출력하시오
let 이름 = []

for(let 인덱스1=1; 인덱스1 <= 3; 인덱스1++){
    let 입력 = prompt('이름: ')
    이름.push(입력)
}
// 반복문을 이용한 html 구성
let html =``
for(let 인덱스 = 0; 인덱스 <= 이름.length-1; 인덱스++){
    html += `<li> ${이름[인덱스]} </li>`
}
document.querySelector('ol').innerHTML = html


// 반복문 제어키워드 
// 1. continue; 반복문의 증감식으로 이동
for(let 반복수=1; 반복수<=5; 반복수++){
    // 만약 반복수가 3이면 continue를 만나면 코드흐림이 증감식으로 이동한다.
    if(반복수==3){continue}     // 반복문의 증감식으로 흐름 이동
    console.log(반복수)         // 즉 반복수가 3이면 console.log 실행 안됨
}

// 2. break; 반복문의 종료/탈출
for(let 반복수=1; 반복수 <=5; 반복수++){
    if(반복수==3){break}    // break 만나면 for문의 끝나는 } 중괄호 밖으로 이동
    console.log(반복수)
} // !!여기로 이동!!


// 3. 무한루프 (무한반복) *특정조건의 break 권장*
// for( ; ; ){console.log('무한출력')}
for( ; ; ){
    let 입력 = prompt()
    if(입력 === 'EXIT'){break} //exit 입력 시 무한루프 종료 가능
}

*/
/*문제 1: 1부터 10까지 출력하기

for 반복문을 사용하여 1부터 10까지의 숫자를 콘솔에 순서대로 

출력하는 프로그램을 작성하시오.
for(let 반복=1; 반복<=10; 반복++){
    console.log(반복)
}
*/

/*문제 2: 배열의 모든 요소 출력하기

다음과 같은 과일 배열이 있습니다. for 반복문을 사용하여 

배열의 모든 요소를 하나씩 콘솔에 출력하시오.

let fruits = ['사과', '바나나', '포도', '딸기'];
let fruits = ['사과', '바나나', '포도', '딸기'];
for(let 과일인덱스=0; 과일인덱스 <= fruits.length-1; 과일인덱스++){
    console.log(fruits[과일인덱스])
}
*/

/*문제 3: 배열 역순으로 출력하기

주어진 배열을 for 반복문을 사용하여 

역순으로 (마지막 요소부터 첫 요소 순서로) 출력하는 프로그램을 작성하시오.

let numbers = [1, 2, 3, 4, 5];  출력 예시: 5 4 3 2 1  
let numbers = [1, 2, 3, 4, 5];
for(let 숫자인덱스 = numbers.length-1; 숫자인덱스 >= 0; 숫자인덱스--){
    console.log(numbers[숫자인덱스])
}
*/


/*문제 4: 1부터 50까지의 합계 구하기

for 반복문을 사용하여 1부터 50까지 모든 정수의 합을 구하여 콘솔에 출력하시오.
let 누적= 1
for(let 숫자 = 2; 숫자 <= 50; 숫자++){
    누적 = 누적 + 숫자
}
console.log(누적)
*/

/*문제 5: 짝수만 출력하기

for 반복문과 if 조건문을 사용하여, 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하시오.

for(let 숫자 = 1; 숫자 <= 20; 숫자++){
    if(숫자 % 2 == 0){console.log(숫자)}
}
    */

/*문제 6: 배열 요소의 합계와 평균 구하기

다음 학생들의 점수가 담긴 배열이 있습니다. for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오.

let scores = [85, 92, 78, 65, 95]; 

let scores = [85, 92, 78, 65, 95];
let start = 0
for(let scoreindex = 0; scoreindex <= scores.length-1; scoreindex++){
    sum += scores[scoreindex]
}
console.log(`총점${sum}, 평균${sum/scores[scores.length-1]}`)
*/

/* 문제 7: 특정 조건에서 반복문 탈출하기 (break)

점수 배열에서 100점 만점자가 처음 나타나면, 그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오.

let scores = [77, 82, 100, 54, 96];

출력 예시: 100점 만점자를 찾았습니다
let scores = [77, 82, 100, 54, 96];
for(let i=0; i<=scores.length-1; i++){
    if(scores[i] == 100){console.log('만점자를 찾았습니다'); break;}
}
*/

/*문제 8: 특정 조건 건너뛰기 (continue)

점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.

let scores = [90, 45, 72, 88, 59, 100];

let scores = [90, 45, 72, 88, 59, 100];
for(let i=0; i<=scores.length-1; i++){
    if(scores[i] < 60){continue}
    {console.log(scores[i])}
} */

/*문제 9: 배열에서 특정 값의 개수 세기

다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.

let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']; */
/*문제 9: 배열에서 특정 값의 개수 세기

다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.

let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']; 
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
let sum = 0
for(let i=0; i<=bloodTypes.length-1; i++){
    if(bloodTypes[i] == 'A'){sum++}
}
console.log(sum)
*/

/*문제 10: 학생 점수 시각화하기 

주어진 학생 이름과 점수 배열을 이용하여, 각 학생의 점수를 동그라미(●, ○)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.

(1). 초기 데이터

학생 이름과 점수는 두 배열의 동일한 인덱스를 사용합니다.

let nameArray = ['유재석', '강호동', '신동엽'];

let scores = [92, 86, 72];

(2). 구현 조건

for 반복문을 사용하여 모든 학생의 데이터를 순회합니다.

점수를 100점 만점으로 환산하여 시각화합니다.

점수의 십의 자리 숫자만큼 꽉 찬 동그라미(●)를, **나머지(10 - 십의 자리 수)**만큼 빈 동그라미(○)를 출력합니다.

예시: 점수가 92점이면 십의 자리는 9이므로, ●●●●●●●●●○ 와 같이 표현합니다.

HTML에 학생 이름과 변환된 점수 시각화를 한 줄씩 출력합니다.

(3). 출력 예시 (HTML)

유재석 ●●●●●●●●●○

강호동 ●●●●●●●●○○

신동엽 ●●●●●●●○○○  */

let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
let html = ''               // html에 출력할 문자열 저장하는 변수
for(let i=0; i<=nameArray.length-1; i++){               // 3회전
    // 이름 대입
    html = html + nameArray[i]
    // 점수 대입
    html = html + scores[i]
    // 점수 도형으로 변경
    for(let 도형수 = 1; 도형수<=10; 도형수++){          // 10회전
        if(scores[i] / 10 > 도형수){html = html + "●"}
        else{html = html + "○"}
    }
    // 이름 마다 줄바꿈 대입
    html = html + "<br />"
}
document.querySelector("p").innerHTML = html;
// 상위 for문이 1회 반복할때 마다 하위 for문은 전체 반복함
// 3*10  => 30회전

