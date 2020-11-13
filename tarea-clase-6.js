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
    edad.className = "edades"
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
    
    return `el más viejito tiene ${edadMayor} años`
}



function calcularEdadMenor(edades) {
    let edadMenor = Math.min(...edades)

    return `el más jóven tiene ${edadMenor} años`
}

function calcularPromedioEdad(edades) {
    totalDeEdades = 0
    for(i = 0; i < edades.length; i++) {
        totalDeEdades += edades[i]
    }
    promedio = totalDeEdades/edades.length

    return `El promedio de edad es de ${promedio} años`
}




/*
let mayorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayorNumero) {
    mayorNumero = numeros[i];
  }
}

return mayorNumero;
}
*/
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
