// Array Map

// const number =[10,20,30,40,50]
// console.log (`number = ${number}`)
// const result =number.map(e=>{
//     return  e*2
// })

// console.log(`number map = ${result}`)

// const data = ["ฝนตก","แดดร้อน","ฟ้าคะนอง","มีเมฆหนา","อากาศดี","มีหมอก"]

// const result =data.map((e,i)=>{
//     return `วันที่ ${i+1} ,สภาพอากาศ = ${e}`
// })
// console.log(result)

const data = [
    {day:"01/06/2564",weather:"แดดร้อน",tem:28},
    {day:"02/06/2564",weather:"ฝนตก",tem:23},
    {day:"03/06/2564",weather:"มีหมอก",tem:15}
]
const result =data.map(e=>{
    return  e.weather
})
console.log(result)