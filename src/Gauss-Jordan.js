let a11InputValue = document.getElementById("a11")
let a12InputValue = document.getElementById("a12")
let a13InputValue = document.getElementById("a13")
let  b1InputValue = document.getElementById("b1")
let a21InputValue = document.getElementById("a21")
let a22InputValue = document.getElementById("a22")
let a23InputValue = document.getElementById("a23")
let  b2InputValue = document.getElementById("b2")
let a31InputValue = document.getElementById("a31")
let a32InputValue = document.getElementById("a32")
let a33InputValue = document.getElementById("a33")
let  b3InputValue = document.getElementById("b3")
let subInputValue = document.getElementById("sub")
let a11 = 0
let a12 = 0
let a13 = 0
let b1 = 0

let a21 = 0 
let a22 = 0
let a23 = 0
let b2 = 0

let a31 = 0
let a32 = 0
let a33 = 0
let b3 = 0
function firstNum() {
    //R1 * ( 1/a11) -> R1
    a11 = parseFloat(a11InputValue.value * (1/a11InputValue.value))
    a12 = parseFloat(a12InputValue.value * (1/a11InputValue.value))
    a13 = parseFloat(a13InputValue.value * (1/a11InputValue.value))
    b1  = parseFloat(b1InputValue.value * (1/a11InputValue.value))
    const matrix = [
        [decimalToFraction(a11),decimalToFraction(a12),decimalToFraction(a13),decimalToFraction(b1)],
        [a21InputValue.value,a22InputValue.value,a23InputValue.value,b2InputValue.value],
        [a31InputValue.value,a32InputValue.value,a33InputValue.value,b3InputValue.value]
    ]
    let title = `<b> R1 * (1/${a11InputValue.value}) -> R1 </b> <br>
                a11 = (${a11InputValue.value}) * (1/${a11InputValue.value}) = ${decimalToFraction(a11)}  <br>
                a12 = (${a12InputValue.value}) * (1/${a11InputValue.value}) = ${decimalToFraction(a12)} <br>
                a13 = (${a13InputValue.value}) * (1/${a11InputValue.value}) = ${decimalToFraction(a13)} <br>
                b1 = (${b1InputValue.value}) * (1/${a11InputValue.value}) = ${decimalToFraction(b1)} `
    printMatrix(matrix, title)
}
function secondNum() {
    //R2 - (a21* R1) -> R2
    a21 = parseFloat(a21InputValue.value - (a21InputValue.value*a11))
    a22 = parseFloat(a22InputValue.value - (a21InputValue.value*a12))
    a23 = parseFloat(a23InputValue.value - (a21InputValue.value*a13))
    b2  = parseFloat(b2InputValue.value  -  (a21InputValue.value*b1))
    const matrix = [
        [decimalToFraction(a11),decimalToFraction(a12),decimalToFraction(a13),decimalToFraction( b1) ],
        [decimalToFraction(a21),decimalToFraction(a22),decimalToFraction(a23),decimalToFraction(b2)],
        [a31InputValue.value,a32InputValue.value,a33InputValue.value,b3InputValue.value]
    ]
    let title = `<b> R2 - (${a21InputValue.value} * R1) -> R2 </b> <br>
                a21 = (${a21InputValue.value}) - (${a21InputValue.value} * ${a11}) = ${decimalToFraction(a21)}  <br>
                a22 = (${a22InputValue.value}) - (${a21InputValue.value} * ${a11}) = ${decimalToFraction(a22)}  <br>
                a23 = (${a23InputValue.value}) - (${a21InputValue.value} * ${a11}) = ${decimalToFraction(a23)}  <br>
                b2 = (${b2InputValue.value}) - (${a21InputValue.value} *   ${a11}) = ${decimalToFraction(b2)} 
                `
    printMatrix(matrix, title)
}
function thirdNum() {
    //R3 - (a31* R1) -> R3
    a31 = parseFloat(a31InputValue.value - (a31InputValue.value*a11))
    a32 = parseFloat(a32InputValue.value - (a31InputValue.value*a12))
    a33 = parseFloat(a33InputValue.value - (a31InputValue.value*a13))
    b3  = parseFloat(b3InputValue.value  - (a31InputValue.value*b1 ))
    const matrix = [
        [decimalToFraction(a11),decimalToFraction(a12),decimalToFraction(a13),decimalToFraction( b1) ],
        [decimalToFraction(a21),decimalToFraction(a22),decimalToFraction(a23),decimalToFraction(b2)],
        [decimalToFraction(a31),decimalToFraction(a32),decimalToFraction(a33),decimalToFraction(b3)],
    ]
    let title = `<b> R3 - (${decimalToFraction(a31InputValue.value)} * R1) -> R3 </b> <br>
                a31 = (${decimalToFraction(a31InputValue.value)}) - (${decimalToFraction(a31InputValue.value)} * ${a11}) = ${decimalToFraction(a31)}  <br>
                a32 = (${decimalToFraction(a32InputValue.value)}) - (${decimalToFraction(a31InputValue.value)} * ${a12}) = ${decimalToFraction(a32)}  <br>
                a33 = (${decimalToFraction(a33InputValue.value)}) - (${decimalToFraction(a31InputValue.value)} * ${a13}) = ${decimalToFraction(a33)}  <br>
                b3 = (${decimalToFraction(b3InputValue.value )}) -   (${decimalToFraction(a31InputValue.value)} *   ${b1}) = ${decimalToFraction(b3)} 
                `
    printMatrix(matrix, title)
}
// __________________________________________________________________step two
let a11Step2 = 0
let a12Step2 = 0
let a13Step2 = 0
let b1Step2 = 0

