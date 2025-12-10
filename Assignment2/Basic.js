/*
1=>
// let i = 1
// let j = 2
// let sum = Number(i)+Number(j)
// console.log(sum)
_____________________________________________________________
2=>
// let name = prompt("Enter your name")
// console.log(`Hello {name}`)
_____________________________________________________________
3=>
// const n = 0;
// if(n%2==0){
//     console.log("Even Number")
// }
// else{
//     console.log("odd number")
// }
_____________________________________________________________
4=>
// let temp = prompt("Enter temp in celsius");
// console.log("the temp in farenheit will be")
// let f = (Number(temp)*9/5) + 32
// console.log(f);
_____________________________________________________________
5=>
// let i =34 , j =34 , k = 34
// if(i>=j&& i>=k){
//     console.log(`Max is i ${i}`)
// }
// else if(j>=i&& j>=k){
//     console.log(`Max is j ${j}`)
// }
// else{
//     console.log(`Max is k ${k}`)
// }
_____________________________________________________________
 6=>
// let str = "Hello my name is ron"
// console.log(str.length)

// let bool = true
// if(bool)
//     console.log("i am true")
// else
//     console.log("i am false")

_____________________________________________________________
7=>
// let str1 = "Heloo! My name is "
// let str2 = "Krishan" 
// let concat = str1.concat(str2)
// console.log(concat)

_____________________________________________________________
8=>
//num =Number(prompt("Enter number"))
// if(num>0)
//     alert("Positive number")
// else if(num < 0)
//     alert("negative number")
// else
//     alert("the number is 0")

_____________________________________________________________

9=>
// var example (function-scoped, can be re-assigned and re-declared)
var a = 10;
console.log("var a =", a);

a = 20;           // re-assignment allowed
console.log("var a after re-assign =", a);

var a = 30;       // re-declaration allowed
console.log("var a after re-declare =", a);


// let example (block-scoped, can be re-assigned but NOT re-declared in same block)
let b = 5;
console.log("let b =", b);

b = 15;           // re-assignment allowed
console.log("let b after re-assign =", b);

// let b = 25;    // not allowed in same scope


// const example (block-scoped, NO re-assignment or re-declaration)
const c = 50;
console.log("const c =", c);

// c = 60;        // not allowed (constant value)
// const c = 70;  // not allowed


_____________________________________________________________
10=>
// let number = Number(prompt("Enter number"))
// for(let  i = 1 ; i <= 10 ; i++){
//     console.log(number*i)
// }

// console.log("Sum of first 10 natural numbers are ")
// let sum = 0 ;
// for(let i = 0 ; i < 10 ; i++){
//       sum = sum+i;   
// }
// console.log(sum)

_____________________________________________________________
*/


let day = 3;   
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

//____________________________________________________________________

function fact(n){
      if(n===0 || n===1){
        return 1;
      }  
      return n*fact(n-1);
}

let fac = fact(10);
console.log(fac);

//__________________________________________________________________

function CanVote(n){
    if(n>=18){
         console.log("can vote")
    }
    else{
        console.log("cannnot vote")
    }
}
CanVote(20)

 