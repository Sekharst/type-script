"use strict";
// String
let Massage = "Hello world!";
//number
let age = 5;
age = 6;
//boolean
let isAdmin = true;
isAdmin = false;
//any
let a = 10;
a = "hello";
a = true;
//Array
let students = [1, 2, 3, 4];
students.push(9);
console.log("Students", students);
let teachers = ["Sekhar", "Suman", "Siva"];
teachers = ["sss"];
let users = [];
users = [10, "sri"];
//Tuples
let user = ["Sekahr", 20];
user = ["suman", 20];
let userData = [];
userData = [["Vivek", 20], ["Venkatesh", 20]];
//union or pipe
let person;
person = "sekhar";
person = 34;
//Enum
const RED = "Red";
const BLUE = 'Blue';
var Colour;
(function (Colour) {
    Colour[Colour["RED"] = 0] = "RED";
    Colour[Colour["BLUE"] = 1] = "BLUE";
    Colour[Colour["GREEN"] = 2] = "GREEN";
})(Colour || (Colour = {}));
console.log(Colour.GREEN);
let car = {
    name: "Tesla",
    price: 100
};
//Type Assertion
let username = 'Sekhar';
let userId = username;
let userNames = username;
let firstname = username;
//null,undefined
let abc = null;
let noValue = undefined;
