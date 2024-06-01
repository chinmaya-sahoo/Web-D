/* Business Name Generator by combining list of adjectives and shop name and another word (don't use array)

Adjectives:
Crazy , Amazing , Fire

shop name:
Engine , Foods , Garments

Another word :
Bros , Limited , Hub

*/

let a = Math.random() ;
let b = Math.random() ;
let c = Math.random() ;
let adj,shp,ano;

if(a< (1/3) ){
    adj=" crazy" ;
}
else if(a < (2/3)){
    adj = " amazing";
}
else{
    adj = " fire" ;
}


if(b< (1/3) ){
    shp = " engine" ;
}
else if(b < (2/3)){
    shp = " food";
}
else{
    shp = " garment" ;
}


if(c< (1/3) ){
    ano=" bros" ;
}
else if(c < (2/3)){
    ano = " limited";
}
else{
    ano = " hub" ;
}

console.log(adj + shp + ano);
console.log(a);
console.log(b);
console.log(c);