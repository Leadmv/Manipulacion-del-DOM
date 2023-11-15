//Variables
var Nombre = "Santiago";
var Apellido = " Acevedo";
var DineroAhorrado = 12000000;
var Deudas = 1000000;
console.log(Nombre + Apellido);
console.log(DineroAhorrado - Deudas);

//Funciones

function YoSoy(name, lastname, nickname) {
    const completename = name + " " + lastname;
    console.log(`Mi nombre es ${completename}, pero prefiero que me digas ${nickname}.`);
}

YoSoy("Juan David", "Castro Gallego", "juandc");

//Condicionales

//replicar comportamiento de programa con condicionales if, else y else if
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tu y alguien mas puden tomar TODOS los cursos de platzi durante un año");
} else {
    console.log("Suscripcion inválida");
}

//Bonus replicar anterior comportamiento con arrays u objetos
const Suscripcion = "Basic";

var Plan = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de platzi durante un año",
    ExpertPlus: "Tu y alguien mas puden tomar TODOS los cursos de platzi durante un año"
};

console.log(Plan[Suscripcion]);

//Ciclos
var i = 0;
while (i < 5) { 
    console.log(`El valor de i es: ${i}`);
    i++;
}

var j = Number(10);
while (j >= 2) {
    console.log(`El valor de j es: ${j}`);
    j--;
}

//otro codigo
var result = 0;

while (result != 4) {
    result = Number(prompt('Digite el resultado de la suma 2+2: '));
    if (result != 4) {
        console.log('error, intentalo de nuevo')
    }
}
console.log('Felicidades, respondiste correctamente!!');

//ARRAY

function FirstElement(array) {
    return array[0];
}

console.log(FirstElement([4,1,2,6,7]));

function PrintArray(array) {
    for (var element of array) {
        console.log(element);
    }
}

PrintArray([4,1,2,6,7]);

var obj = {
    carro: "mazda",
    modelo: "CX-30",
    annio: 2020
};

function PrintObjeto (objeto ={}) {
    for (var key in objeto) {
        console.log(objeto[key]);
    }
}

//para convertir valores de un objerto a un array se usa la siguiente funcion

const arr = Object.values(obj);
//RECOMENDACION PARA CREAR VARIABLES USAR LET Y CONST
