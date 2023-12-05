//Default parameter
getDataCustomer=(customerName,CustomerAddress ="กรุงเทพมหานคร") => {
const address = `ชื่อลูกค้า  : ${customerName}
    ที่อยู่ : ${CustomerAddress}`
    return address
}
console.log(getDataCustomer("พี่ก้ง","คนร้อยเอ็ด"))
console.log(getDataCustomer("น้องอ้อ"))
