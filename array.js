/*let arraystring=[10,40,20,"satish",60];
console.log(arraystring);
arraystring.push("satya");
console.log(arraystring);
arraystring.pop();
console.log(arraystring);
arraystring.shift();
console.log(arraystring);
arraystring.unshift(20);
console.log(arraystring);
arraystring.sort();
console.log(arraystring);
console.log(arraystring.entries());
arraystring.reverse()
console.log(arraystring);
console.log(arraystring.indexOf(20));
console.log(arraystring.at(0));
console.log(arraystring.lastIndexOf(40));
*/
 let ename=["sai","kumar","satya"]   
 let num=[1,2,3,4,5,6,7,8,9,]
/*ename.forEach((ename) => {

    console.log(ename.toUpperCase())
});
let new_array =ename.map((ename)=>{
   return ename.toUpperCase()
    
});
console.log(new_array);
let new_array1 =ename.forEach((ename)=>{
    return ename.toUpperCase()
     
 });
 console.log(new_array1);
 let enames=[]
 for(let ename1 of ename){
        enames.push(ename1.toUpperCase());
}
console.log(enames);
*/
/*let new_num=num.map((num)=>{
   return num%2===0
});console.log(new_num);
let new_num1=num.filter((num)=>{
    return num%2===0
 });console.log(new_num1);
let new_Num=[]
for( let number of num){
    if(number%2===0){
new_Num.push(number)
    }
}
console.log(new_Num);
*/
let new_num1=num.map((num)=>{
    if(num%2===0){
     return num
    }
 });console.log(new_num1);