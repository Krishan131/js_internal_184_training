let a = 123
let temp =0 
while(a>0){
    let x = a%10
    temp =temp+ x
    a=Math.floor(a/10)
}
console.log(temp)
