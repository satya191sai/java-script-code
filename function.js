/*function add(a,b)
{
  console.log(a+b);
  console.log(a*b);
  
}
add(1,2)
add(1,"sai")
add(1)
add(1,2,3)*/

/*function add(a,b){
   let c=1
    
   return a+b+c   
}
add(1,2,)
t=add(1,2,3)
console.log(t);*/


/* function cal_age(year){   
 let current=new Date().getFullYear();
 let current1=new Date().getMonth();
 let current2=new Date().getDate();
console.log(current);
console.log(current1);
console.log(current2);
let ob=new Date();
console.log(ob.getTime());
return current-year
 }
 let age=cal_age(1997);
 console.log(age);
*/
function login(name, status){
  if (status===true){

    return "login success"
  }else{
          return "login failed"
  }
}
let t1=login("harish",true)
let t2=login("harish",false)
console.log(t1);
console.log(t2);

