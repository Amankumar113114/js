//there are two type of datatype in js
/*
primitive datatype :- set of basic datatype 
1.null
2.number
3.string
4.symbol
5.bigint
6.boolean
7.undefine 
*/
let a=null;
let b=5;
let c="ram";
const d=true;
let e=undefined;

console.log(a,b,c,d,e);
console.log(typeof a ,typeof b,typeof c,typeof d,typeof e);

//object create
let x={
    "name":"ram",
    "roll no":"29",
    "class":"10th"
}
console.log(x)
x.section="A" //use to add key and values
console.log(x);