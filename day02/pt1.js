console.log("[주문 접수]")

alert("안녕하세요 손님의 성함을 입력해주세요!")
console.log("이름")
let username = prompt('사용자이름: ')
console.log(`username: ${username}`)

alert("드시고 싶은 음료 이름을 입력해주세요!")
console.log("메뉴")
let foodname = prompt('메뉴: ')
console.log(`foodname: ${foodname}`)

alert("수량을 입력해주세요!")
console.log("수량")
let quantity = Number(prompt('수량 '))
console.log(`quantity: ${quantity}`)