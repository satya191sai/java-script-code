let emp=[{fname:"John", lname:"Doe", age:25,gender:"male"},
    {fname:"sai", lname:"kumar", age:30,gender:"female"},
    {fname:"roopa", lname:"satya", age:40,gender:"male"},
    {fname:"roopa", lname:"satya", age:40,gender:"female"},
    {fname:"sai", lname:"kumar", age:30,gender:"female"},
    {fname:"roopa", lname:"satya", age:40,gender:"male"},
    {fname:"roopa", lname:"satya", age:40,gender:"female"},
    {fname:"sai", lname:"kumar", age:30,gender:"female"},
    {fname:"roopa", lname:"satya", age:40,gender:"male"},
    {fname:"roopa", lname:"satya", age:40,gender:"female"},
    {fname:"sai", lname:"kumar", age:30,gender:"female"},
    {fname:"roopa", lname:"satya", age:40,gender:"male"},
    {fname:"roopa", lname:"satya", age:40,gender:"female"}
]
    console.log(emp[0].fname)
    console.log(emp[0].lname)
    console.log(emp[0].age)
    console.log(emp[1].fname)
    console.log(emp[1].lname)
    console.log(emp[1].age)

    let numof=0;
    let numoff=0
    for (let empdts of emp){
        
        if (empdts.gender==="male")
        {
            numof++
    }
        if (empdts.gender==="female")
            {
                numoff++
            }
           
            
    }
    console.log(numoff)       
    console.log(numof)     
    
    
    