let a21Step2 = 0
let a22Step2 = 0
let a23Step2 = 0
let b2Step2 = 0

let a31Step2 = 0
let a32Step2 = 0
let a33Step2 = 0
let b3Step2 = 0
function firstNum2(){
    //R2 / a22 -> R2
    //second row
    a21Step2 = a21/a22
    a22Step2 = a22/a22
    a23Step2 = a23/a22
    b2Step2  = b2/a22
    const matrix = [
        [decimalToFraction(a11),decimalToFraction(a12),decimalToFraction(a13),decimalToFraction(b1 )],
        [decimalToFraction(a21Step2),decimalToFraction(a22Step2),decimalToFraction(a23Step2),decimalToFraction(b2Step2)],
        [decimalToFraction(a31),decimalToFraction(a32),decimalToFraction(a33),decimalToFraction(b3 )]
    ]
    let title = `<b> R2 / (${decimalToFraction(a22)}) -> R2 </b> <br>
                a21 = (${decimalToFraction(a21)}) / ${decimalToFraction(a22)}) = ${decimalToFraction(a21Step2)}  <br>
                a22 = (${decimalToFraction(a22)}) / ${decimalToFraction(a22)}) = ${decimalToFraction(a22Step2)}  <br>
                a23 = (${decimalToFraction(a23)}) / ${decimalToFraction(a22)}) = ${decimalToFraction(a23Step2)}  <br>
                b2 =  (${decimalToFraction(b2 )})  /${decimalToFraction(a22)}) =${decimalToFraction(b2Step2 )} 
                `
    printMatrix(matrix, title)
}
function secondNum2(){
    // R1 - (a12 * R2) -> R1
    // first row
    a11Step2 = a11 -(a12 * a21Step2)
    a12Step2 = a12 -(a12 * a22Step2)
    a13Step2 = a13 -(a12 * a23Step2)
    b1Step2  = b1  -(a12 * b2Step2 )
    const matrix = [
        [decimalToFraction(a11Step2),decimalToFraction(a12Step2),decimalToFraction(a13Step2),decimalToFraction(b1Step2)],
        [decimalToFraction(a21Step2),decimalToFraction(a22Step2),decimalToFraction(a23Step2),decimalToFraction(b2Step2)],
        [decimalToFraction(a31),decimalToFraction(a32),decimalToFraction(a33),decimalToFraction(b3)]
    ]
    let title = `<b> R1 - (${decimalToFraction(a12)} * R2 ) -> R1 </b> <br>
                a11 = (${decimalToFraction(a11)}) - (${decimalToFraction(a12)} * ${decimalToFraction(a21Step2)} ) = ${decimalToFraction(a11Step2)}  <br>
                a12 = (${decimalToFraction(a12)}) - (${decimalToFraction(a12)} * ${decimalToFraction(a22Step2)} ) = ${decimalToFraction(a12Step2)}  <br>
                a13 = (${decimalToFraction(a13)}) - (${decimalToFraction(a12)} * ${decimalToFraction(a23Step2)} ) = ${decimalToFraction(a13Step2)}  <br>
                b1 =  (${decimalToFraction(b1 )})  -(${decimalToFraction(a12)} * ${decimalToFraction(b2Step2 )} ) =${decimalToFraction(b1Step2 )} 
                `
    printMatrix(matrix, title)
}
function thirdNum2(){
    // R3 - (a32 * R2) -> R3
    // third row
    a31Step2 = a31 -(a32 * a21Step2)
    a32Step2 = a32 -(a32 * a22Step2)
    a33Step2 = a33 -(a32 * a23Step2)
    b3Step2  = b3  -(a32 * b2Step2)
    const matrix = [
        [decimalToFraction(a11Step2),decimalToFraction(a12Step2),decimalToFraction(a13Step2),decimalToFraction(b1Step2)],
        [decimalToFraction(a21Step2),decimalToFraction(a22Step2),decimalToFraction(a23Step2),decimalToFraction(b2Step2)],
        [decimalToFraction(a31Step2),decimalToFraction(a32Step2),decimalToFraction(a33Step2),decimalToFraction(b3Step2)]
    ]
    let title = `<b> R3 - (${decimalToFraction(a32)} * R2 ) -> R3 </b> <br>
                a31 = (${decimalToFraction(a31)}) - (${decimalToFraction(a32)} * ${decimalToFraction(a21Step2)}) = ${decimalToFraction(a31Step2)}  <br>
                a32 = (${decimalToFraction(a32)}) - (${decimalToFraction(a32)} * ${decimalToFraction(a22Step2)}) = ${decimalToFraction(a32Step2)}  <br>
                a33 = (${decimalToFraction(a33)}) - (${decimalToFraction(a32)} * ${decimalToFraction(a23Step2)}) = ${decimalToFraction(a33Step2)}  <br>
                b3 =  (${decimalToFraction(b3 )})  -(${decimalToFraction(a32)} * ${decimalToFraction(b2Step2 )}) =${decimalToFraction(b3Step2 )} 
                `
    printMatrix(matrix, title)
}
// __________________________________________________________________step three |Down
let a11Step3 = 0
let a12Step3 = 0
let a13Step3 = 0
let  b1Step3 = 0

