// การ Loop Array
// For loop , ForEach , Forof

const data = [10,20,30,40,50]

// for(let i=1;i<=data.length;i++){
//     if(data[i-1]>=30) break

//     console.log(`ลำดับที่ ${i} = ${data[i-1]}`)
// }
//---------------------------------------------------
// data.forEach(x=>{
//     let sum =+ x
//     console.log(`ผลรวม = ${sum}`)
// })
//---------------------------------------------------
for( const element of data ){
    console.log(`สมาชืกในแอเรย์ = ${element}`);
}

