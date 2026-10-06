// Create a simple calculator that has two inputs and returns the result of +,-,/,* somewhere in the DOM


// STEPS
// Gather Input 1
// Gather Input 2
// Computate Function
// Show Result
document.querySelector('#plus').addEventListener('click', hi)

function hi(n1, n2){
n1 = Number(document.querySelector('#num1').value)
n2 = Number(document.querySelector('#num2').value)

let result = (n1 + n2)

console.log(document.querySelector('#num1').value)
console.log(document.querySelector('#num2').value)
console.log(result)

 document.querySelector('#showResult').innerText = result
} 

document.querySelector('#subtract').addEventListener('click', bye)

function bye(n1, n2){
n1 = Number(document.querySelector('#num1').value)
n2 = Number(document.querySelector('#num2').value)

let result = (n1 - n2)

console.log(document.querySelector('#num1').value)
console.log(document.querySelector('#num2').value)
console.log(result)

 document.querySelector('#showResult').innerText = result
} 

document.querySelector('#divide').addEventListener('click', slash)

function slash(n1, n2){
n1 = Number(document.querySelector('#num1').value)
n2 = Number(document.querySelector('#num2').value)

let result = (n1 / n2)

console.log(document.querySelector('#num1').value)
console.log(document.querySelector('#num2').value)
console.log(result)

 document.querySelector('#showResult').innerText = result
} 

document.querySelector('#multiply').addEventListener('click', star)

function star(n1, n2){
n1 = Number(document.querySelector('#num1').value)
n2 = Number(document.querySelector('#num2').value)

let result = (n1 * n2)

console.log(document.querySelector('#num1').value)
console.log(document.querySelector('#num2').value)
console.log(result)

 document.querySelector('#showResult').innerText = result
} 