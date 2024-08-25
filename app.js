const texto = document.getElementById('texto');
const botonEncriptar= document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar');
const botonCopiar = document.getElementById('botonCopiar');
const izquierdaTitulo = document.getElementById('izquierdaTitulo');
const muneco = document.getElementById('muneco');
const izquierdaTexto = document.getElementById('izquierdaTexto');
const segunda = document.getElementById('segunda');

let reemplazar =[
    ["e", "enter"],
    ["i",  "imes"],
    ["a",   "ai" ],
    ["o",  "ober"],
    ["u", "ufat" ],
]
const remplazarFunciones =(nuevoValor) =>{
    izquierdaTitulo.innerHTML = nuevoValor;

    muneco.classList.add("oculto");
    texto.value='';
    izquierdaTexto.style.display='none';
    botonCopiar.style.display='block';
    segunda.classList.add('ajustar');
    izquierdaTitulo.classList.add('ajustar');
}
const recet =() =>{
    izquierdaTitulo.innerHTML = '';
    muneco.classList.remove('oculto');
    izquierdaTexto.style.display='block';
    botonCopiar.style.display='none';
    segunda.classList.remove('ajustar');
    izquierdaTitulo.classList.remove('ajustar');
    texto.focus();
}

botonEncriptar. addEventListener("click", ()=> {
    const almacenarTexto = texto.value.toLowerCase()
    if(almacenarTexto != ''){
        function encriptar(newTexto){
            for(let i =0; i<reemplazar.length; i++){
                if (newTexto.includes(reemplazar[i][0])){
                    newTexto=newTexto.replaceAll(reemplazar[i][0],reemplazar[i][1]);
                };
            };
            return newTexto;
        }
        remplazarFunciones (encriptar(almacenarTexto));
    }else{
        alert('Ingrese texto para encriptar')
        recet();
    }
});

botonDesencriptar. addEventListener("click", ()=> {
    const almacenarTexto = texto.value.toLowerCase()
    if(almacenarTexto != ''){
        function desencriptar(newTexto){
            for(let i =0; i<reemplazar.length; i++){
                if (newTexto.includes(reemplazar[i][1])){
                    newTexto=newTexto.replaceAll(reemplazar[i][1],reemplazar[i][0]);
                };
            };
            return newTexto;
        }
        remplazarFunciones (desencriptar(almacenarTexto));
    }else{
        alert('Ingrese texto para desencriptar')
        recet();
    }
});
 
botonCopiar.addEventListener('click', ()=>{
    let texto1= izquierdaTitulo;
    // navigator.clipboard.writeText(texto.value);
    texto1.select();
    document.execCommand('copy');
    alert('Texto Copiado');
    recet();
}) 