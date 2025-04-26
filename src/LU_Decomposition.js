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
let a21New =0;
let a22New =0;
let a23New =0;
let b2New  =0;
// -
let a31New = 0
let a32New = 0
let a33New = 0
let b3New  = 0
// -
let rule1=0
let rule2=0
let rule3=0
// -
let a31old = 0
let a32old = 0
let a33old = 0
let b3old = 0
function firstNum(){
    rule1  = a21.value/a11.value;
    a21New = a21.value-(rule1)*a11.value;
    a22New = a22.value-(rule1)*a12.value;
    a23New = a23.value-(rule1)*a13.value;
    // b2New  = b2.value -(rule1)*b1.value ;
    return a21New , a22New , a23New ,b2New
}
function secondNum(){
    rule2  = a31.value/a11.value;
    a31New = a31.value-(rule2)*a11.value;
    a32New = a32.value-(rule2)*a12.value;
    a33New = a33.value-(rule2)*a13.value;
    // b3New  = b3.value -(rule2)*b1.value ;
    return a31New , a32New , a33New ,b3New
}
function thirdNum(){
    a31old = a31New
    a32old = a32New
    a33old = a33New
    b3old = b3New
    rule3  = a32New/a22New;
    a31New = a31New-(rule3)*a21New;
    a32New = a32New-(rule3)*a22New;
    a33New = a33New-(rule3)*a23New;
    // b3New  = b3New -(rule3)*b2New ;
    return a31New , a32New , a33New ,b3New
}
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
        `a23 = ${a23.value} - (${decimalToFraction(rule1)}) * ${a13.value} = ${decimalToFraction(a23New)}`
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
        `a33 = ${a33.value} - (${decimalToFraction(rule2)}) * ${a13.value} = ${decimalToFraction(a33New)}`
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
        [a11.value, a12.value, a13.value ],
        [decimalToFraction(a21New), decimalToFraction(a22New) , decimalToFraction(a23New)  ],
        [decimalToFraction(a31New), decimalToFraction(a32New) , decimalToFraction(a33New)  ]
    ];
    
    // Create and append the visual matrix (existing code)
    const matrixContainer = document.createElement("div");
    matrixContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 10px;
        background-color: black;
        color: white;
        padding: 1rem;
        width: fit-content;
        border-radius: 8px;
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
                font-size:1.2rem;
            `;
            matrixContainer.appendChild(cell);
        }
    }

    document.body.appendChild(matrixContainer);
    // Add this return statement
    return matrix;
}
function inputMatrix() {
    const matrix = [
        [a11.value, a12.value, a13.value],
        [a21.value, a22.value, a23.value],
        [a31.value, a32.value, a33.value]
    ];

    const matrixContainer = document.createElement("div");
    matrixContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 10px;
        background-color: black;
        color: white;
        padding: 1rem;
        width: fit-content;
        border-radius:8px;
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
                font-size:1.2rem;
                `;
            matrixContainer.appendChild(cell);
        }
    }

    document.body.appendChild(matrixContainer);
}
function inputMatrix2() {
    const matrix = [
        [b1.value],
        [b2.value],
        [b3.value] 
    ];

    const matrixContainer = document.createElement("div");
    matrixContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 10px;
        background-color: black;
        color: white;
        padding: 1rem;
        width: fit-content;
        border-radius:8px;
        font-size:1.2rem;
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
        [a11.value, a12.value, a13.value],
        [decimalToFraction(a21New), decimalToFraction(a22New), decimalToFraction(a23New)],
        [a31.value, a32.value, a33.value]
    ];

    const matrixContainer = document.createElement("div");
    matrixContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(${matrix[0].length}, auto);
        gap: 10px;
        background-color: black;
        color: white;
        padding: 1rem;
        width: fit-content;
        border-radius:8px;
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
                font-size:1.2rem;
                `;
            matrixContainer.appendChild(cell);
        }
    }

    document.body.appendChild(matrixContainer);
}

sub.addEventListener("click",()=>{  
    const addStepLabel = (text) => {
        const p = document.createElement("p");
        p.textContent = text;
        p.style.cssText = "font-weight:bold; margin-top:1rem; color:white; font-size:2rem;"
        document.body.appendChild(p);
    };

    addStepLabel("A Matrix");
    inputMatrix()
    addStepLabel("B Matrix");
        inputMatrix2()
    firstNum()
    addStepLabel("first step");
    stepsOne()
    secondMatrix()
    secondNum()
    addStepLabel("second step");
    stepsTwo()
    finalMatrix()
    thirdNum()
    addStepLabel("third step");
    stepsThree()
        finalMatrix()

    LC_B()
    testPrint()
    addStepLabel("LC = B");
    printStep1()
    printStepsForStep1()
    addStepLabel("UX = C");
    printStep2()
    printStepsForStep2()

})

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

let c1 =0 
let c2 =0 
let c3 =0 
let x1 =0 
let x2 =0 
let x3 =0 
function LC_B(){
    c1 = parseFloat(b1.value);
    c2 = parseFloat(b2.value) - (rule1 * c1);
    c3 = parseFloat(b3.value) - (rule2 * c1) - (rule3 * c2);
    
    // Back substitution to find x values
    x3 = c3 / a33New;
    x2 = (c2 - (a23New * x3)) / a22New;
    x1 = (c1 - (a12.value * x2) - (a13.value * x3)) / a11.value;
    
    return c1, c2, c3, x1, x2, x3;
}

function createMatrixDisplay(label, matrixData) {
    const container = document.createElement("div");
    container.style.cssText = `
        display: flex;
        align-items: center;
    `;

    const labelDiv = document.createElement("div");
    labelDiv.textContent = label;
    labelDiv.style.cssText = `
        margin-right :10px;
        font-size: 20px;
        color: white;
        font-weight: bold;
    `;

    const matrixContainer = document.createElement("div");
    matrixContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(${matrixData[0].length}, auto);
        gap: 10px;
        background-color: black;
        color: white;
        padding: 1rem;
        width: fit-content;
        border-radius: 8px;
    `;

    for (let row of matrixData) {
        for (let value of row) {
            const cell = document.createElement("div");
            cell.textContent = value;
            cell.style.cssText = `
                padding: 10px;
                background-color: #222;
                border-radius: 4px;
                text-align: center;
                min-width: 30px;
            `;
            matrixContainer.appendChild(cell);
        }
    }

    container.appendChild(labelDiv);
    container.appendChild(matrixContainer);
    return container;
}
function testPrint(){
    const mainContainer = document.createElement("div");
    mainContainer.style.cssText = `
        display: flex;
        gap: 10px;
        margin-block: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        font-size:1.2rem;
    `;
    const matrixA = [
        [a11.value, a12.value, a13.value],
        [a21.value, a22.value, a23.value],
        [a31.value, a32.value, a33.value]
    ];
    const matrixB = [
        [b1.value],
        [b2.value],
        [b3.value]
    ];

    const matrixL = [
        [1, 0, 0],
        [decimalToFraction(rule1), 1, 0],
        [decimalToFraction(rule2), decimalToFraction(rule3), 1]
    ];

    const matrixU = [
        [a11.value, a12.value, a13.value ],
        [decimalToFraction(a21New), decimalToFraction(a22New), decimalToFraction(a23New)],
        [decimalToFraction(a31New), decimalToFraction(a32New), decimalToFraction(a33New)]
    ];

    mainContainer.appendChild(createMatrixDisplay("A = ", matrixA));
    mainContainer.appendChild(createMatrixDisplay(", B = ", matrixB));
    mainContainer.appendChild(createMatrixDisplay(", L = ", matrixL));
    mainContainer.appendChild(createMatrixDisplay(", U = ", matrixU));

    document.body.appendChild(mainContainer);
}
function printStep1(){
    const mainContainer = document.createElement("div");
    mainContainer.style.cssText = `
        display: flex;
        gap: 30px;
        margin: 1rem;
    `;
    const matrixL = [
        [1, 0, 0],
        [decimalToFraction(rule1), 1, 0],
        [decimalToFraction(rule2), decimalToFraction(rule3), 1]
    ];
    const matrixC = [
        ["C1"],
        ["C2"],
        ["C3"]
    ];
    const matrixB = [
        [b1.value],
        [b2.value],
        [b3.value]
    ];

    mainContainer.appendChild(createMatrixDisplay("", matrixL));
    mainContainer.appendChild(createMatrixDisplay("", matrixC));
    mainContainer.appendChild(createMatrixDisplay("=  ", matrixB));
    document.body.appendChild(mainContainer);
}

