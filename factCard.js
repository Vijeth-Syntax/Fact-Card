// Array having 10 Web Dev Facts
const webDevFacts = ["- HTML was invented in 1991",
    "CSS stands for Cascading Style Sheets.",
    "JavaScript runs in the browser, instantly.",
    "Over 50% of web traffic is mobile",
    "GitHub is a dev’s online portfolio.",
    "<div> is the most used HTML tag.",
    "React is a JavaScript library, not a framework.",
    "Websites load faster with optimized images.",
    "Semantic HTML improves accessibility.",
    "Dark mode is a user-preferred feature."
];

let factIndex = 0;

// Using Element Selectors which we are further manipulate it.
const factButton = document.getElementById('fact-button');
const factDisplay = document.getElementById('fact-display');
const counter = document.getElementById('counter');

//Working or function of Selectors after selecting Element Selectors.
factButton.addEventListener('click', function() {
    factDisplay.innerText = webDevFacts[factIndex];
    counter.innerText = factIndex + 1;
    factIndex++;
    if(factIndex >= 10) {
        factIndex = 0;
    }
});
