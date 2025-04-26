
let a11 = document.getElementById("a11")
let a12 = document.getElementById("a12")
let a13 = document.getElementById("a13")
let b1 = document.getElementById("b1")
let a21 = document.getElementById("a21")
let a22 = document.getElementById("a22")
let a23 = document.getElementById("a23")
let b2 = document.getElementById("b2")
let a31 = document.getElementById("a31")
let a32 = document.getElementById("a32")
let a33 = document.getElementById("a33")
let b3 = document.getElementById("b3")
let sub = document.getElementById("sub")
let a21New = 0;
let a22New = 0;
let a23New = 0;
let b2New = 0;
// -
let a31New = 0
let a32New = 0
let a33New = 0
let b3New = 0
// -
let rule1 = 0
let rule2 = 0
let rule3 = 0
// -
let a31old = 0
let a32old = 0
let a33old = 0
let b3old = 0
function firstNum() {
    rule1 = a21.value / a11.value;
    a21New = a21.value - (rule1) * a11.value;
    a22New = a22.value - (rule1) * a12.value;
    a23New = a23.value - (rule1) * a13.value;
    b2New = b2.value - (rule1) * b1.value;
    return a21New, a22New, a23New, b2New
}
function secondNum() {
    rule2 = a31.value / a11.value;
    a31New = a31.value - (rule2) * a11.value;
    a32New = a32.value - (rule2) * a12.value;
    a33New = a33.value - (rule2) * a13.value;
    b3New = b3.value - (rule2) * b1.value;
    return a31New, a32New, a33New, b3New
}
function thirdNum() {
    a31old = a31New
    a32old = a32New
    a33old = a33New
    b3old = b3New
    rule3 = a32New / a22New;
    a31New = a31New - (rule3) * a21New;
    a32New = a32New - (rule3) * a22New;
    a33New = a33New - (rule3) * a23New;
    b3New = b3New - (rule3) * b2New;
    return a31New, a32New, a33New, b3New
}
// background-color: #f0f0f0;
function stepsOne() {
    const stepsContainer = document.createElement("div");
    stepsContainer.className = "step1"
    stepsContainer.style.cssText = `
        background-color: #222222;
        color:white;
        padding: 1rem;
        margin-top: 1rem;
        font-size:largest;
        border: 2px solid black;
        margin-block:0.5rem;
        width:300px;
        text-align:center;
    `;
    const steps = [
        `m21 = ${a21.value}/${a11.value} = ${decimalToFraction(rule1)}`,
        `a21 = ${a21.value} - (${decimalToFraction(rule1)}) * ${a11.value} = ${decimalToFraction(a21New)}`,
        `a22 = ${a22.value} - (${decimalToFraction(rule1)}) * ${a12.value} = ${decimalToFraction(a22New)}`,
        `a23 = ${a23.value} - (${decimalToFraction(rule1)}) * ${a13.value} = ${decimalToFraction(a23New)}`,
        `b2  = ${b2.value} -  (${decimalToFraction(rule1)}) * ${b1.value} =  ${decimalToFraction(b2New)}`
    ];

    for (let line of steps) {
        const p = document.createElement("p");
        p.textContent = line;
        stepsContainer.appendChild(p);
    }

    document.body.appendChild(stepsContainer);
}