function printStepsForStep1(){
    const mainContainer = document.createElement("div");
    mainContainer.style.cssText = `
        display: flex;
        flex-direction: row; 
        gap: 10px; 
        background-color: black;
        margin: 1rem;
        color: white;
        width: fit-content;
        padding: 1rem;
        border-radius: 8px;
        align-items: flex-start;
    `;

    const equationsContainer = document.createElement("div");
    equationsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 1rem;
    `;

    const calculatedContainer = document.createElement("div");
    calculatedContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 20px;
        padding-left: 20px;
        border-left: 1px solid #444;
    `;

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")
    let p5 = document.createElement("p")
    let p6 = document.createElement("p")

    p1.innerHTML = `c<sub>1</sub> = ${b1.value}`
    p2.innerHTML = `${rule1}c<sub>1</sub> + c<sub>2</sub> = ${b2.value}`
    p3.innerHTML = `${rule2}c<sub>1</sub> + ${rule3}c<sub>2</sub> + c<sub>3</sub> = ${b3.value}`
    p4.innerHTML = `c<sub>1</sub> = ${decimalToFraction(c1)}`
    p5.innerHTML = `c<sub>2</sub> = ${decimalToFraction(c2)}`
    p6.innerHTML = `c<sub>3</sub> = ${decimalToFraction(c3)}`
    
    equationsContainer.appendChild(p1)
    equationsContainer.appendChild(p2)
    equationsContainer.appendChild(p3)

    calculatedContainer.appendChild(p4)
    calculatedContainer.appendChild(p5)
    calculatedContainer.appendChild(p6)

    mainContainer.appendChild(equationsContainer)
    mainContainer.appendChild(calculatedContainer)
    
    document.body.appendChild(mainContainer);
}


