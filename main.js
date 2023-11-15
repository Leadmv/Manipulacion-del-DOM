//leyendo html desde javascript
//querySelector es para seleccionar etiquetas o lo que se quiere seleccionar
const h1 = document.querySelector('h1');
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pResult = document.getElementById('result');
//para escuchar evento podemos poner atributo en boton onclick
// en un input el evento es onchange

//en javascript se puede hacer:
function btnOnClick (event) {
  //  event.preventDefault();
    //console.log({event});
    let x = parseFloat(input1.value) + parseFloat(input2.value);
    pResult.innerText = "Resultado: " + x;
}

//addEventListener

btn.addEventListener('click', btnOnClick);