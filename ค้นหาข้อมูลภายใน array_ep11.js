//indexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
//findIndex(ข้อมูล) =>ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้-1

const colors =["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]

// const index = colors.indexOf("ขาว")
// console.log(index)

const search = colors.findIndex(element => element ==="เขียว")
console.log(search)
