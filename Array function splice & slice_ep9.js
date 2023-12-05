//splice & slice    เป็นการลบมาชิกข้อมูลของอาร์เรย์แบบช่วง
//splice (ตำแหน่งต้องการที่จะลบ,จำนวนที่จะลบ,สมาชิกที่ต้องการแซกในตำแหน่งที่ลบ)
//slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)

const data =[10,20,30,40,50]

data.splice(1,2,999,1000)  //การลบแบบ splice มีผลต้องข้อมูล

// console.log(data);

const data1 = [100,110,120,130,140,150]
console.log(data1)
const lastdata =data1.slice(0,2) //ไปเอาข้อมูลตั้งแต่index ที่0  ไปจนถึง ก่อน indexที่2 =>[100,110]
console.log(lastdata)
