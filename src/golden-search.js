const switchInput = document.getElementById("switch");

function getSelectedOption() {
    return switchInput.checked ? 2 : 1;
}
// __________________________________________________________

let fun = document.getElementById("fun");
let xuInput = document.getElementById("xu");
let xlInput  = document.getElementById("xl");
const btn = document.getElementById("btn");
const Iteration = document.getElementById("Iteration");
const r = 0.618
let xu = 0; 
let xl = 0; 
let i = 1;

function test(x) {
    let expression = fun.value.trim();
    expression = math.parse(expression);
    return expression.evaluate({ x: x });
}

function golden(){
    if (i == 1){
        xu = xuInput.value;
        xl = xlInput.value;
    }
    let d = r*(xu - xl)
    let x1 = xl + d;
    let x2 = xu - d

    console.log("Xl = "+xl)
    console.log("F(Xl) = "+test(xl))
    let f_xl = test(xl)
    
    console.log("X1 = "+x1)
    console.log("F(X1) = "+test(x1))
    let f_x1 = test(x1)
    
    console.log("X2 = "+x2)
    console.log("F(X2) = "+test(x2))
    let f_x2 = test(x2)

    console.log("Xu = "+xu)
    console.log("F(Xu) = "+test(xu))
    let f_xu = test(xu)
    
    console.log("d = "+d)
    
    console.log("--------------------------------------------------")
    
    function addRowToTable() {
        const tbody = document.getElementById("tableBody");
        
        const row = document.createElement("tr");

        const values = [
            i,
            Number(xl).toFixed(3),  
            Number(f_xl).toFixed(3),
            Number(x1).toFixed(3),
            Number(f_x1).toFixed(3),
            Number(x2).toFixed(3),
            Number(f_x2).toFixed(3),
            Number(xu).toFixed(3),
            Number(f_xu).toFixed(3),
            Number(d).toFixed(3)
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
    if ( getSelectedOption() == 1){
        if (test(x1) < test(x2)){
            xu = x1
            xl = xl
            x1 = x2
        }else if (test(x1) > test(x2)){
            xl = x2;
            xu = xu
            x2 = x1
        }
    }else if (getSelectedOption() == 2){
        if (test(x1) < test(x2)){
            xl = x2;
            xu = xu
            x2 = x1
        }else if (test(x1) > test(x2)){
            xu = x1
            xl = xl
            x1 = x2
        }
    }
    i++
    
}

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
        const headers = ["i", "Xl", "F(Xl)", "X1", "F(X1)", "X2", "F(X2)", "Xu", "F(Xu)", "D"];

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

btn.addEventListener("click" ,()=>{
    if ( i <= Iteration.value){
        golden();
    }else{

    }
})
