//fullname=(fname,lname)=>fname + lname

//seaAge = (age)=> "อายุ = "+age

//console.log(fullname("BANK","THITIKORN"));

//console.log(seaAge(20))

//ตัวแปรเก็บข้อมูล
const customerName = "thitikorn"
const age = "25"
const contact = "0892765215"
const address = "Roi-Et"

const customer = {
    customerName, age, contact, address,
    showData() {
        console.log("ข้อมูลลูกค้า = " + customerName)
    }
}
