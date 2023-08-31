// String

let Massage:string = "Hello world!";

//number
let age:number = 5;
age=6;


//boolean
let isAdmin:boolean=true;
isAdmin=false;

//any
let a:any = 10;
a="hello";
a= true;

//Array
let students:number[] = [1,2,3,4]
students.push(9)
console.log("Students",students);

let teachers:string[] = ["Sekhar","Suman","Siva"]
teachers=["sss"]

let users:any[] = [];
users = [10,"sri"]


//Tuples
let user :[string,number]=["Sekahr",20]
user=["suman",20]

let userData:[string,number][]=[];
userData = [["Vivek",20],["Venkatesh",20]]


//union or pipe
let person: string | number;
person ="sekhar"
person=34;


//Enum
const RED ="Red";
const BLUE = 'Blue';
enum Colour{
    RED,
    BLUE,
    GREEN,
} 
console.log(Colour.GREEN)

//object
type Car = {
    name: String,
    price: number
}

let car:Car = {
    name:"Tesla",
    price:100
}

//Type Assertion
let username: unknown = 'Sekhar'
let userId:number = <number>username
let userNames: string = <string>username;
let firstname: string = username as string;


//null,undefined
let abc: null=null;
let noValue: undefined = undefined;