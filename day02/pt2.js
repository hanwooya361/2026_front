console.log("[운동기록]")

alert("사용자에 이름을 입력해주세요!")
console.log("이름")
let username1 = prompt()
console.log(username1)

alert("운동 종류를 입력해주세요!")
console.log("운동 종류")
let exercise = prompt()
console.log(exercise)

alert("운동 시간(분 단위)을 입력해주세요!")
console.log("운동 시간")
let extime = prompt()
console.log(extime)   

alert("칼로리가 계산되었습니다!")
console.log("칼로리")
let kl = (extime*7)
console.log(kl)  

document.write("<h1>운동 기록</h1>");
document.write("이름 : " + username1 + "<br />");
document.write("운동종류 : " + exercise + "<br />");
document.write("운동시간 : " + extime + "<br />");
document.write("칼로리 : " + kl);
