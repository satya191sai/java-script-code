let employees={ename:"satya",id:56,sal:78990
    ,bname:"sonia",id1:87,sal2:7687
    ,cname:"kumar",id2:78,sal1:878978}
// for(let i=0;i<=emp.length-1;i++){ 
//    console.log(emp[i].ename);
// }
// let i=0
// while(i<=emp.length-1){
//     console.log(emp[i].id,emp[i].ename);
//     i++
// }
for(let emp in employees){
    console.log(emp,":",employees[emp]);
    }
    