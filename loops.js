// there are five types of loops in javascript

// for loop
let a=1;
 for(let i=0;i<5;i++){
     console.log(a+i)
 }

 //for in loop
 let obj={
     naam:"mr.x",
     class:"12th",
     roll_no:"23"
 }
 for (const key in obj) {
     const element = obj[key]
     console.log(key,element)  
 }

 //forof loops
 let _name="aman"
 for (const element of _name) {
     console.log(element) 
 }

 //while loop
 let i=0; 
 while(i<8){
    console.log(i);
     i++
}

// do while loop ==> runs once
let b=0
do{
    console.log(b)
    b++
}while(b<8)
