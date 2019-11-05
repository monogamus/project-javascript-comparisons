// JavaScript Comparisons
const nameA = "Alpha"
const nameB = "Beta"
const nameCompared = nameA === nameB

console.log(nameA)
console.log(nameB)
console.log(nameCompared)



// JavaScript else if clause
const ageA = 18
const ageB = 25

if (ageA > ageB) {
    console.log("incorrect")
} else if (ageA < ageB) {
    console.log("correct")
} else {
    console.log("what's your age?")
}



// JavaScript switch case
const personA = {
    name: "Alpha",
    age: 20
}

const personB = {
    name:"Betty",
    age: 30
}

switch (personA.age > personB.age) {
    case true:
        console.log("Hi, baby!")
        break

    case false:
        console.log("Greetings!")
        break

    default:
        console.log("Hello!")
}