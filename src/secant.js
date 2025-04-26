const switchInput = document.getElementById("switch");

function getSelectedOption() {
    return switchInput.checked ? 2 : 1;
}
// ____________________________________________________________________________________
// xi_1_value == x
// xi_value == y
// f_xi_1_value == fx 
// f_xi_value == fy 
const fun = document.getElementById('fun');
var xi_1 = document.getElementById('xi+1');
var xi = document.getElementById('xi');
var eps = document.getElementById('eps');
const sub = document.getElementById('sub');
let i = 0
let xi_1_value = 0
let xi_value = 0
let oldx = 0
let oldy = 0
let error = Infinity
let oldError = Infinity

function secant() {
    // console.log(i)
    if (i == 0) {
        xi_1_value = parseFloat(xi_1.value);
        xi_value = parseFloat(xi.value);
    }

    let func = math.parse(fun.value);
    let f_xi_1_value = func.evaluate({ x: xi_1_value });
    let f_xi_value = func.evaluate({ x: xi_value });

    oldx = xi_1_value
    xi_1_value = xi_value
    oldy = xi_value
    xi_value = xi_1_value - ((f_xi_value * (oldx - xi_value)) / (f_xi_1_value - f_xi_value));

    oldError = error
    error = Math.abs((xi_value - oldy) / xi_value) * 100;

    function addRowToTable() {
        const tbody = document.getElementById("tableBody");

        const row = document.createElement("tr");

        const values = [
            i,
            xi_1_value.toFixed(3),
            f_xi_1_value.toFixed(3),
            xi_value.toFixed(3),
            f_xi_value.toFixed(3),
        ];

        if (i > 0) {
            values.push(oldError.toFixed(2) + "%");
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


sub.addEventListener('click', (e) => {
    if (fun.value == "" || xi_1.value == "" || xi.value == "" || eps.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all the fields",
        });
        return;
    }

    if (getSelectedOption() == "1") {
        if (eps.value < oldError) {
            secant();
        } else {
            printFinalResult()
        }
    } else {
        if (eps.value > i) {
            secant();
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
        const headers = ["i", "Xi+1", "F(Xi+1)", "Xi", "F(Xi)", "Error"];

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
    Swal.fire("Root found: " + xi_value);
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `Root = ${xi_value.toFixed(4)}`;
    resultDiv.style.cssText = "margin-block: 25px; font-size: 2em; color: white;";
    document.body.appendChild(resultDiv);
}