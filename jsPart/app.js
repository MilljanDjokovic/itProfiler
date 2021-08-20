// Grab form and result span from the DOM

let form = document.getElementById('questionForm');
let result = document.getElementById('result');
let showOutput = document.getElementById('showOutput');
let back = document.getElementById('back');


// Set and display timer when jsIndex loads
window.onload = () => {

let result = document.getElementById('result');

// time to countdown from (in milliseconds)
let countDownDate = new Date().getTime() + 5 * 60 * 1000;


// Set countdown timer
let x = setInterval(() => {

    //Get timer frome the DOM
    let timer = document.getElementById('timer');

    // get today's date and time in milliseconds
    let now = new Date().getTime();

    // find the interval between now and the countdown time
    let timeLeft = countDownDate - now;

    // time calculations for minutes and seconds
    const minutes = Math.floor( (timeLeft/1000/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );

    // display the result in the timer element
    timer.innerText = `Test time left: ${minutes} : ${seconds}`;

    // clearing countdown when complete
    if (timeLeft < 0 || result.innerText != "") {
        clearInterval(x);
        timer.innerText = `Test time has finished. Now, You can go to main page by clicking yellow arrow.`;
    }
    }, 1000);

};

// Initiate arrays of correct answers
let correctAnswers = ['A', 'A', 'A', 'A', 'A'];

//Ad form submit event listener

form.addEventListener('submit', e => {
//Prevent default submit behavior
    e.preventDefault();

//Declare score variable and get store user answers

    let score = 0;
    let userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value, form.Q5.value];

//Loop through userAnswers and compare them with correct answers

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 20;
        }
    });

// Fill result span with user score
   result.textContent = score;

// Navigate to top of the screen and animate score for better user experience

    window.scroll(0,0);

// Animate user score

let output = 0;

const timer = setInterval(() => {
    result.textContent = output;
    if(output === score){
        clearInterval(timer);
    } else {
        output++
    }
}, 10);

//Show score by removing backToStart class

showOutput.classList.remove('backToStart');
back.classList.remove('backToStart');

});






