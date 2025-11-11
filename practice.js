// Level 1: Easy Challenges (Basics & Confidence Boosters)
// i) Even or Odd Checker
const number = (number) => {
    number % 2 === 0 ? true : false;
}
number(4);
// In above i am also used ternery operator.

// ii) Greeting Function
function greet(name) {
    console.log("Hello, ",name);
}
greet(rockey);

// iii) - Favorite Colors
const colors = ["red", "green", "blue"];
colors.forEach((color, i) => {
    console.log(`Color is ${color} and its index is ${i} !!!`);
})

// iv) Simple Calculator
let a = 5;
let b = 5;
function calc(a, b) {
    console.log("Sum of above two numbers is : ", a+b);
    console.log("Difference of above two numbers is : ", a-b);
    console.log("Product of above two numbers is : ", a*b);
    console.log("Quotient of above two numbers is : ", a/b);
}
calc(a,b);

// Another way
function calc1(a,b) {
    return {
        sum: a+b,
        difference: a-b,
        product: a*b,
        quotient: a/b
    };
}
calc1(2,4);


// Level 2: Intermediate Challenges (Logic & Structure
// i) Grade Evaluator
function enterScore(score) {
    if (score > 90) {
        console.log("You got an A grade");
    } else if (score >=75 && score <= 89) {
        console.log("You got an B grade")
    } else if (score >= 50 && score <= 74) {
        console.log("You got an C grade");
    } else {
        console.log("You got an F grade");
    }
}
enterScore(48);

// Another Way
const enterScoreA = (score) => {
    if (score > 89) {
        console.log("Grade : A");
    } else if(score > 74) {
        console.log("Grade : B");
    } else if (score > 49) {
        console.log("Grade : C");
    } else {
        console.log("Grade : F");
    }
}
enterScoreA(75);

// ii) - Fact Printer
const webDevFacts = ["HTML was invented in 1991",
    "CSS stands for Cascading Style Sheets.",
    "JavaScript runs in the browser, instantly.",
    "Over 50% of web traffic is mobile",
    "GitHub is a dev’s online portfolio."];
function devFacts(webDevFacts) {
    webDevFacts.forEach((fact,i) => {
        console.log(`Fact ${i+1} :- ${fact}`);
    })
}
devFacts(webDevFacts);

// iii) User Profile Object
const user = {name:"rockey", age: 16, isStudent: true};
console.log(`My name ${user.name} with an ${user.age} number of age.True is i am student or false if i am not a student answer is ${user.isStudent} .`);

// iv) Loop Countdown
const countDown = () => {
    for( i = 10; i >= 0; i--) {
        if(i === 0) {
            console.log("Blast Off !");
            break;
        }
        console.log(i);
    }
}
countDown();

// Another similar way remove break and add else condition there which is slightly not good for this example.

// Level 3: Hard Challenges (Problem Solving & Creativity)
// i) Multiples of 3 and 5 :-
function multipleOf () {
    for (i = 1; i <= 50; i++) {
        // Check for FIZZBUZZ (Multiples of both 3 and 5) FIRST
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} this number is "FIZZ - - BUZZ" number`);
        } 
        // Then check for FIZZ (Multiples of 3 only)
        else if (i % 3 === 0) {
            console.log(`${i} this number is "FIZZ" number`);
        } 
        // Then check for BUZZ (Multiples of 5 only)
        else if (i % 5 === 0) {
            console.log(`${i} this number is "BUZZ" number`);
        } 
        // Otherwise, it's neither
        else {
            console.log(`${i} -> not a FIZZ || BUZZ -- number`);
        }
    }
}
// multiple();