var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo =document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");  

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriptarTex(area);
}

function desencriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTex(area);
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
 munieco.classList.add("ocultar");
 h3.classList.add("ocultar");
 parrafo.classList.add("ocultar");
}

function encriptarTex(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++){
        if(texto[i]== "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i]== "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i]== "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i]== "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i]== "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];

        }
         
    }
    return textoFinal;
}

function desencriptarTex(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++){
        if(texto[i]== "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
            /* va incrementar para que no toco las letras incrmentabas */ 
        }
        else if(texto[i]== "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i]== "i"){
            textoFinal = textoFinal + "i"
        }
        else if(texto[i]== "o"){
            textoFinal = textoFinal + "o"
        }
        else if(texto[i]== "u"){
            textoFinal = textoFinal + "u"
        }
        else{
            textoFinal = textoFinal + texto[i];

        }
         
    }
    return textoFinal;
}
