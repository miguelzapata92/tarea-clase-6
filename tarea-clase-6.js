const $botonCargar = document.querySelector("#cargar-integrantes")

$botonCargar.onclick = function() {

    const $numeroIntegrantes = Number(document.querySelector("#numero-integrantes").value)

    const listaIntegrante = document.querySelector("#agregar-integrantes")


    for( i = 0; i < $numeroIntegrantes; ++i){
        
        listaIntegrante.appendChild(crearIntegrante())
        

    }

    


    return false

}

function crearIntegrante() {
    let integrante = document.createElement("li")
    integrante.className = "integrantes"
    let labelNombre = document.createElement("label")
    labelNombre = document.createTextNode("Nombre: ")
    let nombre = document.createElement("input")
    nombre.type = "text";
    let labelEdad = document.createElement("label")
    labelEdad = document.createTextNode("Edad: ")
    let edad = document.createElement("input")
    edad.className = "label-edades"
    edad.type = "number"

    integrante.appendChild(labelNombre)
    integrante.appendChild(nombre)
    integrante.appendChild(labelEdad)
    integrante.appendChild(edad)

    return integrante
}