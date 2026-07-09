TTT = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
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
) {console.log("X 승리")}

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
) {console.log("X 승리")}

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
    TTT[0]==('X') && TTT[1]==('X') && TTT[2]==('X') |
    TTT[3]==('X') && TTT[4]==('X') && TTT[5]==('X') ||
    TTT[6]==('X') && TTT[7]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[3]==('X') && TTT[6]==('X') ||
    TTT[1]==('X') && TTT[4]==('X') && TTT[7]==('X') ||
    TTT[2]==('X') && TTT[5]==('X') && TTT[8]==('X') ||
    TTT[0]==('X') && TTT[4]==('X') && TTT[8]==('X') ||
    TTT[3]==('X') && TTT[4]==('X') && TTT[6]==('X')
) {console.log("X 승리")}

