function display(){
     alert("login success ")
}
const str = "name=John&age=30&city=NewYork";
const obj = Object.fromEntries(new URLSearchParams(str));
console.log(obj);