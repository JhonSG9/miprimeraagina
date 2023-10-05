//alert("Hola este es mi Javascript");

//let nombre = "JhoSanz";

//console.log(nombre);

let contenidoTitulo = "Acerca de mi";

let titulo = document.querySelector(".h2 .titule");
titulo.innerHTML= contenidoTitulo ;

let textoTitulo = titulo.innertext;
console.log(textoTitulo);

if(textoTitulo == "acerca de mi"){
    titulo.innerHTML = "otro"
}
    
    else{
        console.log( "no se cumple")
    }

//Funciones

let Jhonatan = "Jhon"

let viboral = "Medellin"

let gym = "hiking"

let parrafo = document.querySelector(".fuente-oscura")
function cambiarTexto( Jhonatan, viboaral, hiking){
   
   let contenido = `hola esta mi página web, mi nombre es ${Jhonatan} naci en 
    el carmen de ${viboral}, soy ingeniero mecanico de la universidad nacional pero querio
    aprender a programacion, tambien me gusta hacer ejercicio en el ${gym}, ver series,
    tambien suelo cocinar y ir de vacaciones a lugare frios porque el clima calido me 
    pone de mal humor.`
}

return contenido;

parrafo.innertext = cambiarTexto(Jhonatan,viboral, gym);

