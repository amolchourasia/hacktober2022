//area of triangle
//  let base = prompt('Enter base ', 'enter a numeric value')
//  let height = prompt('enter height of triangle','enter numeric value')
//  let area = 0.5*base*height
//  console.log(area)

 //10
 const nam  = 'Chourasia'
 let size = nam.length
let compare = size<7
? console.log("your name is short")
: console.log("your name is long")
//11
let firstName = 'amol'
let LastName = 'Chourasia'
let firstSize = firstName.length
let lastSize = LastName.length
let comp = firstSize<lastSize
? console.log("Your first name, " + firstName + " is shorter than last name " + LastName)
: console.log("Your first name, " + firstName + " is longer than last name " + LastName)
//12
let myAge = 250;
let yourAge = 25;
let difference = myAge - yourAge
console.log("i am " + difference + " years older than you")
//13
let userBirthYear = 2000
// let userBirthYear = prompt('enter your birth Year','enter numeric value')
const now = new Date()

let currentYear = now.getFullYear()
let userAge = currentYear - userBirthYear
let drivingAge = 18
if (userAge>drivingAge) {
    console.log("You are  " +userAge+ ". you are allowed to drive")    
}else{
    let ageDifference = drivingAge - userAge
    console.log("You are "+userAge+" You will be allowed to drive in "+ageDifference+" years")
}
//14
//
console.log('YYYY-MM-DD HH:mm \n' + now.getFullYear() +'-'+ now.getMonth()+1 +'-'+now.getDay() +" "+ now.getHours() +":"+ now.getMinutes() )

//15
let year = now.getFullYear()
let month = now.getMonth()+1
let day = now.getDay()
let dd = "0"+day 
let hours = now.getHours()
let Minutes = now.getMinutes()
if(month<10){month = "0"+month}
if(hours<10){hours = "0"+hours}
if(Minutes<10){Minutes = "0"+Minutes}
console.log('YYYY-MM-DD HH:mm')
console.log(year +'-'+ month +'-'+ dd +'-'+ hours + ':'+Minutes)
