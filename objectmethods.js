let emp={name:"sai",eid:101,esal:200000}

console.log(Object.keys(emp));
console.log(Object.values(emp));
/*console.log(Object.freeze(emp));*/
console.log(Object.entries(emp));


emp.name="satya";
console.log(emp);
