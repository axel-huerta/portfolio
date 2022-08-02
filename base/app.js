let validationCalc = document.getElementById("vacationsCalc")
validationCalc.addEventListener("submit", calcExpenses)

function calcExpenses(e){

    e.preventDefault()

    let destiny = document.getElementById("destiny").value,
     budget = document.getElementById("budget").value,
     acomodations = document.getElementById("acomodations").value,
     transport = document.getElementById("transporte").value,
     food = document.getElementById("food").value;

    let expanses = parseInt(acomodations) + parseInt(transport) + parseInt(food);
    let balance = budget - expanses;

    UT(destiny, budget, balance);

}

function UT(destiny, budget, balance){
    let result = document.getElementById("result");
    let dataPrint = document.createElement("div");

    dataPrint.innerHTML = `
    <div class="conteiner-data">
        <div>
            <h6>${destiny}</h6>
        </div>
        <div>
            <h6>${budget}</h6>
        </div>
        <div>
            <h6>${balance}</h6>
        </div>
    </div>
    `
    result.appendChild(dataPrint)

    reset()
}

//reseteamos el formularios

function reset(){
    document.getElementById("vacationsCalc").reset()
}