function printStep2(){
    const mainContainer = document.createElement("div");
    mainContainer.style.cssText = `
        display: flex;
        gap: 30px;
        margin: 1rem;
    `;
    const matrixU = [
        [a11.value, a12.value, a13.value ],
        [decimalToFraction(a21New), decimalToFraction(a22New), decimalToFraction(a23New)],
        [decimalToFraction(a31New), decimalToFraction(a32New), decimalToFraction(a33New)]
    ];
    const matrixX = [
        ["X1"],
        ["X2"],
        ["X3"]
    ];
    const matrixB = [
        [decimalToFraction(c1)],
        [decimalToFraction(c2)],
        [decimalToFraction(c3)]
    ];

    mainContainer.appendChild(createMatrixDisplay("", matrixU));
    mainContainer.appendChild(createMatrixDisplay("", matrixX));
    mainContainer.appendChild(createMatrixDisplay("=  ", matrixB));
    document.body.appendChild(mainContainer);
}
function printStepsForStep2(){
    const mainContainer = document.createElement("div");
    mainContainer.style.cssText = `
        display: flex;
        flex-direction: row; 
        gap: 10px; 
        background-color: black;
        margin: 1rem;
        color: white;
        width: fit-content;
        padding: 1rem;
        border-radius: 8px;
        align-items: flex-start;
    `;

    const equationsContainer = document.createElement("div");
    equationsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 1rem;
    `;

    const calculatedContainer = document.createElement("div");
    calculatedContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 20px;
        padding-left: 20px;
        border-left: 1px solid #444;
    `;

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")
    let p5 = document.createElement("p")
    let p6 = document.createElement("p")

    p1.innerHTML = `${a11.value}x<sub>1</sub> + ${a12.value}x<sub>2</sub> + ${a13.value}x<sub>3</sub> = ${c1}`
    p2.innerHTML = `${a21New}x<sub>1</sub> + ${a22New}x<sub>2</sub> + ${a23New}x<sub>3</sub> = ${c2}`
    p3.innerHTML = `${a31New}x<sub>1</sub> + ${a32New}x<sub>2</sub> + ${a33New}x<sub>3</sub> = ${c3}`
    p4.innerHTML = `x<sub>1</sub> = ${decimalToFraction(x1)}`
    p5.innerHTML = `x<sub>2</sub> = ${decimalToFraction(x2)}`
    p6.innerHTML = `x<sub>3</sub> = ${decimalToFraction(x3)}`
    
    equationsContainer.appendChild(p1)
    equationsContainer.appendChild(p2)
    equationsContainer.appendChild(p3)

    calculatedContainer.appendChild(p4)
    calculatedContainer.appendChild(p5)
    calculatedContainer.appendChild(p6)

    mainContainer.appendChild(equationsContainer)
    mainContainer.appendChild(calculatedContainer)
    
    document.body.appendChild(mainContainer);
}