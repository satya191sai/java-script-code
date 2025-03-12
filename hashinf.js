const bcrypt = require('bcrypt')

let user={
    uid:101,
    cc:'1234567812345678',
    password:'ILoveIndia'
}
let salt =bcrypt.genSaltSync(10)
//let new_nn=bcrypt.hashSync(user.uid,salt)
let new_CC=bcrypt.hashSync(user.cc,salt)
let new_pwd=bcrypt.hashSync(user.password,salt)
//console.log(user);

//console.log(new_CC)
//console.log(new_pwd);
/*let {uid,cc,password}=user;
console.log(uid);
console.log(cc);
console.log(password);*/
a=10
b=20
console.log(a);
console.log(b);

a=a+b
b=a-b
a=a-b;
console.log(a);
console.log(b);



