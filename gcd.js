let container = document.getElementById("container");
let buttonGcdOnly = document.getElementById("button1");
let buttonGcdPositiveU = document.getElementById("button2")
let firstNumber;
let secondNumber;

let click1 = button1.addEventListener('click', checkInput);
let click2 = button2.addEventListener('click', checkInput);

function checkInput() {
    firstNumber = document.getElementById("input1").value;
    secondNumber = document.getElementById("input2").value;
    // console.log(firstNumber, secondNumber);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return;
    }
    if(event.target.id == 'button1')
    gcd(firstNumber, secondNumber);
    else if (event.target.id == 'button2')
    gcdPositiveU(firstNumber, secondNumber);
    else
    container.textContent("Something went wrong")
    return;
}

function gcd(a, b) {
    let u = 1;
    // console.log(u);
    let g = a;
    // console.log(g);
    let x = 0;
    let y = b;

    while (y != 0){
        let q = Math.floor(g / y);
        let t = g % y;

        let s = u - (q * x);
        u = x;
        g = y;
        x = s;
        y = t;
    }
    let v = ((g - (a * u)) / b);

    printGcdResults(g, u, v);

    return;
}

function gcdPositiveU(a, b) {    
    let u = 1;
    // console.log(u);
    let g = a;
    // console.log(g);
    let x = 0;
    let y = b;

    while (y != 0){
        let q = Math.floor(g / y);
        let t = g % y;

        let s = u - (q * x);
        u = x;
        g = y;
        x = s;
        y = t;
    }

    let v = ((g - (a * u)) / b);

    if (u < 0){
        while (u < 0){
            u += b / g;
            v -= a / g;
        }
    }
    printGcdResults(g, u, v);
    return;
}

function printGcdResults(gcd, uValue, vValue) {
    let newGcdCalc = document.createElement('div');
    container.appendChild(newGcdCalc).className = 'new-div';

    newGcdCalc.textContent = `GCD: ${gcd}, u: ${uValue}, v: ${vValue}  |||  
        equation: ${firstNumber}(${uValue}) + ${secondNumber}(${vValue}) = ${gcd}`;

    
}



