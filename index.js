const BTNENCRIPTAR = document.querySelector('#btn_encriptar');
const BTNDESENCRIPTAR = document.querySelector('#btn_desencriptar');
const BTNCOPIAR = document.querySelector('#btn_copy')
const TEXTOTRANSFORMADO = document.querySelector('.textWrite')
let texto = document.querySelector('#texto');
let textoTransformado;


function encriptar(text){

    let newText;
    newText = text.split('');

    for(let i = 0;i < newText.length; i++ ){
        if(newText[i] === 'e'){
            newText[i] = 'enter';
        }
        if(newText[i] === 'i'){
            newText[i] = 'imes';
        }
        if(newText[i] === 'a'){
            newText[i] = 'ai';
        }
        if(newText[i] === 'o'){
            newText[i] = 'ober';
        }
        if(newText[i] === 'u'){
            newText[i] = 'ufat';
        }
    }
    newText = newText.join('')
    mostrarTexto(newText)

}
function desencriptar(text){

    let newText;
    newText = text.replace(/enter/g,'e');
    newText = newText.replace(/imes/g,'i');
    newText = newText.replace(/ai/g,'a');
    newText = newText.replace(/ober/g,'o');
    newText = newText.replace(/ufat/g,'u');
    mostrarTexto(newText)

}
function mostrarTexto(text){
       if(TEXTOTRANSFORMADO.value!== ''){
        TEXTOTRANSFORMADO.value = '';
       }
       TEXTOTRANSFORMADO.value = text;
       textoTransformado = TEXTOTRANSFORMADO.value;
       return textoTransformado;
}
function copiar(copytext){
    navigator.clipboard.writeText(copytext)
    
    BTNCOPIAR.value = 'Copiado';
    BTNCOPIAR.classList.add('btnAgrandar')
    setTimeout(()=>{
        BTNCOPIAR.classList.remove('btnAgrandar')
            BTNCOPIAR.value = 'Copiar';
            
    },600);
}
function hide(){
    if(!(TEXTOTRANSFORMADO.value)){
        document.querySelector('#found').style.display="none"
        document.querySelector('#notFound').style.display="flex"
    }else{
        document.querySelector('#found').style.display="flex"
        document.querySelector('#notFound').style.display="none"
    }
}

BTNENCRIPTAR.addEventListener('click', ()=>{
    encriptar(texto.value);
    texto.value = '';
    hide();

});
BTNDESENCRIPTAR.addEventListener('click', ()=>{
    desencriptar(texto.value);
    texto.value = '';
    hide()
});
BTNCOPIAR.addEventListener('click', ()=>{
    if(TEXTOTRANSFORMADO.value !== ''){
        copiar(textoTransformado);
    }
})
