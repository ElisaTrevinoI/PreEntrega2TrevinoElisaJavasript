

/*Simulador de venta de estambres*/

let encuentraArrCarrito

//Funciones

let obtenerIndiceEstambres = (id, arr) => arr.findIndex(elemento => elemento.id === id)

let obtenerIndiceCarrito = (id, arr) => arr.findIndex(elemento => elemento.idEstambre === id)


let sacarDelCarrito = (productoEliminar, arrCarrito) => {


    encuentraArrCarrito = obtenerIndiceCarrito(productoEliminar, arrCarrito)

    if (encuentraArrCarrito >= 0) {

        arrCarrito.splice(encuentraArrCarrito, 1)
    } else {
        alert("No se encontró el Id ingresado")
    }


}



let mostrarCatalogo = () => {

    let mostrarEstambres = ""

    let cont = 1

    for (const estambre of arrEstambres) {

        let idNum = estambre.id
        let idText = idNum.toString()

        let pesoNum = estambre.peso
        let pesoText = pesoNum.toString()

        let inventarioNum = estambre.inventario
        let inventarioText = inventarioNum.toString()

        let precioNum = estambre.precio
        let precioText = precioNum.toString()

        mostrarEstambres = mostrarEstambres + idText + ".    Marca: " + estambre.marca + "    Nombre: " + estambre.nombre + "    Material: " + estambre.material + "\n Color: " + estambre.color + "    Peso: " + pesoText + "    Inventario: " + inventarioText + "    Precio: " + precioText + "\n"

    }

    let productoAgregar = Number(prompt("Selecciona el producto  que deseas agregar al carrito: \n" + mostrarEstambres))

    if (productoAgregar > 0) {

        let cantidadSeleccionada = Number(prompt("Indica la cantidad de producto a agregar al carrito"))

        if (cantidadSeleccionada > 0) {

            agregarAlCarrito(productoAgregar, cantidadSeleccionada, arrEstambres)

            console.log(arrCarrito)
        }
    }
}

let mostrarCarrito = () => {
    let encuentraArrEstambres
    let mostrarCarrito = ""

    let totalEstambre = 0

    for (const productosCarrito of arrCarrito) {

        encuentraArrEstambres = obtenerIndiceEstambres(productosCarrito.idEstambre, arrEstambres)

        //console.log(arrEstambres[encuentraArrEstambres].marca)

        /*let idNum = productosCarrito.id
        let idText = idNum.toString()*/

        let pesoNum = arrEstambres[encuentraArrEstambres].peso
        let pesoText = pesoNum.toString()

        let precioNum = arrEstambres[encuentraArrEstambres].precio
        let precioText = precioNum.toString()

        totalEstambre = totalEstambre + (arrEstambres[encuentraArrEstambres].precio * productosCarrito.cantidad)


        mostrarCarrito = mostrarCarrito + productosCarrito.idEstambre + ".    Marca: " + arrEstambres[encuentraArrEstambres].marca + "    Nombre: " + arrEstambres[encuentraArrEstambres].nombre + "    Material: " + arrEstambres[encuentraArrEstambres].material + "\n Color: " + arrEstambres[encuentraArrEstambres].color + "    Peso: " + pesoText + "    Precio: " + precioText + "    Cantidad: " + productosCarrito.cantidad + "\n"

    }

    let opcionCarrito = Number(prompt("Carrito: \n" + mostrarCarrito + " Total a pagar : " + totalEstambre + "\n \n Ingresa el número de la opción seleccionada: \n 1. Seguir comprando \n 2. Eliminar del carrito \n 3. Pagar \n 4. Salir"))

    let opcionEliminarCarrito

    switch (opcionCarrito) {
        case 1:

            //Seguir comprando

            mostrarCatalogo()


            break;

        case 2:

            //Eliminar del carrito
            console.log(arrCarrito.length)

            if (arrCarrito.length > 0) {

                opcionEliminarCarrito = Number(prompt(mostrarCarrito + " \nIndica el Id del producto a eliminar del carrito"))

                sacarDelCarrito(opcionEliminarCarrito, arrCarrito)

            } else {
                alert("No existen productos en el carrito")
            }

            break;

        case 3:

            //Pagar

            break;

        default:
            break;
    }


}

let agregarAlCarrito = (productoAgregar, cantidadSeleccionada, arrEstambres) => {

    let encuentraArrEstambres = obtenerIndiceEstambres(productoAgregar, arrEstambres)

    // console.log(encuentraArrEstambres)

    if (encuentraArrEstambres >= 0) {

        encuentraArrCarrito = obtenerIndiceCarrito(productoAgregar, arrCarrito)

        if (encuentraArrCarrito < 0) {

            obCarrito = new Producto(productoAgregar, cantidadSeleccionada)

            arrCarrito.push(obCarrito)

        } else {

            arrCarrito[encuentraArrCarrito].cantidad = arrCarrito[encuentraArrCarrito].cantidad + cantidadSeleccionada

        }

    }
}




//Catálogo

function Estambre(id, marca, nombre, material, color, peso, inventario, precio) {
    this.id = id
    this.marca = marca
    this.nombre = nombre
    this.material = material
    this.color = color
    this.peso = peso
    this.inventario = inventario
    this.precio = precio
}


let estambre1 = new Estambre(1, "Lion Brand", "Mandala", "Algodón", "Multicolor", 150, 50, 240.00)
let estambre2 = new Estambre(2, "Lion Brand", "Mandala", "Algodón", "Multicolor", 150, 30, 240.00)
let estambre3 = new Estambre(3, "Lion Brand", "Mandala", "Algodón", "Multicolor", 150, 35, 260.00)
let estambre4 = new Estambre(4, "Lion Brand", "Mandala", "Algodón", "Multicolor", 150, 28, 208.00)
let estambre5 = new Estambre(5, "Lion Brand", "Wool Ease", "Lana", "Azul", 2561, 55, 250.00)
let estambre6 = new Estambre(6, "Lion Brand", "Wool Ease", "Lana", "Multicolor", 140, 50, 250.00)
let estambre7 = new Estambre(7, "Drops", "Alaska", "Lana", "Café", 50, 33, 48.82)
let estambre8 = new Estambre(8, "Drops", "Big Merino", "Lana", "Verde", 50, 41, 85.19)
let estambre9 = new Estambre(9, "Drops", "Karisma", "Lana", "Azul", 50, 45, 56.73)
let estambre10 = new Estambre(10, "Drops", "Karisma", "Lana", "Azul", 50, 29, 56.73)


let arrEstambres = [estambre1, estambre2, estambre3, estambre4, estambre5, estambre6, estambre7, estambre8, estambre9, estambre10]


//Carrito

function Producto(idEstambre, cantidad) {
    this.idEstambre = idEstambre
    this.cantidad = cantidad
}

let arrCarrito = []

let obCarrito

let opcion


while (opcion != 3) {

    opcion = prompt("Ingresa el número de la opción seleccionada: \n 1. Mostrar el catálogo \n 2. Mostrar el carrito \n 3. Salir ")

    if (opcion == null) {

        break

    } else {

        opcion = Number(opcion)

        if ((opcion == 1) || (opcion == 2)) {

            switch (opcion) {
                case 1:
                    //Mostrar el catálogo


                    mostrarCatalogo()


                    break

                case 2:

                    //Mostrar el carrito
                    mostrarCarrito()

                    break

                default:

                    break
            }
        } else {

            if (opcion != 3) {
                alert("No se ingresó una opción válida")
            }
        }
    }
}


