//Spread Operator

const newArr = [100,200,300]
const data = [10,20,...newArr]
console.log (data.length);


const colors = ["เขียว","แดง","น้ำเงิน"]
const allcolors =["เหลือง","ขาว",...colors]

const newcolor =["เทา","ดำ"]
allcolors.push(...newcolor);

console.log(allcolors);