// const arrayVacio = []; //ejemplo: carrito de compra en e-commerce
// const carrito = ["pizza", "fainá"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const mix = ["Hola", 12, true, 3.14, [1,2,3]]; //array dentro de un array.


const familiaSimpson = ["Abe Simpson", "Homero Simpson", "Marge Simpson", "Bart Simpson", "Lisa", "Maggie", "Huesos", "Bola de Nieve"];
// console.log(familiaSimpson[0]);
// console.log(familiaSimpson[1]);

// console.log(familiaSimpson.length);
//8 posiciones, se cuenta el 0, 0-1-2-3-4-5-6-7

// for (let i = 0; i < familiaSimpson.length; i++) {
//     console.log(familiaSimpson[i])    
// } recorre todo el array y lo imprime con el .log

// familiaSimpson[7] = "coltrane";
// console.log(familiaSimpson[7]); reasigno valor.

// familiaSimpson[15]= "Apu"; hardcodeo de valor al array

// for (let i = 0; i < familiaSimpson.length; i++) {
//     console.log(familiaSimpson[i]);    
// }

// familiaSimpson.push("Procer", "Hugo"); agrega el elemento al final del array
// console.log(familiaSimpson);

// let nuevoPersonaje= prompt("Ingrese un personaje");
// familiaSimpson.push(nuevoPersonaje);
// console.log(familiaSimpson); peticion al usuario de elemento a agregar

// familiaSimpson.unshift("Paty", "Troy McClure");
// console.log(familiaSimpson); elemento al principio del array (metodo destructivo)


//ELIMINAR ELEMENTOS DEL ARRAY
//elimina la ultima posicion del array
// familiaSimpson.pop();
// console.log(familiaSimpson);

//elimina la primer posicion del array
// familiaSimpson.shift();
// console.log(familiaSimpson);

// //desde donde voy a borrar y cuantos (,) elemenos quiero eliminar(metodo destructivo)
// console.log(familiaSimpson);
// familiaSimpson.splice(3,3); 
// console.log(familiaSimpson);

//Metodo no destructivo
// const aCadena = familiaSimpson.toString();
// console.log(aCadena);

//separa el array con el valor que le ingrese (\n es un salto en linea)
// const imprimible = familiaSimpson.join("\n");
// console.log(imprimible); 

// operar con elementos del array 
// let resultado = numeros[6] * numeros[2];
// console.log(resultado);

//union (concatenar) de dos arrays
const perros = ["lola", "kitty", "Marly", "felipa", "Fiu", "Michi", "carlotta", "teo"];
// const gatos = ["Fiu", "Michi", "carlotta", "teo"];

// const mascotas = perros.concat(gatos)
// console.log(mascotas);

//Copia desde donde y hasta donde copiar (la ultima posicion no se incluye)
// const otrosPerros = perros.slice(2,5)
// console.log(otrosPerros);


//Metodo para mostrar la posicion del elemento .indexOf().
//cuando no lo encuentra arroja -1 (los arrays no tienen posiciones negativas, osea NO ESTA)
// console.log("El index del elemento -kitty- es "+perros.indexOf("hola"));

// //Metodo devuelve true o false
// console.log(familiaSimpson.includes("Homero Simpson"));
// console.log(familiaSimpson.includes("Apu"));

//reverse (metodo destructivo) da vuelta el array
// const copiaFamilia = familiaSimpson.slice(0);//importante ahcer una copia.
// copiaFamilia.reverse();
// console.log(copiaFamilia);

const zapatillasNike = [{
    id: 1,
    titulo: "Nike SB",
    telle: 41
}, {
    id: 2,
    titulo: "Nike Zoom",
    talle: 42
},{
    id: 3,
    titulo: "Nike Alpha",
    talle: 43
},{
    id: 4,
    titulo: "Nike Pegasus",
    talle: 44
}]

zapatillasNike.push({
    id: 5,
    titulo: "Nike Flyknight",
    talle: 45
})
console.log(zapatillasNike);

