//1
let challenge = '30 days of JavaScript'
//2
console.log(challenge);
//3
let lengthOfString = challenge.length
console.log(lengthOfString); 
//4
let upCaseString = challenge.toUpperCase
console.log(challenge)
//5
let lowCasString = challenge.toLowerCase
console.log(challenge)
//6
let cut = challenge.slice(3,7);
console.log(cut);
//7
let phraseSlice = challenge.slice(3,21)
console.log(phraseSlice)
//8
let checkPresence = challenge.includes('Script');
console.log(checkPresence);
//9
let changeToArray = challenge.split();
console.log(changeToArray);
//10
console.log(challenge.split(''))
//11
let corporations = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(corporations.split(","));
//12
console.log(challenge.replace('JavaScript','Python'));
//13
console.log(challenge.charAt(15));
//14
console.log(challenge.charCodeAt('J')+ ' char code');
//15
console.log(challenge.indexOf('a') + ' first occurrence')
//16
console.log(challenge.lastIndexOf('a') + ' Last occurrence')
//17
let NewString ='You cannot end a sentence with because because because is a conjunction'
console.log(NewString.indexOf('because'))
//18
console.log(NewString.lastIndexOf('because'))
//19
let searchWord = 'You cannot end a sentence with because because because is a conjunction'
console.log(searchWord.search('because') + 'search output')
//20
let challenge2 = ' 30 Days Of JavaScript '
let challenge3 =  challenge2.trim(' ')
console.log(challenge3)
//21
console.log(challenge3.startsWith('30'))
//22
console.log(challenge3.endsWith('t'))
//23
console.log(challenge3.match(/a/gi))
//24
let str1 = '30 days of'
console.log(str1.concat(' ',"JavaScript"))
//25
console.log(challenge.repeat(2))

            //Exercise 2
//2
let salary  =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let num = salary.match(/\d+/g)
let Income = 0;
num.forEach(element => {
    Income +=Number(element)
});
console.log(Income)