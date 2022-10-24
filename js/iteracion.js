let defaultEmail = "123";
let defaultPass = "123";


function ingresar() {
    let login = false;

    for (let i = 3; i > 0; i--) {
        let typeEmail = prompt("ingrese su correo electronico");
        let typePass = prompt("ingrese su contraseña");

        if (typeEmail === defaultEmail && typePass === defaultPass) {
            alert("Ingreso exitoso, Bienvenido/a");
            login = true;
            break;

        } else {
            alert("Contraseña o email incorrectos, porfavor reingrese sus datos");
        }
    }

    return login;
}

function menu(opcion){

    let mensajes = 3;    

    while (opcion!=4) {   
        switch (opcion) {
            case "1": 
            alert("No tiene ningun mensaje nuevo")
            break;

            case "2":
                prompt("Escriba su mensaje aqui para enviar")
                alert("Mensaje enviado");
                break;
                

            case "3":
                let papelera = prompt("Tiene " + mensajes + " mensajes en su papelera, desea eliminarlos definitivamente?")
                if (papelera === "si" || papelera === "SI") {
                    alert("Papelera vacia")
                    mensajes -= mensajes;
                    break;

                } else if (papelera === "no" || papelera === "NO") {
                    alert("Usted tiene " + mensajes + " mensajes en su papelera");
                    break;
                } else {
                    alert("Ingrese si o no, porfavor")
                }

                break;

            default:
                alert("No es una opcion valida")
                break;
        }

        opcion = prompt("Elija una opcion: \n1-Bandeja de entrada  \n2 -Enviar mensaje \n3-Papelera \n4-Salir");
    }
    
    return opcion;
}


if (ingresar()) {

    let opcion = prompt("Elija una opcion: \n1-Bandeja de entrada  \n2 -Enviar mensaje \n3-Papelera \n4-Salir");
    menu(opcion)

}else{
    alert("Intentos superados, pongase en contacto con nuestra mesa de ayuda");
}

alert("Hasta luego");