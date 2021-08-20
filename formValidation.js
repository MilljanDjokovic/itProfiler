
// DOM form, input, button... 

const form = document.getElementById('infoForm');
const pName = document.getElementById('name');
const pSurname = document.getElementById('surname');
const pEmail = document.getElementById('e-mail');
const pCheckbox = document.getElementById('checkbox');
const button = document.getElementById('submitProgrammerInfo');


//Function show error

function showError(input, message) {
    const parentDiv = input.parentElement;
    //console.log(parentDiv)
    parentDiv.className = 'error';
    const small = parentDiv.querySelector('small');
    small.style.color = 'red';
    small.innerText = message;

    setTimeout(() => {
        small.innerText = "";
    }, 2000);

}

//Function show success

function showSuccess(input) {
    const div = input.parentElement;
    div.className = 'success';
}

// Function validate e-mail

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, `E-mail is not valid`);
    }
}


// Function check inputs

function checkInputs(inputArr) {
    //console.log(inputArr);
    inputArr.forEach( input => {
        if (input.value.trim() === "") {
            showError(input, `${firstCharUpp(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//Function check length

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${firstCharUpp(input)} must be at least ${min} charachters`)
    } else if (input.value.length > max) {
        showError(input, `${firstCharUpp(input)} must be less than ${max} charachters`)
    } else {
        showSuccess(input);
    }
}

// Make first char uppercase

function firstCharUpp(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener submit

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Array of inputs
    checkInputs([pName, pSurname, pEmail, pCheckbox]);

    checkLength(pName, 2, 15);
    checkLength(pSurname, 2, 20);
    checkEmail(pEmail);

    /* 
    if(pName.value === ""){
        showError(pName, "Insert Your Name!")
    } else {
        showSuccess(pName);
    };


    if(pSurname.value === ""){
        showError(pSurname, "Insert Your Surname!")
    } else {
        showSuccess(pSurname);
    };

    if(pEmail.value === ""){
        showError(pEmail, "Insert Your e-mail!")
    } else if(!validateEmail(pEmail.value)){
        showError(pEmail, "E mail is not valid!")
    } else {
        showSuccess(pEmail);
    };

    if(pCheckbox.checked) {
        showSuccess(pCheckbox);
    } else {
        showError(pCheckbox, "Select checkbox") 
    }; */
})
