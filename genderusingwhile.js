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
    {fname:"roopa", lname:"satya", age:40,gender:"bigender"}
]
let no_Of_Female_Users=0;
let no_Of_Female_Userss=0;
let i=0;
while(i<=emp.length-1){
    if(emp[i].gender ==="female"){
        no_Of_Female_Users++;
    }
    i++;
}
console.log(no_Of_Female_Users)

for(let j=0;j<=emp.length-1;j++){
    if(emp[j].gender ==="male"){
        no_Of_Female_Users++;
    }
}
console.log(no_Of_Female_Userss)