function stepsTwo() {
    const stepsContainer = document.createElement("div");
    stepsContainer.className = "step2"
    stepsContainer.style.cssText = `
        background-color: #222222;
        color:white;
        padding: 1rem;
        margin-top: 1rem;
        font-size:largest;
        border: 2px solid black;
        margin-block:0.5rem;
        width:300px;
        text-align:center;
    `;

    const steps = [
        `m31 = ${a31.value}/${a11.value} = ${decimalToFraction(rule2)}`,
        `a31 = ${a31.value} - (${decimalToFraction(rule2)}) * ${a11.value} = ${decimalToFraction(a31New)}`,
        `a32 = ${a32.value} - (${decimalToFraction(rule2)}) * ${a12.value} = ${decimalToFraction(a32New)}`,
        `a33 = ${a33.value} - (${decimalToFraction(rule2)}) * ${a13.value} = ${decimalToFraction(a33New)}`,
        `b3  = ${b3.value} -  (${decimalToFraction(rule2)}) * ${b1.value} =  ${decimalToFraction(b3New)}`
    ];

    for (let line of steps) {
        const p = document.createElement("p");
        p.textContent = line;
        stepsContainer.appendChild(p);
    }
    document.body.appendChild(stepsContainer);
}
function stepsThree() {
    const stepsContainer = document.createElement("div");
    stepsContainer.className = "step3"
    stepsContainer.style.cssText = `
        background-color: #222222;
        color:white;
        padding: 1rem;
        margin-top: 1rem;
        font-size:largest;
        border: 2px solid black;
        margin-block:0.5rem;
        width:300px;
        text-align:center;
    `;
    const steps = [
        `m32 = (${decimalToFraction(a32old)})/(${decimalToFraction(a22New)}) = ${decimalToFraction(rule3)}`,
        `a31 = ${decimalToFraction(a31old)} - (${decimalToFraction(rule3)}) * ${decimalToFraction(a21New)} = ${decimalToFraction(a31New)}`,
        `a32 = ${decimalToFraction(a32old)} - (${decimalToFraction(rule3)}) * ${decimalToFraction(a22New)} = ${decimalToFraction(a32New)}`,
        `a33 = ${decimalToFraction(a33old)} - (${decimalToFraction(rule3)}) * ${decimalToFraction(a23New)} = ${decimalToFraction(a33New)}`,
        `b3  = ${decimalToFraction(b3old) } - (${decimalToFraction(rule3)}) * ${decimalToFraction(b2New ) } =${decimalToFraction(b3New)}`
    ];

    for (let line of steps) {
        const p = document.createElement("p");
        p.textContent = line;
        stepsContainer.appendChild(p);
    }

    document.body.appendChild(stepsContainer);
}
function finalMatrix() {
    const matrix = [
        [a11.value, a12.value, a13.value, b1.value],
        [decimalToFraction(a21New), decimalToFraction(a22New), decimalToFraction(a23New), decimalToFraction(b2New)],
        [decimalToFraction(a31New), decimalToFraction(a32New), decimalToFraction(a33New), decimalToFraction(b3New)]
    ];
    const matrixContainer = document.createElement("div");
    matrixContainer.className = "test"
    matrixContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, auto);
        gap: 10px;
        background-color: black;
        color: white;
        padding: 1rem;  border-radius:8px;
        width:60%;
        box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
        `;

    for (let row of matrix) {
        for (let value of row) {
            const cell = document.createElement("div");
            cell.textContent = value;
            cell.style.cssText = `
                padding: 10px;
                background-color: #222;
                border-radius: 4px;
                text-align: center;
            `;
            matrixContainer.appendChild(cell);
        }
    }

    document.body.appendChild(matrixContainer);
}
function inputMatrix() {
    const matrix = [
        [a11.value, a12.value, a13.value, b1.value],
        [a21.value, a22.value, a23.value, b2.value],
        [a31.value, a32.value, a33.value, b3.value]
    ];

    const matrixContainer = document.createElement("div");
    matrixContainer.className = "test"
    matrixContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 10px;
        background-color: black;
        color: white;
        padding: 1rem;
        border-radius:8px;
        width:60%;
        box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
    `;

    for (let row of matrix) {
        for (let value of row) {
            const cell = document.createElement("div");
            cell.textContent = value;
            cell.style.cssText = `
                padding: 10px;
                background-color: #222;
                border-radius: 4px;
                text-align: center;
                `;
            matrixContainer.appendChild(cell);
        }
    }

    document.body.appendChild(matrixContainer);
}
function secondMatrix() {
    const matrix = [
        [a11.value, a12.value, a13.value, b1.value],
        [decimalToFraction(a21New), decimalToFraction(a22New), decimalToFraction(a23New), decimalToFraction(b2New)],
        [a31.value, a32.value, a33.value, b3.value]
    ];

    const matrixContainer = document.createElement("div");
    matrixContainer.className = "test"
    matrixContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, auto);
        gap: 10px;
        background-color: black;
        color: white;
        padding: 1rem;  border-radius:8px;
        width:60%;
        box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
        `;

    for (let row of matrix) {
        for (let value of row) {
            const cell = document.createElement("div");
            cell.textContent = value;
            cell.style.cssText = `
            padding: 10px;
                background-color: #222;
                border-radius: 4px;
                text-align: center;
                `;
            matrixContainer.appendChild(cell);
        }
    }

    document.body.appendChild(matrixContainer);
}

function finalResult(){
    const x3 = b3New / a33New;
    const x2 = (b2New - a23New * x3) / a22New;
    const x1 = (b1.value - a12.value * x2 - a13.value * x3) / a11.value;

    let divContainer = document.createElement("div")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    let divs = [div1, div2, div3];
    divContainer.className="result"
    divContainer.style.cssText = 'display:flex; gap:25px; margin-block:10px 40px;'
        divs.forEach(div => {
            div.style.cssText = 'background-color:black; color:white; padding:1rem; border-radius:8px;'
        });
    div1.textContent = `X1 = ${x1.toFixed(3)} = ${decimalToFraction(x1)}`
    div2.textContent = `X2 = ${x2.toFixed(3)} = ${decimalToFraction(x2)}`
    div3.textContent = `X3 = ${x3.toFixed(3)} = ${decimalToFraction(x3)}`
    divContainer.appendChild(div1)
    divContainer.appendChild(div2)
    divContainer.appendChild(div3)
    document.body.appendChild(divContainer)
}
sub.addEventListener("click", () => {
    const addStepLabel = (text) => {
        const p = document.createElement("p");
        p.textContent = text;
        p.style.cssText = "font-weight:bold; margin-top:1rem; color:white; font-size:2rem;"
        document.body.appendChild(p);
    };
    if (a11.value==""||a12.value==""||a13.value==""||b1.value==""
        ||a21.value==""||a22.value==""||a23.value==""||b2.value==""
        ||a31.value==""||a32.value==""||a33.value==""||b3.value==""
    ){

    }else{
    addStepLabel("Input Matrix");
    inputMatrix()
    ScrollReveal().reveal('.test', { delay: 700});
    firstNum()
    addStepLabel("first step");
    stepsOne()
    ScrollReveal().reveal('.step1', { delay: 700 , reset:true });
    secondMatrix()
    ScrollReveal().reveal('.test', { delay: 700 , reset:true });
    secondNum()
    addStepLabel("second step");
    stepsTwo()
    ScrollReveal().reveal('.step2', { delay: 600 , reset:true });
        finalMatrix()
    ScrollReveal().reveal('.test', { delay: 600 , reset:true });
    addStepLabel("third step");
    thirdNum()
    stepsThree()
    ScrollReveal().reveal('.step3', { delay: 600 , reset:true });;
        finalMatrix()
    ScrollReveal().reveal('.test', { delay: 600 , reset:true });
    finalResult()
        ScrollReveal().reveal('.result', { delay: 700 , reset:true });
    sub.disabled = true
    }
})

// ______________________________________
function decimalToFraction(decimal) {
    // Check if the number is already an integer
    if (Number.isInteger(decimal)) {
        return decimal.toString();
    }

    // Tolerance for floating point precision
    const tolerance = 1.0E-6;
    let denominator = 1;
    let numerator;

    // Find the closest fraction
    while (true) {
        numerator = Math.round(decimal * denominator);
        if (Math.abs(numerator / denominator - decimal) < tolerance) {
            break;
        }
        denominator++;
    }

    // Simplify the fraction by dividing by GCD
    const commonDivisor = gcd(numerator, denominator);
    numerator /= commonDivisor;
    denominator /= commonDivisor;

    // Return as a fraction (e.g., "5/2")
    return `${numerator}/${denominator}`;
}

// Helper function to find the greatest common divisor (GCD)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
// ______________________________________


