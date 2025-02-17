let emps={name:"sai",id:102};
    
    let object_Length = Object.entries(emps).length;
    /*object is empty using object.entries method*/
if (object_Length<=0){
    console.log("object is empty")
}else{
    console.log("object is not empty")
    console.log("the lenth of object is",object_Length);
}
/* objects is empty first converting into array*/
let x=Object.keys(emps).length
console.log(x)
if(x.length>0){
    console.log("object is empty")   
}
else{
    console.log("object is not empty")
    console.log("the lenth of object is",x);
}
/*object empty  using ternary operator*/
    x.length>0?
    console.log("object is empty"):
    console.log("object is not empty")