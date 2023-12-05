//Array Filter
// const data = [10, 20, 30, 40]

// const result = data.filter(e => {
//     return e > 20
// })

// console.log(result);

const data = [
    {
        name: "TIM",
        salary: "25000",
        department: "programmer"
    },
    {
        name: "PIG",
        salary: "30000",
        department: "Influcer"
    }, {
        name: "JOJO",
        salary: "10000",
        department: "support"
    }, {
        name: "BANK",
        salary: "50000",
        department: "trainee"
    }, {
        name: "JOY",
        salary: "10000",
        department: "Business"
    },
]

const result = data.filter(e=>{
    return e.salary>10000
}).filter(e=>e.department ==="Influcer"
)
console.log(result)

