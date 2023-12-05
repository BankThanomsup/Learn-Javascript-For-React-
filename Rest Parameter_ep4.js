//Rest parameter

// summation1 = (x,y) => {
//     return x+y ;
// }

summation2 = (...numberArr) => {
     let total =0 
    for(let number of numberArr) total+=number  // 0+500+1000
    return total
}

console.log(summation2(500,1000,1500    ));