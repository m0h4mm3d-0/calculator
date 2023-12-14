const calcInput = document.querySelector('.calc-input');
const allBtns = document.querySelectorAll('.button');
const display = document.querySelector('.display');

allBtns.forEach(button => {
    button.addEventListener('click', (e) => {
	const value = e.target.dataset.value;
	if (value === "=") {
	    if (calcInput.innerText.includes('/')) {
		const splitedShit = calcInput.innerText.split('/');
		operate('/', splitedShit[0], splitedShit[1]);
	    }
	    if (calcInput.innerText.includes('-')) {
		const splitedShit = calcInput.innerText.split('-');
		operate('-', splitedShit[0], splitedShit[1]);
	    }
	    if (calcInput.innerText.includes('+')) {
		const splitedShit = calcInput.innerText.split('+');
		operate('+', splitedShit[0], splitedShit[1]);
	    }
	    if (calcInput.innerText.includes('*')) {
		const splitedShit = calcInput.innerText.split('*');
		operate('*', splitedShit[0], splitedShit[1]);
	    }
	}
	calcInput.innerText += value;

	if (value === 'clear') {
	    calcInput.innerText = "";
	}
    });
});

function add(a, b){
    return console.log(parseFloat(a) + parseFloat(b));
}

function subtract(a, b){
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b){
    if (parseFloat(b) == 0){
        return "can't quite answer this one cheif";
    }
    else{
        return parseFloat(a) / parseFloat(b);
    }
}

function operate(operator, num1, num2){
    console.log(operator, num1, num2)
    if (operator === "+") {
	return add(num1, num2);
    }if (operator === "-") {
	return subtract(num1, num2);
    }if (operator === "/") {
	return multiply(num1, num2);
    }if (operator === "*") {
	return divide(num1, num2);
    }
}
