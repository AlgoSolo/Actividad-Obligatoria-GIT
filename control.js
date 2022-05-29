var validarUsuario = function(e){
    if (formulario.usuario.value == 0) {
        e.preventDefault();
        alert("El campo Usuario no puede estar vacio");
    }
     else validarArroba(e);
}

var validarArroba = function (e) {
    var expReg = /@/g;
    if (expReg.test(formulario.usuario.value)) {
        validarClave(e);
    } else {
        e.preventDefault();
        alert("Falta el @ en el campo Usuario");
    }
}

var validarClave = function(e){
    if (formulario.clave.value == 0) {
        e.preventDefault();
        alert("El campo Clave no puede estar vacio");
    }
    else alert("Formulario completado correctamente");
}

formulario.addEventListener("submit", validarUsuario);

