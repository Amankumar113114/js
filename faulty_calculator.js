/*it perform wrong operations 10% of the time 
+ ---> -
* ---> +
-  --> /
/ --->**
*/
let random = Math.random()
console.log(random)
let a = prompt("enter first number")
let b = prompt("enter operation")
let c = prompt("enter second number")


if (random>0.1){
 console.log(`addition of ${a} and ${b} =${a+b}`)
 console.log(`subtraction of ${a} and ${b} =${a-b}`)
 console.log(`multiply of ${a} and ${b} =${a*b}`)
 console.log(`division of ${a} and ${b} =${a/b}`)

}
else{
 console.log(`addition of ${a} and ${b} =${a-b}`)
 console.log(`subtraction of ${a} and ${b} =${a/b}`)
 console.log(`multiply of ${a} and ${b} =${a+b}`)
 console.log(`division of ${a} and ${b} =${a**b}`)
}