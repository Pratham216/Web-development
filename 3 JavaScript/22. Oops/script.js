// let obj = {
//     1: "a" ,
//     2: "PRatham"
// }

// console.log(obj);

// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal;  // it is doing inheritance 

class Animal {
    constructor(){
        // this.name =  name;
        console.log('object is created');
    }
    eats(){
        console.log('Animal eats');        
    }
    walks(){
        console.log('Animal walks');
    }
}

class Lion extends Animal{
    hunts(){
        console.log('Lion hunts');
    }
    eats(){
        console.log('Lion eats other animals');  // method overriding
    }
}

let a = new Animal();
console.log(a);

