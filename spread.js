/*let array1=[20,30,50,3,5,]
let array2=[8,9,3,0,33,45,22,]
let new_array=[...array1,...array2]
console.log(new_array);
let new_array1=[...new_array,10,20,90]
console.log(new_array1);
let new_one=[]
for(let array5 of array1){
      new_one.push(array5)
}
console.log(new_one);
let map_array=array2.map((array2)=>{
return array2
});
console.log(map_array);*/

let emp={name:"sai",eid:101,esal:200000}
let emp1={name:"kumar",eids:102,esal:500000}

let new_object={...emp,...emp1}
console.log(new_object);

/*function add(a,...b)
{
    console.log("a value is",a,"b value is",b);
    
}
add(10,20);
add(10,20,30);
add(10,20,30,40);
add(10,20,50,60,70);*/
