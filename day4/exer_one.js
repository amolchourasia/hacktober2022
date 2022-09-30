//1
let userBirthYear = 2000
// let userBirthYear = prompt('enter your birth Year','enter numeric value')
const now = new Date()
let currentYear = now.getFullYear()
let userAge = currentYear - userBirthYear
let drivingAge = 18
if (userAge>drivingAge) {
    console.log(`You are  ${userAge}. you are allowed to drive`)    
}else{
    let ageDifference = drivingAge - userAge
    console.log(`You are ${userAge},You will be allowed to drive in ${ageDifference} years`)
}
//2
let myAge = 22;
// let ageOfUser = prompt('Enter your Age')
let ageOfUser = 18;
let totalAgeDiff
if(myAge>ageOfUser){
totalAgeDiff = myAge-ageOfUser
console.log(`you are ${totalAgeDiff} years older than me`)
}else{
    totalAgeDiff=ageOfUser-myAge
    console.log(`you are ${totalAgeDiff} years younger than me`)
}
//3
let a =2;
let b =3;
let comp = a>b
? console.log(`${a} is greater than ${b}`)
: console.log(`${b} is greater than ${a}`)

if (a>b) {
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${b} is greater than ${a}`)
}
