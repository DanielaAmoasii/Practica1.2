import * as gesContacto from "./gestionContactos.js";

function repintar(){
    let contenedor = document.getElementById("contactos");
    contenedor.innerHTML = ""; // evitar sobreescribir datos
    let contactos = gesContacto.listarContactos(); // obtener la lista con los contactos

    for(let i = 0; i < contactos.length; i++){

        // Crear el elemento div
        let divNombreCompleto = document.createElement('div');

        //Establecer atributos al elemento
        divNombreCompleto.className = 'contacto'
        
        //Obtener el nombre completo
        let nombre = contactos[i].nombreCompleto();

        //Añadir texto al elemento div
        divNombreCompleto.innerText = nombre;
        
        contenedor.append(divNombreCompleto);
    }

}

function anyadirContactoWeb(event) {
    
    event.preventDefault();
    let formulario = document.getElementById("crearcontacto");
    let nombre = formulario.nombre.value;
    let apellidos = formulario.apellidos.value;
    let contacto = new gesContacto.Contacto(nombre, apellidos);
    gesContacto.anyadirContacto(contacto);
    repintar();
    
}
let form = document.getElementById("crearcontacto");
form.addEventListener("submit", anyadirContactoWeb);

































































