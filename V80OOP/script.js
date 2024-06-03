// let obj = {
//     a : 1,
//     b : "Harry"
// }

// console.log(obj)

// let Animal = {
//     eats : true 
// };

// let rabbit = {
//     jumps :true 
// };

// rabbit.__proto__ = Animal ;

class Animal{
    constructor(name){
        this.name = name
        console.log("object is created")
    }

    eats(){
        console.log("kha raha hun")
    }
    jumps(){
        console.log("kud raha hun")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name = name
        console.log("lion object created")
    }

    eats(){
        super.eats()
        console.log("kha raha hun roar")
    }
}

let a = new Animal("bunny")
console.log(a)

let l = new Lion("shera")