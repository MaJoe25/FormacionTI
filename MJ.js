const boton = document.getElementById('botoncito');
const input  = document.getElementById('cuadrito');
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);
boton.setAttribute('value','Cambio texto');
input.setAttribute('value','Que dormidos que estan');


 const body = document.body;
    const nombre = document.createElement('h1');
    const text = document.createTextNode(username);
    console.log("ACA SE CONTINUA 10");
    //console.log(usuario);
   
    nombre.appendChild(text);
     body.append(nombre);
   