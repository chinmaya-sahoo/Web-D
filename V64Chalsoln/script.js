let rand1 = Math.random()
let rand2 = Math.random()
let rand3 = Math.random()
let first,second,third

if(rand1 < 0.3333333){
   first = "Carzy" ;
}
else if(rand1 < 0.6666666){
    first= "Amazing" ;
}
else{
    first = "Fire";
}

if(rand2 < 0.3333333){
   second = "Engine" ;
}
else if(rand2 < 0.6666666){
    second= "Food" ;
}
else{
    second = "Garment";
}

if(rand3 < 0.3333333){
   third = "Bros" ;
}
else if(rand3 < 0.6666666){
    third= "Hub" ;
}
else{
    third = "Limited";
}

// console.log(first + second + third);
console.log(`${first} ${second} ${third}`);