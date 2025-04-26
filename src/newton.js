const switchInput = document.getElementById("switch");

function getSelectedOption() {
    return switchInput.checked ? 2 : 1;
}
// ____________________________________________________________________________________

const fun = document.getElementById('fun');
var xStart = document.getElementById('xStart');
var eps = document.getElementById('eps');
const sub = document.getElementById('sub');

let i = 0;
let prevX = 0;
let error = Infinity
// let oldError = Infinity
let x = 0;
function newtion() {
    let f = fun.value.trim();
    if (i == 0) {
        x = parseFloat(xStart.value);
    }
    let newXi = 0

    let func = math.parse(f);
    let fx = func.evaluate({ x: x });
    // console.log("f(xi) "+fx.toFixed(3));

    let gx = math.derivative(func, 'x');
    let fxx2 = gx.evaluate({ x: x });
    // console.log("f`(xi)  "+fxx2.toFixed(3));

    newXi = x - (fx / fxx2);
    // oldError = error;
    error = Math.abs((x - prevX) / x) * 100;

    prevX = x;
    x = newXi
    // xStart.value = x;

    console.log("____________________");
    console.log(newXi);
    console.log(x);
    console.log(prevX);

    function addRowToTable() {
        const tbody = document.getElementById("tableBody");

        const row = document.createElement("tr");

        const values = [
            i,
            prevX.toFixed(3),
            fx.toFixed(3),
            fxx2.toFixed(3),
        ];

        if (i > 0) {
            values.push(error.toFixed(2) + "%");
        } else {
            values.push(" - ");
        }

        values.forEach((value) => {
            const td = document.createElement("td");
            td.textContent = value;
            td.style.cssText = "color:white; border: 1px solid black; padding: 4px; width:35px; text-align: center;";
            row.appendChild(td);
        });

        tbody.appendChild(row);
    }

    function createDivs() {
        createTable();
        addRowToTable();
    }

    createDivs();
    i++;

}


sub.addEventListener('click', () => {
    if (fun.value == "" || xStart.value == "" || eps.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all the fields",
        });
        return;
    }
    let epsValue = parseFloat(eps.value);
    if (getSelectedOption() == "1") {
        if (error > epsValue) {
            newtion();
        } else {
            printFinalResult()
        }
    } else {
        if (i < epsValue) {
            newtion();
        } else {
            printFinalResult()
        }
    }

});

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
        const headers = ["i", "Xi", "F(Xi)", "F`(Xi)", "Error"];

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
function printFinalResult() {
    sub.disabled = true;
    Swal.fire("Root found: " + x);
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `Root = ${x.toFixed(4)}`;
    resultDiv.style.cssText = "margin-block: 25px; font-size: 2em; color: white;";
    document.body.appendChild(resultDiv);
}
