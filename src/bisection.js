const switchInput = document.getElementById("switch");

function getSelectedOption() {
    return switchInput.checked ? 2 : 1;
}
// __________________________________________________________
// output1 == fxlValue
// output2 == fxuValue
// output3 == fxrValue

const fun = document.getElementById('fun');
const xl = document.getElementById('xl');
const xu = document.getElementById('xu');
const eps = document.getElementById('eps');
const sub = document.getElementById('sub');

let iteration = 0;
let epsValue = null;
let xrOldValue = null;
let currentXuValue = null;
let currentFxuValue = null;
let currentXlValue = null;
let currentFxlValue = null;
let currentXrValue = null;
let currentFxrValue = null;
let currentError = Infinity;
let error = Infinity

// function test(x) {
//     let expression = fun.value.trim();
//     let func = new Function('x', `return ${expression};`);
//     let result = func(x);
//     return result;
// }
function test(x) {
    let expression = fun.value.trim();
    expression = math.parse(expression);
    return expression.evaluate({ x: x });
}
function process() {

    epsValue = Number(eps.value.trim());

    let xlValue = Number(xl.value);
    let xuValue = Number(xu.value);
    let xrValue = (xlValue + xuValue) / 2;

    // console.log("xl:" + xlValue);
    let fxlValue = test(xlValue);
    // console.log("f(xl): " + fxlValue);

    // console.log("xu:" + xuValue);
    let fxuValue = test(xuValue);
    // console.log("f(xu): " + fxuValue);

    // let xrValue = xuValue-(fxuValue*(xlValue-xuValue))/(fxlValue-fxuValue);
    if (fxlValue * fxuValue > 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No root in the given interval or invalid function.😕",
        });
        return;
    }

    let fxrValue = test(xrValue);
    // console.log("xr:" + xrValue);
    // console.log("f(xr): " + fxrValue);

    if (xrOldValue !== null) {
        error = Math.abs((xrValue - xrOldValue) / xrValue) * 100;
    }
    // console.log("Error: " + error + "%");

    currentXlValue = xlValue;
    currentXuValue = xuValue;
    if (fxlValue * fxrValue < 0) {
        xuValue = xrValue;
    } else {
        xlValue = xrValue;
    }

    xl.value = xlValue;
    xu.value = xuValue;
    xrOldValue = xrValue;
    iteration++;
    // console.log("Iteration: " + iteration);

    currentFxuValue = fxuValue;
    currentFxlValue = fxlValue;
    currentXrValue = xrValue;
    currentFxrValue = fxrValue;
    currentError = error;
    function createTable() {
        let tableContainer = document.getElementById("tableContainer");

        if (!tableContainer) {
            tableContainer = document.createElement("div");
            tableContainer.id = "tableContainer";
            tableContainer.style.cssText = "width: 100%; overflow-x: auto;";
            const mediaQuery = window.matchMedia("(min-width: 1024px)");
            function handleMediaQueryChange(e) {
                if (e.matches) {
                tableContainer.style.paddingInline = "9rem";
                } else {
                tableContainer.style.paddingInline = "0";
                }
            }
            handleMediaQueryChange(mediaQuery);
            mediaQuery.addEventListener("change", handleMediaQueryChange);
            document.body.appendChild(tableContainer);
        }

        let table = document.getElementById("resultTable");

        if (!table) {
            table = document.createElement("table");
            table.id = "resultTable";
            table.style.cssText = "border-collapse: collapse; width: 100%; margin-top: 20px;";

            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");
            const headers = ["i", "xl", "F(xl)", "xu", "F(xu)", "xr", "F(xr)", "Error"];

            headers.forEach((header, index) => {
                const th = document.createElement("th");
                th.textContent = header;
                th.style.cssText = "border-right: 1px solid black; padding: 8px; background-color: #f2f2f2;";

                if (index === 0) {
                    th.style.borderTopLeftRadius = "8px";
                }
                if (index === headers.length - 1) {
                    th.style.borderTopRightRadius = "8px";
                    th.style.borderRight = "none";
                }

                headerRow.appendChild(th);
            });

            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            tbody.id = "tableBody";
            table.appendChild(tbody);

            tableContainer.appendChild(table);
        }
    }


    function addRowToTable() {
        const tbody = document.getElementById("tableBody");

        const row = document.createElement("tr");

        const values = [
            iteration,
            currentXlValue.toFixed(3),
            currentFxlValue.toFixed(3),
            currentXuValue.toFixed(3),
            currentFxuValue.toFixed(3),
            currentXrValue.toFixed(3),
            currentFxrValue.toFixed(3),
        ];

        if (iteration > 1) {
            values.push(currentError.toFixed(2) + "%");
        } else {
            values.push(" - ");
        }

        values.forEach((value) => {
            const td = document.createElement("td");
            td.textContent = value;
            td.style.cssText = "color:white; border: 1px solid black; padding: 4px; width:30px; text-align: center;";
            row.appendChild(td);
        });

        tbody.appendChild(row);
    }

    function createDivs() {
        createTable();
        addRowToTable();
    }
    createDivs();

}

