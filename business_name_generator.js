/* Create a business name generator by the combing list of adjectives and shope name and another word

Adjectives:
crazy
amazing 
fire


shop name:
engine 
foods
garments


Another words
bros
limited
hub

*/
let rand= Math.random();
let first,second,third;
if(rand<0.33){
    first="crazy"
}
else if(rand>0.33 && rand<0.66){
    first="amazing"
    
}
else{
   first="Fire"
}

let shop=Math.random()
if(shop<0.33){
   second="Engine"
}
else if(shop>.033 && shop<0.66){
    second="Foods"
}
else{
    second="Garments"
}

let another=Math.random()
if(another<.033){
    third="Bros"
}
else if(another>0.33 && another<0.66){
    third="Limited"
}
else{
    third="Hub"
}

console.log(`${first} ${second} ${third}`)