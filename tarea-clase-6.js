
    /*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/




//guardo el boton cargar

const $botonCargar = document.querySelector("#cargar-integrantes")

$botonCargar.onclick = function() {

    const $numeroIntegrantes = Number(document.querySelector("#numero-integrantes").value)

    const listaIntegrante = document.querySelector("#agregar-integrantes")
    
    borrarIntegrantesAnteriores()

    for( i = 0; i < $numeroIntegrantes; ++i){

        //llamo a la funcion que se ejecuta
        
        listaIntegrante.appendChild(crearIntegrante())
        

    }

    document.querySelector("#boton-calcular").style.display = "block";



    return false

}



//describo la función

function crearIntegrante() {
    let integrante = document.createElement("li")
    integrante.className = "integrantes"
    
    let labelNombre = document.createElement("label")
    labelNombre = document.createTextNode("Nombre: ")
    let nombre = document.createElement("input")
    nombre.type = "text"
    nombre.className = ("nombresIntegrantes")
    
    let labelEdad = document.createElement("label")
    labelEdad = document.createTextNode("Edad: ")
    let edad = document.createElement("input")
    edad.className = "edades"
    edad.type = "number"

    integrante.appendChild(labelNombre)
    integrante.appendChild(nombre)
    integrante.appendChild(labelEdad)
    integrante.appendChild(edad)

    return integrante
}

document.querySelector("#resetear").onclick = resetear

function resetear() {
    borrarIntegrantesAnteriores()
    borrarBotones()
    borrarResultado()
}

function borrarResultado() {
    document.querySelector(".resultado").className = "oculto"
}

function borrarBotones() {
    document.querySelector("#calcular-edades").className = "oculto"
}


function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll(".integrantes")

    for(i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove()
    }
}





//operaciones




const divResultado = document.querySelector("#resultado")

const $botonCalcularEdades = document.querySelector("#boton-calcular")

$botonCalcularEdades.onclick = function() {

    const $edades = document.querySelectorAll(".edades")

    const edades = []

    for(i = 0; i < $edades.length; i++) {
        edades.push(Number($edades[i].value))
    }
    

    document.querySelector("#edad-mas-grande").innerText = calcularEdadMayor(edades)

    document.querySelector("#edad-mas-chica").innerText = calcularEdadMenor(edades)

    document.querySelector("#edad-promedio").innerText = calcularPromedioEdad(edades)

    return false

}



function calcularEdadMayor(edades) {
    let edadMayor = Math.max(...edades)
    
    return `El más viejito tiene ${edadMayor} años`
}



function calcularEdadMenor(edades) {
    let edadMenor = Math.min(...edades)

    return `El más jóven tiene ${edadMenor} años`
}

function calcularPromedioEdad(edades) {
    totalDeEdades = 0
    for(i = 0; i < edades.length; i++) {
        totalDeEdades += edades[i]
    }
    promedio = totalDeEdades/edades.length

    return `El promedio de edad es de ${promedio} años`
}





