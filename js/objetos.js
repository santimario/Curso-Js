//  //OBEJETO
//   const personaje1 = {
//       nombre:"Homero",
//       edad: 39,
//       calle: "Av siempreviva 742"      
//      }



// //mostrar propiedad de OBJETO
//     console.log(personaje1.nombre);
//     console.log(personaje1["calle"]);
//     console.log(personaje1.edad)

// //asignar nuevos valores a las propiedades
// personaje1.edad= 40;
// alert(personaje1.edad)

//funcion Constructor
 function Personaje(nombre, edad, calle) {
     this.nombre = nombre;
     this.edad = edad;
     this.calle = calle;
     this.hablar = function () {
         console.log("Hola yo soy " + this.nombre);
     }
 }

 const personaje1 = new Personaje("bart", "12", "Av. siempreviva 742")
 console.log(personaje1.hablar())
 if (!("colorDePelo" in personaje1)) {
     console.log("No existe este atributo");
 } else {
     console.log("Este atributo si existe");
 }

// // //FOR IN
 for (const propiedades in personaje1) {
     console.log(propiedades + " : " + personaje1[propiedades]);
 }


// class Producto {
    
//     constructor(nombre, precio, categoria){
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.categoria = categoria;
//         this.vendido = false;
        
//     }

//     sumarIVA(){
//         this.precio = this.precio * 1.21;
//     }

//     vender(){
//         this.vendido = true;
//     }

// }

// let productoIngresado = prompt("Ingrese su producto"); 
// let precioIngresado = prompt("Ingrese su precio");
// let categoriaIngresada = prompt("Ingrese la categoria de su producto");

// const producto1 = new Producto(productoIngresado, precioIngresado, categoriaIngresada);
// console.log(producto1);

// producto1.sumarIVA();
// producto1.vender();
// console.log(producto1);
