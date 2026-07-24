/* let TTT = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
let gameOver = false 
console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

let p1 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p1] === ' ') {
    TTT[p1]= 'O'
}else {
    console.log("이미 선택된 칸입니다.")
}
console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

let p2 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p2]=== ' ') {
    TTT[p2]= "X"
}else{
    console.log("이미 선택된 칸입니다.")
}
console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

let p3 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p3]=== ' ') {
    TTT[p3]= "O"
}else{
    console.log("이미 선택된 칸입니다.")
}

console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

let p4 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p4]=== ' ') {
    TTT[p4]= "X"
}else{
    console.log("이미 선택된 칸입니다.")
}

console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

let p5 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p5]=== ' ') {
    TTT[p5]= "O"
}else{
    console.log("이미 선택된 칸입니다.")
}

console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

if (
    TTT[0]==('O') && TTT[1]==('O') && TTT[2]==('O') ||
    TTT[3]==('O') && TTT[4]==('O') && TTT[5]==('O') ||
    TTT[6]==('O') && TTT[7]==('O') && TTT[8]==('O') ||
    TTT[0]==('O') && TTT[3]==('O') && TTT[6]==('O') ||
    TTT[1]==('O') && TTT[4]==('O') && TTT[7]==('O') ||
    TTT[2]==('O') && TTT[5]==('O') && TTT[8]==('O') ||
    TTT[0]==('O') && TTT[4]==('O') && TTT[8]==('O') ||
    TTT[3]==('O') && TTT[4]==('O') && TTT[6]==('O') 
) {console.log("O 승리")}
 else if(
    TTT[0]==('X') && TTT[1]==('X') && TTT[2]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[5]==('X') ||
    TTT[6]==('X') && TTT[7]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[3]==('X') && TTT[6]==('X') ||
    TTT[1]==('X') && TTT[4]==('X') && TTT[7]==('X') ||
    TTT[2]==('X') && TTT[5]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[4]==('X') && TTT[8]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[6]==('X')
) {
    console.log("X 승리")
    gameOver = true
}

let p6 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p6]=== ' ') {
    TTT[p6]= "X"
}else{
    console.log("이미 선택된 칸입니다.")
}

console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

let p7 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p7]=== ' ') {
    TTT[p7]= "O"
}else{
    console.log("이미 선택된 칸입니다.")
}

console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

if (
    TTT[0]==('O') && TTT[1]==('O') && TTT[2]==('O') ||
    TTT[3]==('O') && TTT[4]==('O') && TTT[5]==('O') ||
    TTT[6]==('O') && TTT[7]==('O') && TTT[8]==('O') ||
    TTT[0]==('O') && TTT[3]==('O') && TTT[6]==('O') ||
    TTT[1]==('O') && TTT[4]==('O') && TTT[7]==('O') ||
    TTT[2]==('O') && TTT[5]==('O') && TTT[8]==('O') ||
    TTT[0]==('O') && TTT[4]==('O') && TTT[8]==('O') ||
    TTT[3]==('O') && TTT[4]==('O') && TTT[6]==('O') 
) {console.log("O 승리")}
 else if(
    TTT[0]==('X') && TTT[1]==('X') && TTT[2]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[5]==('X') ||
    TTT[6]==('X') && TTT[7]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[3]==('X') && TTT[6]==('X') ||
    TTT[1]==('X') && TTT[4]==('X') && TTT[7]==('X') ||
    TTT[2]==('X') && TTT[5]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[4]==('X') && TTT[8]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[6]==('X')
) {
    console.log("X 승리")
    gameOver = true
}

let p8 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p8]=== ' ') {
    TTT[p8]= "X"
}else{
    console.log("이미 선택된 칸입니다.")
}

console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

if (
    TTT[0]==('O') && TTT[1]==('O') && TTT[2]==('O') ||
    TTT[3]==('O') && TTT[4]==('O') && TTT[5]==('O') ||
    TTT[6]==('O') && TTT[7]==('O') && TTT[8]==('O') ||
    TTT[0]==('O') && TTT[3]==('O') && TTT[6]==('O') ||
    TTT[1]==('O') && TTT[4]==('O') && TTT[7]==('O') ||
    TTT[2]==('O') && TTT[5]==('O') && TTT[8]==('O') ||
    TTT[0]==('O') && TTT[4]==('O') && TTT[8]==('O') ||
    TTT[3]==('O') && TTT[4]==('O') && TTT[6]==('O') 
) {console.log("O 승리")}
 else if(
    TTT[0]==('X') && TTT[1]==('X') && TTT[2]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[5]==('X') ||
    TTT[6]==('X') && TTT[7]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[3]==('X') && TTT[6]==('X') ||
    TTT[1]==('X') && TTT[4]==('X') && TTT[7]==('X') ||
    TTT[2]==('X') && TTT[5]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[4]==('X') && TTT[8]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[6]==('X')
) {console.log("X 승리")}

let p9 = Number(prompt('원하는 칸을 선택하시오(0~8)'))
if (TTT[p9]=== ' ') {
    TTT[p9]= "O"
}else{
    console.log("이미 선택된 칸입니다.")
}

console.log(TTT[0],TTT[1],TTT[2])
console.log(TTT[3],TTT[4],TTT[5])
console.log(TTT[6],TTT[7],TTT[8])

if (
    TTT[0]==('O') && TTT[1]==('O') && TTT[2]==('O') ||
    TTT[3]==('O') && TTT[4]==('O') && TTT[5]==('O') ||
    TTT[6]==('O') && TTT[7]==('O') && TTT[8]==('O') ||
    TTT[0]==('O') && TTT[3]==('O') && TTT[6]==('O') ||
    TTT[1]==('O') && TTT[4]==('O') && TTT[7]==('O') ||
    TTT[2]==('O') && TTT[5]==('O') && TTT[8]==('O') ||
    TTT[0]==('O') && TTT[4]==('O') && TTT[8]==('O') ||
    TTT[3]==('O') && TTT[4]==('O') && TTT[6]==('O') 
) {console.log("O 승리")}
 else if(
    TTT[0]==('X') && TTT[1]==('X') && TTT[2]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[5]==('X') ||
    TTT[6]==('X') && TTT[7]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[3]==('X') && TTT[6]==('X') ||
    TTT[1]==('X') && TTT[4]==('X') && TTT[7]==('X') ||
    TTT[2]==('X') && TTT[5]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[4]==('X') && TTT[8]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[6]==('X')
) {
    console.log("X 승리")
    gameOver = true
}

if(gameOver===false){
    console.log('무승부')
}
*/

