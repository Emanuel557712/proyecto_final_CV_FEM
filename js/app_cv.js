//-------MENU LATERAL-------//
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    //Si esta oculto//
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//-------OCULTANDO MENU UNA VEZ QUE SE SELECIONA UNA OPCION-------//
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//-------CREANDO LAS BARRAS PARA CADA ID-------//
function crearBarra(id_barra){
    for(i=0; i<=16; i++){
        let div = document.createElement("div");
        div.className = "e"
        id_barra.appendChild(div)
    }
}
//-------SELECCIONANDO TODAS LAS BARRAS CREADAS PARA PODER EDITARLAS-------//
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let java = document.getElementById("java");
crearBarra(java);
let python = document.getElementById("python");
crearBarra(python);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);
//-------INDICANDO CUANTAS SECCIONES DE LAS BARRAS SE PINTARAN-------//
//-------CADA POSICION REPRESENTA UN ELEMENTO-------//
//-------ES -1 PORQUE NO TIENE NINGUNA SECCION PINTADA AL INICIO-------//
let contadores = [-1,-1,-1,-1,-1,-1];
//-------VARIABLE PARA CONFIRMAR SI EJECUTO LA ANIMACION-------//
let entro = false;

//-------FUNCION QUE APLICARA LA ANIMACION A LAS BARRAS-------//
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 12, 0, intervalHtml);
        },100);
        //-------pintarBarra(html, "cantidad pintada", "número de orden o tiempo en milisegundos", intervalHtml)-------//
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 10, 1, intervalJavascript);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 9, 2, intervalJava);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 9, 3, intervalPython);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 14, 4, intervalPhotoshop);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 8, 5, intervalIlustrator);
        },100);
    }
}
//-------PINTANDO LA CANTIDAD DE UNA BARRA EN ESPECIFICO-------//
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}
//-------DETECTANDO EL SCROLL PARA LA ANIMACION-------//
window.onscroll = function(){
    efectoHabilidades();
}