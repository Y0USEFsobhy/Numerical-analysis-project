let a11 = document.getElementById("a11");
let a12 = (document.getElementById("a12"));
let a13 = (document.getElementById("a13"));
let  b1  = (document.getElementById("b1") );
let a21 = (document.getElementById("a21"));
let a22 = (document.getElementById("a22"));
let a23 = (document.getElementById("a23"));
let  b2  = (document.getElementById("b2") );
let a31 = (document.getElementById("a31"));
let a32 = (document.getElementById("a32"));
let a33 = (document.getElementById("a33"));
let  b3  = (document.getElementById("b3") );
let sub = document.getElementById("sub")

let detA  = 0 ;
let detA1 = 0 ;
let detA2 = 0 ;
let detA3 = 0 ;

function A(){
    const matrix=[
        [a11.value,a12.value,a13.value],
        [a21.value,a22.value,a23.value],
        [a31.value,a32.value,a33.value]
    ]
    // console.log(matrix)
    detA = 
    a11.value * (a22.value * a33.value - a23.value * a32.value) -
    a12.value * (a21.value * a33.value - a23.value * a31.value) +
    a13.value * (a21.value * a32.value - a22.value * a31.value);

    let ex = `det(A) = 
    ${a11.value} * (${a22.value} * ${a33.value} - ${a23.value} * ${a32.value}) -
    ${a12.value} * (${a21.value} * ${a33.value} - ${a23.value} * ${a31.value}) +
    ${a13.value} * (${a21.value} * ${a32.value} - ${a22.value} * ${a31.value}) = ${detA}`
    // console.log("det(A) = " + detA);
    document.body.appendChild(createMatrixDisplay("A  = ", matrix , ex));
}

function A1(){
    const matrix=[
        [b1.value,a12.value,a13.value],
        [b2.value,a22.value,a23.value],
        [b3.value,a32.value,a33.value]
    ]
    // console.log(matrix)
    detA1 = 
    b1.value * (a22.value * a33.value - a23.value * a32.value) -
    a12.value * (b2.value * a33.value - a23.value * b3.value) +
    a13.value * (b2.value * a32.value - a22.value * b3.value);

    let ex = `det(A1) = 
    ${b1.value} * (${a22.value} * ${a33.value} - ${a23.value} * ${a32.value}) -
    ${a12.value} * (${b2.value} * ${a33.value} - ${a23.value} * ${b3.value}) +
    ${a13.value} * (${b2.value} * ${a32.value} - ${a22.value} * ${b3.value}) = ${detA1}`
    // console.log("det(A1) = " + detA1);
    document.body.appendChild(createMatrixDisplay("A1 = ", matrix , ex));
    
}
function A2(){
    const matrix=[
        [a11.value,b1.value,a13.value],
        [a21.value,b2.value,a23.value],
        [a31.value,b3.value,a33.value]
    ]
    // console.log(matrix)
    detA2 = 
    a11.value * (b2.value * a33.value - a23.value * b3.value) -
    b1.value * (a21.value * a33.value - a23.value * a31.value) +
    a13.value * (a21.value * b3.value - b2.value * a31.value);

    let ex = `det(A2) = 
    ${a11.value} * (${b2.value} * ${a33.value} - ${a23.value} * ${b3.value}) -
    ${b1.value} * (${a21.value} * ${a33.value} - ${a23.value} * ${a31.value}) +
    ${a13.value} * (${a21.value} * ${b3.value} - ${b2.value} * ${a31.value}) = ${detA2}`
    // console.log("det(A2) = " + detA2);
    document.body.appendChild(createMatrixDisplay("A2 = ", matrix,ex));
}

function A3(){
    const matrix=[
        [a11.value,a12.value,b1.value],
        [a21.value,a22.value,b2.value],
        [a31.value,a32.value,b3.value]
    ]
    // console.log(matrix)
    detA3 = 
    a11.value * (a22.value * b3.value - b2.value * a32.value) -
    a12.value * (a21.value * b3.value - b2.value * a31.value) +
    b1.value * (a21.value * a32.value - a22.value * a31.value);

    let ex = `det(A3) = 
    ${a11.value} * (${a22.value} * ${b3.value} - ${b2.value} * ${a32.value}) -
    ${a12.value} * (${a21.value} * ${b3.value} - ${b2.value} * ${a31.value}) +
    ${b1.value} * (${a21.value} * ${a32.value} - ${a22.value} * ${a31.value}) = ${detA3}`

    // console.log("det(A3) = " + detA3);
    document.body.appendChild(createMatrixDisplay("A3 = ", matrix ,ex));
}


sub.addEventListener("click",(e)=>{
    if (a11.value==""||a12.value==""||a13.value==""||b1.value==""
        ||a21.value==""||a22.value==""||a23.value==""||b2.value==""
        ||a31.value==""||a32.value==""||a33.value==""||b3.value==""
    ){
    }else{
    A()
    A1()
    A2()
    A3()
    finalResult()
    ScrollReveal().reveal('.scroll', { delay: 700 , reset:true });
    ScrollReveal().reveal('.scroll1', { delay: 1000 , reset:true });
    ScrollReveal().reveal('.scroll2', { delay: 1200 , reset:true });
    ScrollReveal().reveal('.scroll3', { delay: 1400 , reset:true });
    sub.disabled = true
    }

}) 

function createMatrixDisplay(label, matrixData, step) {
    const container = document.createElement("div");
    container.className = "scroll"
    container.style.cssText = `
        display: flex;
        align-items: center;
        flex-wrap:wrap;
        justify-content: center;
        text-align: center;
        margin-block: 1rem;
        gap:15px;
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
        font-size:1.2rem;
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
    const steps = document.createElement("div");
    steps.textContent = step ;
    steps.style.cssText= "display:flex; align-items:center; padding:0.5rem; color:white; font-size:1.2rem;"

    container.appendChild(labelDiv);
    container.appendChild(matrixContainer);
    container.appendChild(steps);
    return container;
}
function finalResult(){ 
    const x1 =(detA1/detA);
    const x2 =(detA2/detA);
    const x3 =(detA3/detA);

    let divContainer = document.createElement("div")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    div1.className = "scroll1"
    div2.className = "scroll2"
    div3.className = "scroll3"
    let divs = [div1, div2, div3];
    divContainer.className="result"
    divContainer.style.cssText = 'display:flex; gap:25px; margin-block:10px 80px;flex-wrap: wrap;'
        divs.forEach(div => {
            div.style.cssText = 'background-color:black; color:white; padding:1rem; border-radius:8px; flex:1;'
        });
    div1.textContent = `X1 = det(A1)/det(A) =  ${x1}`
    div2.textContent = `X2 = det(A2)/det(A) = ${x2}`
    div3.textContent = `X3 = det(A3)/det(A) =${x3}`
    divContainer.appendChild(div1)
    divContainer.appendChild(div2)
    divContainer.appendChild(div3)
    document.body.appendChild(divContainer)
}

