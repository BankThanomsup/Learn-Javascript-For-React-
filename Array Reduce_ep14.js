// Array Reduce  คือการนำเอาสมาชิกในแอเรย์มาทำอะไรซักอย่างนึงแล้วตอบกลับออกไปอาจจะเป็นตัวเลข ข้อความ 
//array.reduce((ค่าที่ถูกประมวลผล)=>{},ค่าเริ่มต้น)
//map คือการ ส่งแอเนย์ก้อนใหม่กลับออกมา
//filter ได้แอเรย์ที่ถูกต้องตามเงื่อนไข 

// const data = [10, 20, 30, 40]

// const result = data.reduce((value, e) => {

//     console.log(value);
//     const total = e + value
//     return total
// }, 0)

//console.log(result);

//value =0
//total =10+0 =10
//vaule = 10
//total =10+20 = 30


//ต้องการเอาราคามาหาผลรวม อยากรู้ว่ายอดรวมเท่าไหร
const cart = [
    { name: "กระเป๋า", price: 1500},
    { name: "หนังสือ", price: 500 },
    { name: "กล้องถ่ายรูป", price: 1000 },
]

const sum = cart.reduce((value, e) => e.price + value ,0
)
console.log(sum);
