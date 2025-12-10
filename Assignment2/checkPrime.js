function checkPrime(num){
 let flag = true
 if(num<=0){
     return !flag;
 }
 for(let i = 2 ; i< num;i++){
     if(num%i==0)
         flag = false
 }
 return flag
 }
 let temp =checkPrime(7)
if(temp){
     console.log("prime no.")
 }
 else{
     console.log("not prime")
 }