/* let string = "strings";
let sentance = "hello" + "Junshen";
let sentance2 = " and Ema";
//console.log(sentance + sentance2);
let student1 = "Sandra";
let student2 = "Kelly";
let courseName = "CompSci";
let teacherName = "Whalen"
const longSentance = `${student1} and ${student2} are amazing and will be taking ${courseName} with ${teacherName}`
 */
/* let year = 2020;
let nextYear = 2020+1;
let past = 2020/2;
let farFuture = 2020*50 */
/* let trueStatement = true;
let falseStatement = false;
 */
/* let ron;
console.log(Sarah); */
/* let student = "Caroline";
let age = 15; */
//console.log(student === "Caroline")
//console.log(student === "caroline")
/* console.log(age === 15);
console.log(age === "15"); */
/* console.log(age <= 15 || age > 19)
console.log(age <= 15 && age > 19)
 */
/* let school = "iddle";
if(school === "Elementary"){
    console.log("you are in k-5")
} else if (school === "middle"){
    console.log("you are in 6th, 7th, or 8th grade")
} else {
    console.log("you are in HS")
}
*/

//Formative Assesment #1
/* let light = "green";
if (light === "green"){
    console.log("Go");
} else if (light === "yellow"){
    console.log("Caution");
} else if (light === "red"){
    console.log("Stop");
}

//Formative Assesment #2
let Kristy = "lactoseIntolerant";
let BaoBao = "milk";
if (BaoBao === "milk" && Kristy === "milk"){
    console.log("Get Milk");
} else if (BaoBao === "lactoseIntolerant" && Kristy === "lactoseIntolerant"){
    console.log("Get Almond Milk");
} else {
    console.log("Get Almond Milk and Normal Milk");
}

//Cupcake Challenge
let temp = 69;
if (temp < 68) {
    console.log("It is too cold");
} else if (temp >= 68 && temp <= 72){
    console.log("It is a just perfect temperature");
} else if (temp >= 73 && temp <= 76){
    console.log("It is warm");
} else {
    console.log("It is too hot");
}
 */

 /////Functions 3/27/20
/* 
 function test () {
     console.log("test");
 }
 test(); */

 /* function argument(parameter, parameter2) {
     console.log(parameter, parameter2)
 }
 argument("val", "eric"); */

/*  const add = function(x, y){
     return x + y;
 }
 console.log(add(10, 3)) */

/*  const hello = function () {
     alert("hello");
 };
 const bye = function() {
     alert("bye");
 }; 

 const beatles = function() {
    hello();
    bye();
    hello();
    bye();
 };
 beatles(); */

 ///scope
/* const name = "Michael";
 function makeFunc() {
     const name = "Anna";
     function displayName() {
         console.log(name);
     }
     return displayName;
 }
const myFunc = makeFunc();
myFunc();
 */

///arrays
/* const names = ["Diego", "Frid", "Christian", "Anna", "Haoran"];
 names.push("Caroline")
let newNames = names.unshift("Brian"); 
names.forEach(name => console.log(name)); */

///spread operator 
/* const numbers = [1, 2, 3, 4, 5];

const add = function(x, y, z, a, g  ) {
    return x + y + z + a + g;
};
console.log(add(...numbers)); */


//Challenges for lesson 2
/*Using the array filter out all students whose names contain
less than 5 characters*/
/*let students = [
    {Name: "Riya", letters: 4}, 
    {Name: "Omor", letters: 4}, 
    {Name: "Alan", letters: 4}, 
    {Name: "Jaiyu", letters: 5}, 
    {Name: "Michael", letters: 7}, 
    {Name: "Lisa", letters: 4},
    {Name: "Richard", letters: 7}
];
let selectStudents = []
for (let i = 0; i < students.length; i++) {
    if (students[i].letters > 5) {
        selectStudents.push(students[i]);
    }
}
console.log(selectStudents);
*/
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
const result = students.filter(students => students.length > 4);
console.log(result);
//-------------------------------------------------------------------------------------------------
/*let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
Using the above array check to see if the array “includes” “junshen”
Write a seperate function to check if “Alan” or “Savva” were included
in “some” of the array
USE MDN to find the appropriate array methods*/
//1)
console.log(students.includes("junshen"));
//2)
const Savva = (element) => element === "Savva";
console.log(students.some(Savva));
const Alan = (element) => element === "Alan";
console.log(students.some(Alan));