let a21Step3 = 0
let a22Step3 = 0
let a23Step3 = 0
let  b2Step3 = 0

let a31Step3 = 0
let a32Step3 = 0
let a33Step3 = 0
let  b3Step3 = 0
function firstNum3(){
    //R3 / a33 -> R3
    //third row
    a31Step3 = a31Step2/a33Step2
    a32Step3 = a32Step2/a33Step2
    a33Step3 = a33Step2/a33Step2
    b3Step3  = b3Step2 /a33Step2
    const matrix = [
        [decimalToFraction(a11Step2),decimalToFraction(a12Step2),decimalToFraction(a13Step2),decimalToFraction(b1Step2)],
        [decimalToFraction(a21Step2),decimalToFraction(a22Step2),decimalToFraction(a23Step2),decimalToFraction(b2Step2)],
        [decimalToFraction(a31Step3),decimalToFraction(a32Step3),decimalToFraction(a33Step3),decimalToFraction(b3Step3)]
    ]
    let title = `<b> R3 / (${decimalToFraction(a33Step2)}) -> R3 </b> <br>
                a31 = (${decimalToFraction(a31Step2)}) / ${decimalToFraction(a33Step2)}) = ${decimalToFraction(a31Step3)}  <br>
                a32 = (${decimalToFraction(a32Step2)}) / ${decimalToFraction(a33Step2)}) = ${decimalToFraction(a32Step3)}  <br>
                a33 = (${decimalToFraction(a33Step2)}) / ${decimalToFraction(a33Step2)}) = ${decimalToFraction(a33Step3)}  <br>
                b3 =  (${decimalToFraction(b3Step2 )})  /${decimalToFraction(a33Step2)}) =${decimalToFraction (b3Step3)} 
                `
    printMatrix(matrix, title)
}
function secondNum3(){
    //R2 - (a23 * R3)-> R2
    //second row
    a21Step3 = a21Step2 - (a23Step2 * a31Step3)
    a22Step3 = a22Step2 - (a23Step2 * a32Step3)
    a23Step3 = a23Step2 - (a23Step2 * a33Step3)
    b2Step3  = b2Step2  - (a23Step2 * b3Step3 )
    const matrix = [
        [decimalToFraction(a11Step2),decimalToFraction(a12Step2),decimalToFraction(a13Step2),decimalToFraction(b1Step2)],
        [decimalToFraction(a21Step3),decimalToFraction(a22Step3),decimalToFraction(a23Step3),decimalToFraction(b2Step3)],
        [decimalToFraction(a31Step3),decimalToFraction(a32Step3),decimalToFraction(a33Step3),decimalToFraction(b3Step3)]
    ]
    let title = `<b> R2 - (${decimalToFraction(a23Step2)} * R3) -> R2 </b> <br>
                a21 = (${decimalToFraction(a21Step2)}) - (${decimalToFraction(a23Step2)} * ${decimalToFraction(a31Step3)}) = ${decimalToFraction(a21Step3)}  <br>
                a22 = (${decimalToFraction(a22Step2)}) - (${decimalToFraction(a23Step2)} * ${decimalToFraction(a32Step3)}) = ${decimalToFraction(a22Step3)}  <br>
                a23 = (${decimalToFraction(a23Step2)}) - (${decimalToFraction(a23Step2)} * ${decimalToFraction(a33Step3)}) = ${decimalToFraction(a23Step3)}  <br>
                b2 =  (${decimalToFraction(b2Step2 )}) - (${decimalToFraction(a23Step2)} * ${decimalToFraction(b3Step3 )}) =${decimalToFraction   (b2Step3 )} 
                `
    printMatrix(matrix, title)
}
function thirdNum3(){
    //R1 - (a13Step2 * R3)-> R1
    //first row
    a11Step3 = a11Step2 - (a13Step2 * a31Step3)
    a12Step3 = a12Step2 - (a13Step2 * a32Step3)
    a13Step3 = a13Step2 - (a13Step2 * a33Step3)
    b1Step3  = b1Step2 -  (a13Step2 * b3Step3 )
    const matrix = [
        [decimalToFraction(a11Step3),decimalToFraction(a12Step3),decimalToFraction(a13Step3),decimalToFraction(b1Step3)],
        [decimalToFraction(a21Step3),decimalToFraction(a22Step3),decimalToFraction(a23Step3),decimalToFraction(b2Step3)],
        [decimalToFraction(a31Step3),decimalToFraction(a32Step3),decimalToFraction(a33Step3),decimalToFraction(b3Step3)]
    ]
    let title = `<b> R1 - (${decimalToFraction(a13Step2)} * R3) -> R1 </b> <br>
                a11 = (${decimalToFraction(a11Step2)}) - (${decimalToFraction(a13Step2)} * ${decimalToFraction(a31Step3)}) = ${decimalToFraction(a11Step3)}  <br>
                a12 = (${decimalToFraction(a12Step2)}) - (${decimalToFraction(a13Step2)} * ${decimalToFraction(a32Step3)}) = ${decimalToFraction(a12Step3)}  <br>
                a13 = (${decimalToFraction(a13Step2)}) - (${decimalToFraction(a13Step2)} * ${decimalToFraction(a33Step3)}) = ${decimalToFraction(a13Step3)}  <br>
                b1 =  (${decimalToFraction(b1Step2) }) - (${decimalToFraction(a13Step2)} * ${decimalToFraction(b3Step3 )}) =${decimalToFraction   (b1Step3 )} 
                `
    printMatrix(matrix, title)
}
// // background-color: #f0f0f0;
function printMatrix(matrixData, stepMessage = "") {
    const container = document.createElement("div");
    container.className = "scroll"
    container.style.cssText = `
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-block: 1rem;
        gap: 10px;
        margin-block: 3rem;
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
        font-size: 1.2rem;
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

    const stepDiv = document.createElement("div");
    stepDiv.innerHTML = stepMessage;
    stepDiv.style.cssText = `
        color: white;
        font-size: 1.2rem;
        padding: 0.5rem;
    `;

    container.appendChild(matrixContainer);
    container.appendChild(stepDiv);
    document.body.appendChild(container);
}

function finalResult(){ 
    const x1 = b1Step3;
    const x2 =b2Step3;
    const x3 =b3Step3;

    let divContainer = document.createElement("div")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    div1.className = "scroll1"
    div2.className = "scroll2"
    div3.className = "scroll3"
    let divs = [div1, div2, div3];
    divContainer.className="result"
    divContainer.style.cssText = 'display:flex; gap:25px; margin-block:10px 80px;flex-wrap: wrap; width:80%;'
    divs.forEach(div => {
            div.style.cssText = 'background-color:black; color:white; padding:1rem; border-radius:8px; flex:1; text-align:center;'
        });
    div1.textContent = `X1 = ${decimalToFraction(x1)}`
    div2.textContent = `X2 = ${decimalToFraction(x2)}`
    div3.textContent = `X3 = ${decimalToFraction(x3)}`
    divContainer.appendChild(div1)
    divContainer.appendChild(div2)
    divContainer.appendChild(div3)
    document.body.appendChild(divContainer)
}
sub.addEventListener("click",()=>{
    const addStepLabel = (text) => {
        const p = document.createElement("p");
        p.textContent = text;
        p.style.cssText = "font-weight:bold; margin-top:1rem; color:white; font-size:2rem;"
        document.body.appendChild(p);
    };
    if (a11InputValue.value==""||a12InputValue.value==""||a13InputValue.value==""||b1InputValue.value==""
        ||a21InputValue.value==""||a22InputValue.value==""||a23InputValue.value==""||b2InputValue.value==""
        ||a31InputValue.value==""||a32InputValue.value==""||a33InputValue.value==""||b3InputValue.value==""
    ){}else{
    addStepLabel("First Step");
    firstNum()
    secondNum()
    thirdNum()
    addStepLabel("____________");
    addStepLabel("Second Step");
    firstNum2()
    secondNum2()        
    thirdNum2()
    addStepLabel("____________");
    
    addStepLabel("Third Step");
    firstNum3()
    secondNum3()
    thirdNum3()
    
    finalResult()
    ScrollReveal().reveal('.scroll', { delay: 700 , reset:true });
    ScrollReveal().reveal('.scroll1', { delay: 1000 , reset:true });
    ScrollReveal().reveal('.scroll2', { delay: 1200 , reset:true });
    ScrollReveal().reveal('.scroll3', { delay: 1400 , reset:true });
    sub.disabled = true
}
})

// // ______________________________________
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


