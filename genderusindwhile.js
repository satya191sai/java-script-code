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
    {fname:"roopa", lname:"satya", age:40,gender:"male"}
]
let i=0;
while(emp.gender==="female")
    {
    i++;
}
console.log(i)
console.log(emp.length)