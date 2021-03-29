const inputUser = document.querySelector('.form-groupe:nth-child(1) input');
const inputMail = document.querySelector('.form-groupe:nth-child(2) input');
const inputPassword = document.querySelector('.form-groupe:nth-child(3) input');
const inputConfirmation = document.querySelector('.form-groupe:nth-child(4) input');
const allImage = document.querySelectorAll('.verificationIcon');
const allSpan = document.querySelectorAll('span');
const allLine = document.querySelectorAll('.line div');


inputUser.addEventListener('input', (e) => {

    if(e.target.value.length >= 3) {
        allImage[0].style.display = "inline";
        allImage[0].src = "src/check.svg";
        allSpan[0].style.display = "none";
    }   
    else {
        allImage[0].style.display = "inline";
        allImage[0].src = "src/error.svg";
        allSpan[0].style.display = "inline";
    }
})

inputMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;
    
    if(e.target.value.search(regexEmail) === 0){

        allImage[1].style.display = "inline";
        allImage[1].src = "src/check.svg";
        allSpan[1].style.display = "none";

    } else if(e.target.value.search(regexEmail) === -1) {

        allImage[1].style.display = "inline";
        allImage[1].src = "src/error.svg";
        allSpan[1].style.display = "inline";
    }
})

// Validation création du MDP
let valueInput;
const specialCharacters = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const numbers = /[0-9]/;

let objectValidation = {
    symbol : 0,
    letter: 0,
    number : 0
}

inputPassword.addEventListener('input', (e) => {

    valueInput = e.target.value;

    if(valueInput.search(specialCharacters) !== -1){
        objectValidation.symbol = 1;
    }
    if(valueInput.search(alphabet) !== -1){
        objectValidation.letter= 1;
    }
    if(valueInput.search(numbers) !== -1){
        objectValidation.number = 1;
    }

    if(e.inputType = 'deleteContentBackward'){
        if(valueInput.search(specialCharacters) === -1){
            objectValidation.symbol = 0;
        }
        if(valueInput.search(alphabet) === -1){
            objectValidation.letter= 0;
        }
        if(valueInput.search(numbers) === -1){
            objectValidation.number = 0;
        }
    } 

    let testAll = 0;
    for(const property in objectValidation){
        if(objectValidation[property] > 0){
            testAll++;
        }
    }
    if(testAll < 3){
        allSpan[2].style.display = "inline";
        allImage[2].style.display = "inline";
        allImage[2].src = "src/error.svg";
    } else {
        allSpan[2].style.display = "none";
        allImage[2].src = "src/check.svg";
    }

    // force mdp
    if(valueInput.length <= 6 && valueInput.length > 0){
        allLine[0].style.display = 'block';
        allLine[1].style.display = 'none';
        allLine[2].style.display = 'none';
    }
    else if (valueInput.length > 6 && valueInput.length <= 9) {
        allLine[0].style.display = 'block';
        allLine[1].style.display = 'block';
        allLine[2].style.display = 'none';
    }
    else if (valueInput.length > 9) {
        allLine[0].style.display = 'block';
        allLine[1].style.display = 'block';
        allLine[2].style.display = 'block';
    }
    else if (valueInput.length === 0) {
        allLine[0].style.display = 'none';
        allLine[1].style.display = 'none';
        allLine[2].style.display = 'none';
    }
})

// confirmation
inputConfirmation.addEventListener('input', (e) => {

    if(e.target.value.length === 0){
        allImage[3].style.display = "inline";
        allImage[3].src = "src/error.svg";
    }
    else if(e.target.value === valueInput){
        allImage[3].style.display = "inline";
        allImage[3].src = "src/check.svg";
    } else {
        allImage[3].style.display = "inline";
        allImage[3].src = "src/error.svg";
    }
})