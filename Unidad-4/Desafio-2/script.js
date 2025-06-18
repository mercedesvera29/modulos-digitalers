function mostrarDatos(){
    //Guardo lo que escribio el usuario 
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contrasenia").value;

    //muestro los datos en pantalla
    alert("Tu usuario es: " + usuario + "\nTu contraseña es: " + contraseña);

}