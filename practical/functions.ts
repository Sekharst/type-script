//functions

function sum(a:number, b:number,c?:number):number {
    return a+b;
}
sum(10,20)

function log(message:string):void{
    console.log(message) 

}
log("Hello")

function error():never {
    throw new Error("Network Error")
}


//interfaces
interface MobileInterface{
    title:string,
    price: number
}


let mobile = {
    title: "Redmi",
    price:23000
}

interface sumFunction{
    (a:number,b:number,c?:number):number
}

// let addition: sumFunction = (a: number,b: number,c?: number) => a + b + c;

// let sub: sumFunction = (a: number,b: number,c?: number) => a - b - c;



type MobileType = {
    name: String,
    age: number
}

let use: MobileType = {
    name:"Sekhar",
    age:20,
}

//Unknown as Any
let userage :unknown= 49 ; //any type is assignable to any other types but not the opposite way
let userage1 :number = <number>userage

let userage3 :any =20;
let userage4 : string = userage3


//class
interface HumanInterface {
    name: String,
    age: number,
    profession?:string
}

class Human implements HumanInterface{
    // private name:string
    // protected age:number
    // public profession: string
    // name:string
    // age:number
    // profession: string
    constructor(public name:string,public age:number,public profession:string){
        this.name = name,
        this.age = age
        this.profession = profession
    }
}

class Sekhar extends Human {
    city:number
    constructor(name:string,age:number,profession:string,city:number){
        super(name,age,profession)
        this.city = city
    }
    changeAge(age: number) {
        this.age = age;
    }
    changeName(name:string){
        this.name=name;
    }
} 



let sekhar = new Human("sekhar",23,"Full Stack Developer")
let sekhar1 = new Sekhar("sekhar",23,"Full Stack Developer",10)

// sekhar1.changeAge


//Generics
function createItems<Type>(items: Type[]):Type[] {
    return new Array().concat(items)
}

let numberArray = createItems<number>([1,2,3]);
let stringArray = createItems<string>(['Sekhar','chandra','dsjf'])
console.log('Number array',createItems<number>([4]));
