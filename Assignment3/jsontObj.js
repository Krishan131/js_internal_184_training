let user = {
    name:"Aman",
     age:21, 
     course:"JS"
    }; 
let jsonString = JSON.stringify(user)
console.log(jsonString)
let obj = JSON.parse(jsonString)
console.log(obj)
