const btnResta1 = document.getElementById("btn-resta-1");
const btnSuma1 = document.getElementById("btn-suma-1");
const btnResta2 = document.getElementById("btn-resta-2");
const btnSuma2 = document.getElementById("btn-suma-2");
const btnResta3 = document.getElementById("btn-resta-3");
const btnSuma3 = document.getElementById("btn-suma-3");
const btnResta4 = document.getElementById("btn-resta-4");
const btnSuma4 = document.getElementById("btn-suma-4");
const btnResta5 = document.getElementById("btn-resta-5");
const btnSuma5 = document.getElementById("btn-suma-5");
const btnResta6 = document.getElementById("btn-resta-6");
const btnSuma6 = document.getElementById("btn-suma-6");
const btnResta7 = document.getElementById("btn-resta-7");
const btnSuma7 = document.getElementById("btn-suma-7");
const btnResta8 = document.getElementById("btn-resta-8");
const btnSuma8 = document.getElementById("btn-suma-8");
const btnResta9 = document.getElementById("btn-resta-9");
const btnSuma9 = document.getElementById("btn-suma-9");
const cantidad1 = document.getElementById("cant-1");
const cantidad2 = document.getElementById("cant-2");
const totalDonacion = document.getElementById("total");

var restar = (cant) => {
    cant.value -= 1;
    if(cant.value<0){
        cant.value = 0;
    }
    total(cant.value);
}
var sumar = (cant) => {
    cant.value += Number(1);
    total(cant.value);
}
var total = (cant)=>{
    totalDonacion.textContent = cant.value
}

btnResta1.addEventListener('click', restar)
btnSuma1.addEventListener('click',sumar)
btnResta2.addEventListener('click', restar)
btnSuma2.addEventListener('click',sumar)
// btnResta3.addEventListener('click', restar)
// btnSuma3.addEventListener('click',sumar)
// btnResta4.addEventListener('click', restar)
// btnSuma4.addEventListener('click',sumar)
// btnResta5.addEventListener('click', restar)
// btnSuma5.addEventListener('click',sumar)
// btnResta6.addEventListener('click', restar)
// btnSuma6.addEventListener('click',sumar)
// btnResta7.addEventListener('click', restar)
// btnSuma7.addEventListener('click',sumar)
// btnResta8.addEventListener('click', restar)
// btnSuma8.addEventListener('click',sumar)
// btnResta19.addEventListener('click', restar)
// btnSuma19.addEventListener('click',sumar)

