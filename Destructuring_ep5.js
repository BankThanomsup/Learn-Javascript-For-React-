// Destructuring = การสลายโครงสร้าง

//Array
// const colors = ["red","green","yellow"]
// const [,green,yellow] = colors

// console.log(red)
// console.log(green)
// console.log(yellow)

//object
const product = {
    productName : "คอมพิวเตอร์",
    price : 30000 ,
    stock :10
}


const{productName : productname, price:price , stock:stock } = product

console.log(productname);
console.log(price);
console.log(stock);