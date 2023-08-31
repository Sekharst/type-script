"use strict";
//functions
function sum(a, b, c) {
    return a + b;
}
sum(10, 20);
function log(message) {
    console.log(message);
}
log("Hello");
function error() {
    throw new Error("Network Error");
}
let mobile = {
    title: "Redmi",
    price: 23000
};
let use = {
    name: "Sekhar",
    age: 20,
};
//Unknown as Any
let userage = 49; //any type is assignable to any other types but not the opposite way
let userage1 = userage;
let userage3 = 20;
let userage4 = userage3;
class Human {
    // private name:string
    // protected age:number
    // public profession: string
    // name:string
    // age:number
    // profession: string
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.name = name,
            this.age = age;
        this.profession = profession;
    }
}
class Sekhar extends Human {
    constructor(name, age, profession, city) {
        super(name, age, profession);
        this.city = city;
    }
    changeAge(age) {
        this.age = age;
    }
    changeName(name) {
        this.name = name;
    }
}
let sekhar = new Human("sekhar", 23, "Full Stack Developer");
let sekhar1 = new Sekhar("sekhar", 23, "Full Stack Developer", 10);
// sekhar1.changeAge
//Generics
function createItems(items) {
    return new Array().concat(items);
}
let numberArray = createItems([1, 2, 3]);
let stringArray = createItems(['Sekhar', 'chandra', 'dsjf']);
console.log('Number array', createItems([4]));
