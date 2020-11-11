//guardo el boton cargar

const $botonCargar = document.querySelector("#cargar-integrantes")

$botonCargar.onclick = function() {

    const $numeroIntegrantes = Number(document.querySelector("#numero-integrantes").value)

    const listaIntegrante = document.querySelector("#agregar-integrantes")


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
    edad.className = "edadesIntegrantes"
    edad.type = "number"

    integrante.appendChild(labelNombre)
    integrante.appendChild(nombre)
    integrante.appendChild(labelEdad)
    integrante.appendChild(edad)

    return integrante
}

const divResultado = document.querySelector("#resultado")

const $botonCalcularEdades = document.querySelector("#boton-calcular")

$botonCalcularEdades.onclick = function() {

    const $edades = document.querySelectorAll(".edadesIntegrantes")
    
    const $nombres = document.querySelectorAll(".nombresIntegrantes")

    document.querySelector("#edad-mas-grande").innerText = calcularEdadMayor($edades)

    return false

}

function calcularEdadMayor($edades) {

    //no funciona porque el ... es para los arrays, corregir

   let $edadMasGrande = Math.max(...$edades)

   return `El de mayor edad tiene ${$edadMasGrande} años`

}

/*
    //cargo en una constante las edades que se cargan

    const $arrayInput = document.querySelectorAll(".edadesIntegrantes").value

    //creo el array vacío donde voy a cargar las edades
    let $arrayEdades = []

    for(i = 0; i < $arrayInput.length; i++) {
        $arrayEdades.push(Number($arrayInput[i].innerText))
    }

    let $edadMasGrande = Math.max(...$arrayEdades)

    resultado1 = document.querySelector("edad-mas-grande")

    resultado1.innerText = $edadMasGrande

    let $edadMasChica = Math.min(...$arrayEdades)

    resultado2 = document.querySelector("#edad-mas-chica")

    resultado2.innerText = $edadMasChica

    return false
    
}*/
