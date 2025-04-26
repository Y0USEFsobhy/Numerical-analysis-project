const switchInput = document.getElementById("switch");

function getSelectedOption() {
    return switchInput.checked ? 2 : 1;
}
// ____________________________________________________________________________________
let fun = document.getElementById("fun");
let xInput = document.getElementById("Xstart");
const eps = document.getElementById("eps");
const btn = document.getElementById("btn");
let i = 0
let x = 0
let fx = 0
let oldx = 0
let error = Infinity
let oldError = Infinity
function simpleFixedPoint() {
    if (i == 0) {
        x = parseFloat(xInput.value);
    }

    fx = fun.value;
    fx = math.parse(fx);
    fx = fx.evaluate({ x: x });
    oldx = x
    x = fx
    oldError = error
    error = math.abs((x - oldx) / x) * 100

    function addRowToTable() {
        const tbody = document.getElementById("tableBody");

        const row = document.createElement("tr");

        const values = [
            i,
            oldx.toFixed(3),
            fx.toFixed(3),
            i > 0 ? oldError.toFixed(2) + "%" : " - ",
        ];



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

    i++
}
btn.addEventListener("click", () => {
    if (fun.value == "" || xInput.value == "" || eps.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all the fields",
        });
        return;
    }

    if (getSelectedOption() == "1") {
        if (oldError > eps.value) {
            simpleFixedPoint()
        } else {
            printFinalResult()
        }
    } else {
        if (i < eps.value) {
            simpleFixedPoint()
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
        const headers = ["i", "Xi", "F(Xi)", "Error"];

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
    btn.disabled = true;
    Swal.fire("Root found: " + oldx);
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `Root = ${oldx.toFixed(4)}`;
    resultDiv.style.cssText = "margin-block: 25px; font-size: 2em; color: white;";
    document.body.appendChild(resultDiv);
}

