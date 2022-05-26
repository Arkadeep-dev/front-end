'use strict';
/*
let hasDriversLiscense = false
let passTest = true

if (passTest) hasDriversLiscense = true
if (hasDriversLiscense) console.log('I can drive 🚗')

// const private = 534
// const interface = 'Audio'
// ========================================================
// FUNCTIONS
function logger() {
    console.log('My name is jonas!')
}
// calling / running / invoking the fuction
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(8, 7)
console.log(appleOrangeJuice)

const num = Number('23')
console.log(num)
// ========================================================
// FUNCTIONS DECLARATIONS AND EXPRESSIONS

// function declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991)
console.log(age1)

// function expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991)
console.log(age1, age2)

// arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years!`
}

console.log(yearsUntilRetirement(1991, 'Jhonas'))
console.log(yearsUntilRetirement(1980, 'Bob'))

// ========================================================
// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitpieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const applePieces = cutFruitpieces(apples)
    const orangePieces = cutFruitpieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice
}

console.log(fruitProcessor(2, 3))

// ========================================================
// REVIEWING FUNCTIONS
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`)
        return retirement
    } else {
        console.log(`${firstName} is already retired`)
        return -1
    }
    // return `${firstName} retires in ${retirement} years!`
}
console.log(yearsUntilRetirement(1991, 'Jhonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))

// ========================================================
// CODING CHALLENGE #1

const calcAvg = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = function (avgDolphins, avgKoalas) {
    console.log(avgDolphins, avgKoalas)
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    }
    else {
        console.log(`No team wins`)
    }
}

const averageScoreDolphins = calcAvg(44, 23, 71)
const averageScoreKoalas = calcAvg(65, 54, 49)
console.log(checkWinner(averageScoreDolphins, averageScoreKoalas))

// ========================================================
// INTODUCTION TO ARRAYS

const friends = ['Michel', 'Stephen', 'Peter']
console.log(friends)

// const years = new Array(1991, 1994, 2008, 2020)
console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

// friends = ['Bob', 'Alice']

const jonas = ['Jonas', 'Schedtmann', 2037 - 1991, 'tacher', friends]
console.log(jonas)

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]
console.log(calcAge(years))

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [age1, age2, calcAge(years[years.length - 1])]
console.log(ages)

// ========================================================
// BASIC ARRAY OPERATIONS
const friends = ['Michel', 'Stephen', 'Peter']
// Add elements
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

// Remove elements
friends.pop()
const popped = friends.pop()
console.log(friends)
console.log(popped)

friends.shift()
console.log(friends)

console.log(friends.indexOf('Stephen'))
console.log(friends.indexOf('Bob'))

friends.push(23)
console.log(friends.includes('Stephen'))
console.log(friends.includes('Bob'))
console.log(friends.includes('23'))
console.log(friends.includes(23))

if (friends.includes('Stephen')) {
    console.log('You have a friend Stephen')
} else {
    console.log('You dont have a friend named Stephen')
}

// ========================================================
// COADING CHALLENGE #2

const calcTip = (bill) => {
    let tip
    if (bill >= 50 && bill <= 300)
        return tip = bill * 0.15;
    else
        return tip = bill * 0.2
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(tips)
console.log(total)

// ========================================================
// INTODUCTION TO OBJECTS

const jonasArray = ['Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michel', 'Peter', 'Stephen']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michel', 'Peter', 'Stephen']
}

// ========================================================
// DOT VS BRACKET NOTATION

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michel', 'Peter', 'Stephen']
}
console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')
console.log(jonas[interestedIn])

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Wrong request!  Choose between firstName, lastName, age, job and friends')
}
jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtmann'
console.log(jonas)

// Challenge
// Print :"Jonas has 3 friends and his best friend is called Michel"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`)

// ========================================================
// OBJECT METHODS
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michel', 'Peter', 'Stephen'],
    hasDriversLiscense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear
    // }

    // calcAge: function () {
    //     // console.log(this)
    //     return 2037 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSummery: function () {

        console.log(`${this.firstName} is a ${this.calcAge()}-old ${this.job} and he has ${this.hasDriversLiscense ? 'a' : 'no'} driver's license`)
    }
}

console.log(jonas.calcAge())
console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)
// console.log(jonas['calcAge'](1991))

// Challenge
// Print "Jonas is a 46-years old teacher and he has a driver's license"

console.log(jonas.getSummery())

// ========================================================
// CODING CHALLENGE #3
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}
mark.calcBMI()
john.calcBMI()
console.log(mark.bmi, john.bmi)

if (john.bmi > mark.bmi) {
    console.log(`${john.firstName} BMI (${john.bmi}) is higher than ${mark.firstName} (${mark.bmi})`)
} else {
    console.log(`${mark.firstName} BMI (${mark.bmi}}) is higher than ${john.firstName} (${john.bmi})`)
}

// ========================================================
// ITERATION THE FOR LOOP
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting Weights repeatation ${rep}🏋️‍♂️`)
}

// ========================================================
// LOOPING ARRAY BREAKING AND CONTINUING
const jonasArray = ['Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michel', 'Peter', 'Stephen'],
    true
];

const types = []

for (let i = 0; i < jonasArray.length; i++) {
    // Filling types array
    // types[i] = typeof jonasArray[i]
    types.push(typeof (jonasArray[i]))

    console.log(jonasArray[i], typeof jonasArray[i])
}
console.log(types)

const birthYears = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < birthYears.length; i++) {
    ages.push(2037 - birthYears[i])
}
console.log(ages)

// continue and break

console.log('-----CONTINUE ONLY STRINGS-----')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue
    else
        console.log(jonasArray[i], typeof jonasArray[i])
}

console.log('-----BREAK WITH NUMBER-----')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break
    else
        console.log(jonasArray[i], typeof jonasArray[i])
}

// ========================================================
// LOOPING BACKWARDS AND LOOPS IN LOOPS
const jonasArray = ['Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michel', 'Peter', 'Stephen'],
    true
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i], typeof jonasArray[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------Starting exersise ${exercise}`)
    for (let rep = 1; rep < 6; rep++)
        console.log(`Exersise ${exercise} lifting weight repetation ${rep} 🏋️`)
}

// ========================================================
// THE WHILE LOOP

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repeatation ${rep}`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6)
        console.log(`loop is about to end.....`)
}
*/
// ========================================================
// CODING CHALLENGE #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = (bill) => {
    let tip
    if (bill >= 50 && bill <= 300)
        return tip = bill * 0.15;
    else
        return tip = bill * 0.2
}

const calcAverage = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
}
console.log(tips)
console.log(totals)
console.log(calcAverage(tips))
console.log(calcAverage(totals))