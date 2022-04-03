// დავალება:
// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები 
// (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც ვისწავლეთ.
// 3. დამატებით შექმენით ცვლადები myName, myHobby,  yearOfBirth, currentYear 
// და მიანიჭეთ თქვენი სახელი, ჰობი, დაბადების წელი, მიმდინარე წელი.
// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: 
// My name is (აქ name ცვლადი), 
// I am (აქ გამოთვალეთ ასაკი currentYear  და yearOfBirth -   
//     ცვლადების გამოყენებით) old and my hobby is (აქ hobby ცვლადი), 
//     გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.

// მუშაობის პროცესში, ტესტირებისთვის გამოიყენეთ console.log();


let userName = "Keti";
let userAge = 26;
let isStudent = false;
let myNull = null;
let myNan = NaN;
let mynan = NaN;
let myUndefined;

console.log(typeof userName, typeof userAge, typeof isStudent, typeof myNull, typeof myNan, typeof mynan, typeof myUndefined);

let myName = "Ketevan";
let myHobby = "Walking"
let yearOfBirth = 1994;
let currentYear = 2022;

console.log(typeof myName, typeof myHobby, typeof yearOfBirth, typeof currentYear);


let myTextEcample1 = "My name is " + myName + "," + " I am " + (currentYear - yearOfBirth) + " years old and my hobby is " + myHobby
console.log(myTextEcample1);


let myTextEcample = `My name is ${myName}, I am ${currentYear - yearOfBirth} years old and my hobby is ${myHobby}`;
console.log(myTextEcample);


