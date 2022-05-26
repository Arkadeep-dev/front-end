/*
let js = 'amazing'
console.log(40 + 8 + 23 + 10)
// ====================================
//VALUES AND VARIABLES

console.log('jonas')
console.log(23)

let firstName = "Jonas";
console.log(firstName)

// ====================================
// DATA TYPES
true
console.log(true)

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true)
console.log(typeof javaScriptIsFun)
console.log(typeof 10)
console.log(typeof 'Jonas')

javaScriptIsFun = 'Yes'
console.log(javaScriptIsFun)
console.log(typeof javaScriptIsFun)

let year;
console.log(year)
console.log(typeof year)

year = 1991
console.log(year)
console.log(typeof year)

console.log(typeof null)

//=====================================
// LET CONST AND VAR

let age = 30
age = 31;

const birthYear = 1991
// birthYear = 1990

// const job;

var job = 'programmer';
job = 'teacher'

// not recomended
lastName = 'Das'
console.log(lastName)
// ====================================
// BASIC OPERATORS
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// 2**3 means 2 to the power of 3 ie. 2*2*2

const firstName = 'Jonas'
const lastName = 'Schemedtmann'
console.log(firstName + " " + lastName)

//assignment operators
let x = 10 + 5
x += 10
x *= 4
x++;
x--
x--
console.log(x)

//compararison operators
console.log(ageJonas > ageSarah);
// >,<,>=,<=
// ====================================
// CODING CHALLENGES #1

// const massOfMark = 78
// const heightOfMark = 1.69
// const massOfJohn = 92
// const heightOfJohn = 1.95
const massOfMark = 95
const heightOfMark = 1.88
const massOfJohn = 85
const heightOfJohn = 1.76

const marksBMI = massOfMark / (heightOfMark ** 2)
const johnsBMI = massOfJohn / (heightOfJohn ** 2)
console.log(marksBMI, johnsBMI)
const markHeigherBMI = marksBMI > johnsBMI
console.log(markHeigherBMI)
// ====================================
// STRINGS AND TEMPLATE LITERALS
const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991;
const year = 2037
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String with
multiple
lines`)
// ====================================
// IF-ELSE STATEMENTS
const age = 15
const isOldEnough = age >= 18
if (isOldEnough)
    console.log(`Sarah can start driving license 🚗`)
else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😢`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000)
    century = 20
else
    century = 21

console.log(century)
// ====================================
// COADING CHALLENGE #2
const massOfMark = 95
const heightOfMark = 1.88
const massOfJohn = 85
const heightOfJohn = 1.76

const marksBMI = massOfMark / (heightOfMark ** 2)
const johnsBMI = massOfJohn / (heightOfJohn ** 2)
console.log(marksBMI, johnsBMI)

if (marksBMI > johnsBMI)
    console.log(`Mark's BMI (${marksBMI}) is greater than Jhone's BMI (${johnsBMI})!`)
else
    console.log(`Jhone'sBMI (${johnsBMI}) is greater than Mark's BMI (${marksBMI})!`)

// ====================================
// TYPE CONVERSION AND COERCION

// type conversion
const inputYear = '1991'
// console.log(inputYear + 18)
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'))
console.log(typeof NaN)

console.log(String(23), 23)

// type coercion
console.log('I am ' + 23 + ' Years old')
console.log('23' - '10' - '3')
console.log('23' / '2')

let n = '1' + 1;
n = n - 1
console.log(n)
// ========================================================
// TRULY AND FALSY VALUES

// 5 falsy values: 0,'',undefined,null,NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean({}))
console.log(Boolean('Jonas'))

const money = 90;
if (money) {
    console.log("Dont spend it all")
} else {
    console.log("You should get a job!")
}

let height
if (height) {
    console.log('YAY! height is defined!')
} else {
    console.log('Height is  undefined')
}
// ========================================================
// EQUALITY OPERATORS

const age = '18'
if (age === 18)
    console.log('You just became an adult (STRICT)')

if (age == 18)
    console.log('You just became an adult(LOOSE)')

const favourite = Number(prompt('What is your favourite number?'))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23)
    console.log('Great! 23 is a amazing number')
else if (favourite === 7)
    console.log('7 is also a cool number')
else
    console.log('Number is nither 23 nor 7')

if (favourite !== 23)
    console.log('why not 23')

// ========================================================
// LOGICAL OPERATORS

const hasDriversLicense = true
const hasGoodVision = true

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision

if (shouldDrive)
    console.log('Sarah is able to drive')
else
    console.log('Someone else should drive')

const isTired = false
console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired)
    console.log('Sarah is able to drive')
else
    console.log('Someone else should drive')


// ========================================================
// COADING CHALLENGE #3

const avgScoreDolphine = (97 + 128 + 99) / 3
const avgScoreKoalas = (97 + 128 + 99) / 3

console.log(avgScoreDolphine, avgScoreKoalas)

if (avgScoreDolphine > avgScoreKoalas && avgScoreDolphine >= 100)
    console.log(`Dolphines Win the Game!`)
else if (avgScoreKoalas > avgScoreDolphine && avgScoreKoalas >= 100)
    console.log(`Koalas Win the Game!`)
else if (avgScoreDolphine >= 100 && avgScoreKoalas >= 100 && avgScoreDolphine === avgScoreKoalas)
    console.log('Its a Draw')
else
    console.log('No team wins')

// ========================================================
// THE SWITCH STATEMENT
const day = 'monday'

switch (day) {
    case 'monday': //day==='monday'
        console.log('Plan course structure')
        console.log('Go to coding meetup')
    break;
    case 'tuesday':
        console.log('Prepare theory videos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break
    case 'friday':
        console.log('Record videos')
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log('Not a valid day!')
}
// ========================================================
// THE CONDITIONAL (TERNARY) OPERATOR

const age = 103;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧')

const drink = age >= 18 ? 'Wine 🍷' : 'water 💧'
console.log(drink)

console.log(`I would like to drink ${drink}`)
*/
// ========================================================
// COADING CHALLENGE #4
const bill = 40
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
console.log(tip)
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`)
