/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const operatorButtons = document.querySelectorAll('.button.operator');


/*-------------------------------- Variables --------------------------------*/

let firstArgument = null;
let secondArgument = null;
let operator = null;
let result = null;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click' , (event) => {

    if (event.target.classList.contains('number')) {
            document.querySelector('.display').innerText += event.target.innerText;
    }

    //Pressing the C button

    if (event.target.classList.contains('clear')) {
        document.querySelector('.display').innerText = '';
        firstArgument = null;
        secondArgument = null;
        operator = null;
        result = null;
        operatorButtons.forEach((btn) => {
            btn.classList.remove('selected');
        });
    }

    // Presing the '=' button
    
    if(event.target.classList.contains('equals')){
        const result = solve(firstArgument, secondArgument, operator);
    }

});

operatorButtons.forEach((button) => {
    button.addEventListener('click' , () => {
        operatorButtons.forEach((btn) => {
            btn.classList.remove('selected');
        });
            button.classList.add('selected');   
    });
});

/*-------------------------------- Functions --------------------------------*/