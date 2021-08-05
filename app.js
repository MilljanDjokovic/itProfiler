// Initiate arrays of correct answers
let correctAnswers = ['A', 'A', 'A', 'A', 'A'];

// Grab form and result span from the DOM

let form = document.getElementById('questionForm');
let result = document.getElementById('result');
console.log(form, result);


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

//Bold user score

result.style.backgroundColor = 'green';

});




