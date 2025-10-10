// // console.log("Farzeen Ali")

// // variables
// // PASCAL, CAMEL
// let firstName: string = "Farzeen"
// // console.log(firstName)
// let age: number = 23
// // console.log(age)
// let isActive: boolean = true
// let skills: string[] = ["Web", "App", "Dev"]
// // console.log(skills[1])

// // Tuple
// let info: [string, number] = ["Farzeen", 23]
// // console.log(info)

// // Concatenation
// let lastName: string = "Ali"
// // console.log("My name is: ", lastName)

// // Operators, Operands, Expressions
// let a: number = 10
// let b: number = 3

// console.log("Addition: ", a+b)
// console.log("Subtraction: ", a-b)
// console.log("Multiplication: ", a*b)
// console.log("Division: ", a/b)
// console.log("Modulus: ", a%b)

import * as readlineSync from "readline-sync"

// let firstName: string = readlineSync.question("Enter your name: ")

// console.log("Welcome! " + firstName)

// Conditional Statement

// let age: number = parseInt(readlineSync.question("Enter your age: "))

// if(age > 18){
//     console.log("You can vote")
// }
// else {
//     console.log("You cannot vote")
// }

// let number: number = parseInt(readlineSync.question("Enter any number: "))

// if(number % 2 == 0){
//     console.log("Even Number")
// }
// else {
//     console.log("Odd Number")
// }

// If else if ladder

// let marks: number = parseInt(readlineSync.question("Enter your marks: "))

// if(marks >= 90){
//     console.log("A+")
// }
// else if(marks >= 80){
//     console.log("A")
// }
// else if(marks >= 70){
//     console.log("B")
// }
// else if(marks >= 60){
//     console.log("C")
// }
// else if(marks >= 50){
//     console.log("D")
// }
// else {
//     console.log("F")
// }

// Switch case
// let day: number = parseInt(readlineSync.question("Enter any day: "))
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Invalid Day")
// }

// Practice 

// let num1: number = (parseFloat(readlineSync.question("Enter first value: ")))
// let num2: number = (parseFloat(readlineSync.question("Enter second value: ")))
// let op: string = readlineSync.question("Enter any operation: (+, -, *, /)")

// if(op === "+"){
//     console.log("Addition Result: ", num1 + num2)
// }
// else if(op === "-"){
//     console.log("Subtraction Result: ", num1 - num2)
// }
// else if(op === "*"){
//     console.log("Multiplication Result: ", num1 * num2)
// }
// else if(op === "/"){
//     if(num2 !== 0){
//         console.log("Division Result: ", num1 / num2)
//     } 
//     else{
//         console.log("Math Error, num2 can't be 0")
//     }
// }
// else{
//     console.log("Invalid Operation")
// }

// Loops

// 5, for, while, do-while, for of, for in
// for

// let total=0;
// for(let i = 5; i>=0; i--){
//     // total += 100;
//     console.log("Hello ", i)
// }
// console.log(total);

// while

// let balance = 500;

// while(balance > 0){
//     console.log("Item Added")
//     balance -= 100;
//     console.log("Your Current Balance is: ", balance)
// }

// do-while
// let i = 100;

// do{
     // console.log("Message: ", i);
//     i++;
// } while(i<10);

// let attempts = 0;
// let pinCorrect = false;

// let correctPin = 123;
// do{
//     attempts++;
//     console.log('Attempt ', attempts);
//     let pin = parseInt(readlineSync.question("Enter your pin"));

//     if(pin === correctPin){
//         console.log('Login')
//         pinCorrect= true;
//     }
//     else{
//         console.log('Try again')
//         pinCorrect= false;
//     }
//     if(attempts === 3){
//         break;
//     }
// } while(pinCorrect!=true)


// for of loop

// const cart: string[] = ["Shirt", "Pent", "Watch"];

// console.log(cart[0])
// console.log(cart[1])
// console.log(cart[2])

// for(const item of cart){
//     console.log('Item Name: ', item)
// }


// for in loop

// const student = {name: "Ali", age: 23, subject: "CS"};

// for(const key in student){
    // console.log(key, ' : ', student[key as keyof typeof student]);
// }

// Functions 
// 4 types: 
// 1) No parameter, No return 
// 2) No parameter, with return 
// 3) with parameter, no return 
// 4) with parameter, with return 

// DRY -> donot repeat yourself

// 1) no parameter no return
// function greet(): void{
//     console.log('Hello')
// }
// greet()

// 2) no parameter, with return

// function getUsername(): string{
//     let username = readlineSync.question("Enter your name: ");
//     return username;
//     // console.log("Hello") not executed
// }

// let result = getUsername();
// // console.log(getUsername())
// console.log(result)


// 3) with parameter, no return
// function displayName(username: string): void{
//     console.log("My username is: ", username)
// }

// displayName("Farzeen");

// 4) with parameter with return

// let username = readlineSync.question("Enter your name: ")

// function display(name: string): string{
//     return `${name} is a boy`;
// }

// console.log(display(username))

// Arrays

// let marks: number[]; // declaration
// marks = [12,34,5,7,8] // initialization

// let marks: number[] = [80, 90, 93, 92];
// console.log(marks[1])

// for(let i = 0; i < marks.length; i++){
//     console.log(marks[i])
// }

// let names: string[] = ["Farzeen", "Ali", "Huzaifa"]

// for(let i = 0; i < names.length; i++){
//     console.log("Name " + (i + 1) + " " + names[i])
// }

// let marks: number[] = [];
// let size: number = parseInt(readlineSync.question("Array Size: "))

// for(let i = 0; i < size; i++){
//     let value = parseInt(readlineSync.question("Enter a number: "))
//     marks.push(value)
// }
// console.log("Your Result is: ")
// for(let i = 0; i < size; i++){
//     console.log(marks[i])
// }

// Task

// let numbers: number[] = [10,30,50,22, 40,70];
// let max = numbers[0];

// for(let i = 1; i < numbers.length; i++){
//     if(numbers[i] > max){
//         max = numbers[i];
//     }
// }

// console.log("Maximum Value is: ", max);

// let nums: number[] = [10,23,40,31,46,79];
// let evenCount = 0, oddCount = 0;
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//         evenCount++;
//     }
//     else{
//         oddCount++;
//     }
// }
// console.log("Even Numbers: " + evenCount)
// console.log("Odd Numbers: " + oddCount)


// let num: number = parseInt(readlineSync.question("Enter a number: "))

// let nums: number[] = [];
// let sum = 0;

// for(let i = 0; i < num; i++){
//     let val = parseInt(readlineSync.question("Enter a Value: "))
//     nums.push(val)
//     sum += val;
// }

// console.log("Numbers: ", nums);
// console.log("Sum is: ", sum)


let arr: number[] = [12,23,45,67,87,89];

let num: number = parseInt(readlineSync.question("Enter a number: "))

let found = false;

for(let n of arr){
    if(n === num){
        found = true;
        break;
    }
}
if(found){
    console.log(num, " is present in array")
}
else{
    console.log(num, " is not present in array")
}



















