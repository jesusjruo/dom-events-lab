/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');
document.querySelector('.display').innerText = '0';

/*-------------------------------- Variables --------------------------------*/

let display = '';

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click' , (event) => {

    if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {
            display += event.target.innerText;
            document.querySelector('.display').textContent = display;
    }

    if (event.target.classList.contains('clear')) {
        document.querySelector('.display').innerText = '0';
        display = '';
    }

    if (event.target.classList.contains('equals')) {
        const arr = display.split("");
        const solution = solveMath(arr);
        document.querySelector('.display').innerText = solution;
    }

});

/*-------------------------------- Functions --------------------------------*/

function solveMath(arr) {
    let expression = '';

    arr.forEach(item => {
        if (!isNaN(item) || ['+', '-', '*', '/'].includes(item)) {
            expression += item;
        }
    });

    let result;

    try {
        result = eval(expression);
    } catch (e) {
        console.error('Error solving the operation:', e);
        return null;
    }

    return result;
}