class Calzado {

    constructor(marca, modelo, talle, precio, id) {


        this.marca = marca;
        this.modelo = modelo;
        this.talle = parseInt(talle);
        this.precio = parseFloat(precio);
        this.id = id;

    }

    asignarId(array) {
        this.id = array.length;
    }

}

const calzados = [
    new Calzado("Nike", "Zoom", 41, 20, 1),
    new Calzado("Nike", "Alpha", 42, 30, 2),
    new Calzado("Nike", "Pegasus", 43, 10, 3)
]

let continuar = true;

while (continuar) {
    let ingreso = prompt("ingrese los datos del calzado: marca, modelo, talle y precio. Separalos con /.  Ingrese X para finalizar.")

    if (ingreso.toUpperCase() == "X") {
        continuar = false;
        break;
    }

    //ARRAY CON DATOS SEPARADOS POR "/"
    const datos = ingreso.split("/");
    console.log(datos);

    const calzado = new Calzado(datos[0], datos[1], datos[2], datos[3]);
    calzados.push(calzado);
    calzado.asignarId(calzados);
}



    let opcion = prompt("Elegi una opcion: \n1 - Modelo (A-Z) \n2 - Modelo (Z-A) \n3 - Precio (Menor a Mayor) \n4 - Talle (Mayor - Menor) \n5 - Salir");

    function ordenar(opcion, array) {
        let arrayOrdenado = array.slice(0);

        switch (opcion) {
            case "1":
                
                return arrayOrdenado.sort((a, b) => a.modelo.localeCompare(b.modelo));
                

            case "2":
                
                return arrayOrdenado.sort((a, b) => b.modelo.localeCompare(a.modelo));

            case "3":
                
                return arrayOrdenado.sort((a, b) => a.precio - b.precio);

            case "4":
                
                return arrayOrdenado.sort((a, b) => b.talle - a.talle);

            case "5":
                
                break;

            default:
                
                alert("La opcion es incorrecta, porfavor elija una opcion entre 1 a 4")
                return arrayOrdenado;
        }
    }


function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Marca: ' + elemento.marca + '\nModelo: ' + elemento.modelo + '\nTalle: ' + elemento.talle + '\nPrecio: ' + elemento.precio
            + '\n\n'
    });

    return info;

}

alert(crearStringResultado(ordenar(opcion, calzados)));
