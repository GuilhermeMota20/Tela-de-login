var btnprosseguir = document.querySelector ("#prosseguir");
var btnregistrar = document.querySelector ("#registrar");

var body = document.querySelector ("body");

btnprosseguir.addEventListener ("click", function () {
    body.className = "prosseguir-js";
});

btnregistrar.addEventListener ("click", function () {
    body.className = "resgistra-js"
});