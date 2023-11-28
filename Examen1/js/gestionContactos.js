// Variable Globa
let contactos = [];


// FUNCION CONSTRUCTORA
function Contacto(nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;

    this.nombreCompleto = function(){
        let nombreCompleto = nombre + " " + apellidos;
        return nombreCompleto;
    }
}

// FUNCIONES
function listarContactos(){
    return contactos;
}

function anyadirContacto(contacto){
    contactos.push(contacto);
}


// probar
/*
let contacto1 = new Contacto("daniela", "amoasii marin");
let nombre = console.log(contacto1.nomreCompleto());
*/

// EXPORT
export{Contacto,
    listarContactos,
    anyadirContacto
}