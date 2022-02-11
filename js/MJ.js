const boton = document.getElementById('botoncito');
const input  = document.getElementById('cuadrito');
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);
boton.setAttribute('value','Cambio texto');
input.setAttribute('value','Que dormidos que estan');


function desabilita(){
const contenedor = document.getElementById('h');
const input = document.getElementById('cuadrito');
var jpg = [];
console.log(input)

if(input.disabled){
	 input.disabled = false
	 let nuevoInput = document.getElementById("input");
	 contenedor.appendChild(nuevoInput)

}else{
	input.disabled = true;
}
}

