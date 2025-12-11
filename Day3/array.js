let fruits = ["banana","apple","guava","orange","mango"]
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
//for of loop

for(let value of fruits){
    //console.log(value)
}
fruits.unshift("kiwi")
fruits.shift()
fruits.push("papaya")
fruits.pop()
//console.log(fruits.includes("mango"))
//console.log(fruits.indexOf("banana"))

//map() => 
num = [2,4,6,8]
let doubled = num.map(n=>n*2)
console.log(doubled)
//filter => returns new array of elments that satisfy a condition
//let filter = [10,20,30,40];
//let result = filter.filter(n=>n>20)
//console.log(result)

//reduce()=> it iterates through an array and reduces it to a single final value

//Syntax => array.reduce((accumulator,currentValue)=>{...},initialValue)

//accumualtor(acc) => stores the result as the loop continues
//currentValue(val) => current elements of array being processed
//initialValue = > represents the initial value of the array

let filter = [10,25,30,5,60];
let result = filter.filter(n=>n>20)
console.log(result)

let b = [1,2,3,4,5]
let red = b.reduce((acc,val)=>acc+val,0)
console.log(red)