/*게임 흐름 판단 :
     1. 게임판 상황 출력 (모두 비어 있는 상태)
     2. 게임판에서 특정 위치를 클릭해 'O'룰 둔다 (게임판 상태 변경)
     3. 승리의 경우의수 : 8가지
        - 가로 이기는 수: 1행이 모두 같으면, 2행, 3행
        - 세로 이기는 수: 1열이 모두 같으면, 2열, 3열
        - 대각선 이기는 수 : 왼쪽 대각선 모두 같으면, 오른쪽
--------------- 1 ~ 3 까지 반복------------------*/

// 게임 자료 : 'O' , 'X' , ' '  / 9개 갖는다 -> 9개의 변수 -> 배열 -> 1개 변수

let 게임판 = [  '','','','','','','','',''  ]
let 승리자 = ''
let 선후공 = true   // true : 선공      false : 후공
// 배열 출력
console.log(`${게임판[0]} ${게임판[1]} ${게임판[2]} ${게임판[3]} ${게임판[4]} ${게임판[5]} ${게임판[6]} ${게임판[7]} ${게임판[8]}`)

if(승리자 == ''){ // 만약 승리자가 없으면
// 특정 위치 입력받기
let 입력위치 = prompt('위치 : 0 ~ 8')
// 입력받은 위치에 알 두기
게임판[입력위치] = 선후공 ? 'O' : 'X';
선후공 = !선후공;
// 게임종료 이기는 수
// 1. 가로 이기는 수 3개
if(게임판[0] == 게임판[1] && 게임판[1] == 게임판[2]) { 승리자 = 게임판[0] }
if(게임판[3] == 게임판[4] && 게임판[4] == 게임판[5]) { 승리자 = 게임판[3] }
if(게임판[6] == 게임판[7] && 게임판[7] == 게임판[8]) { 승리자 = 게임판[6] }
// 2. 세로 이기는 수 3개
if(게임판[0] == 게임판[3] && 게임판[3] == 게임판[6]) { 승리자 = 게임판[0] }
if(게임판[1] == 게임판[4] && 게임판[4] == 게임판[7]) { 승리자 = 게임판[1] }
if(게임판[2] == 게임판[5] && 게임판[5] == 게임판[8]) { 승리자 = 게임판[2] }
// 3. 대각선 이기는 수 2개
if(게임판[0] == 게임판[4] && 게임판[4] == 게임판[8]) { 승리자 = 게임판[0] }
if(게임판[2] == 게임판[4] && 게임판[4] == 게임판[6]) { 승리자 = 게임판[2] }
// 4. 무승부
if(!게임판.includes( '')) {승리자 = ' D '}
}
console.log(`${게임판[0]} ${게임판[1]} ${게임판[2]} ${게임판[3]} ${게임판[4]} ${게임판[5]} ${게임판[6]} ${게임판[7]} ${게임판[8]}`)
// 종료 : 만약 승리자에 알이 존재하면 
if( 승리자 != ''){
    console.log(`승리자는 ${승리자}`)
} else if(승리자 == 'D'){
    console.log('')
}