sub.addEventListener('click', function () {
    if (fun.value == "" || xl.value == "" || xu.value == "" || eps.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all the fields",
        });
        return;
    }
    if (getSelectedOption() == "1") {
        if (eps.value < currentError) {
            process()
        } else {
            printFinalResult()
        }
    } else {
        if (eps.value > iteration) {
            process()
        } else {
            printFinalResult()
        }
    }
});
function printFinalResult() {
    sub.disabled = true;
    Swal.fire("Root found: " + currentXrValue);
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `Root = ${currentXrValue}`;
    resultDiv.style.cssText = "margin-block: 25px; font-size: 2em; color: white;";
    document.body.appendChild(resultDiv);
}
// ____________________________________________________________________________________________
// function createDivs(){
//     let parent = document.createElement("div");
//     parent.style.cssText = "display:flex; gap: 10px; margin-top: 10px;";
//     let div0 = document.createElement("div");
//     let div1 = document.createElement("div");
//     let div2 = document.createElement("div");
//     let div3 = document.createElement("div");
//     let div4 = document.createElement("div");
//     let div5 = document.createElement("div");
//     let div6 = document.createElement("div");
//     let div7 = document.createElement("div");
//     let div8 = document.createElement("div");
//     parent.appendChild(div0)
//     parent.appendChild(div1)
//     parent.appendChild(div2)
//     parent.appendChild(div3)
//     parent.appendChild(div4)
//     parent.appendChild(div5)
//     parent.appendChild(div6)
//     parent.appendChild(div7)
//     document.body.appendChild(parent);
//     document.body.appendChild(div8);
//     div0.textContent = `i = ${iteration}`;
//     div1.textContent = `xl = ${currentXlValue}`;
//     div2.textContent = `f(xl) = ${currentFxlValue}`;
//     div3.textContent = `xu = ${currentXuValue}`;
//     div4.textContent = `f(xu) = ${currentFxuValue}`;
//     div5.textContent = `xr = ${currentXrValue}`;
//     div6.textContent = `f(xr) = ${currentFxrValue}`;
//     div7.textContent = `error = ${currentError}`;

//     if (error < epsValue) {
//         sub.disabled = true;
//         console.log("Button disabled because error > epsValue");
//         console.log("Root found: " + xrValue );
//         div8.textContent = `Root = ${xrValue}`;
//     }
// }
// ____________________________________________________________________________________________




























// deepseek
// const fun = document.getElementById('fun');
// const xl = document.getElementById('xl');
// const xu = document.getElementById('xu');
// const sub = document.getElementById('sub');

// function process() {
//     function test(x) {
//         let expression = fun.value.trim();
//         try {
//             let func = new Function('x', `return ${expression};`);
//             return func(x);
//         } catch (e) {
//             console.error("Invalid function:", e);
//             return NaN;
//         }
//     }

//     let xlValue = Number(xl.value);
//     let xuValue = Number(xu.value);
//     let tolerance = 0.0001; // Tolerance for stopping condition
//     let maxIterations = 100; // Maximum number of iterations
//     let xrValue, xrOldValue, error;
//     let fxlValue = test(xlValue);
//     let fxuValue = test(xuValue);

//     // Check if the initial interval is valid
//     if (fxlValue * fxuValue >= 0) {
//         console.log("No root in the given interval or invalid function.");
//         return;
//     }

//     console.log("Starting Bisection Method...");
//     console.log(`Initial interval: [${xlValue}, ${xuValue}]`);

//     for (let i = 0; i < maxIterations; i++) {
//         xrOldValue = xrValue || 0; // Store the previous xrValue
//         xrValue = (xlValue + xuValue) / 2;
//         let fxrValue = test(xrValue);

//         // Calculate approximate error
//         error = Math.abs((xrValue - xrOldValue) / xrValue) * 100;

//         // Log intermediate results
//         console.log(`Iteration ${i + 1}:`);
//         console.log(`xl = ${xlValue}, xu = ${xuValue}, xr = ${xrValue}`);
//         console.log(`f(xr) = ${fxrValue}, Error = ${error}%`);

//         // Check stopping condition
//         if (Math.abs(fxrValue) < tolerance || error < tolerance) {
//             console.log(`Root found: ${xrValue} (Error: ${error}%)`);
//             return;
//         }

//         // Update interval
//         if (fxlValue * fxrValue < 0) {
//             xuValue = xrValue;
//             fxuValue = fxrValue;
//         } else {
//             xlValue = xrValue;
//             fxlValue = fxrValue;
//         }
//     }

//     console.log(`Maximum iterations reached. Approximate root: ${xrValue} (Error: ${error}%)`);
// }

// sub.addEventListener('click', process);




