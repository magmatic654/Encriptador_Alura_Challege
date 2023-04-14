
const BTNENCRIPTAR = document.querySelector('#btn_encriptar');
const BTNDESENCRIPTAR = document.querySelector('#btn_desencriptar');
const BTNCOPIAR = document.querySelector('#btn_copy')
const TEXTOTRANSFORMADO = document.querySelector('.textWrite')
let texto = document.querySelector('#texto');
let textoTransformado;


function encriptar(text){

    let newText;
    
    newText = text.replace(/e/g,'enter');
    newText = newText.replace(/i/g,'imes');
    newText = newText.replace(/a/g,'ai');
    newText = newText.replace(/o/g,'ober');
    newText = newText.replace(/u/g,'ufat');

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
       if(TEXTOTRANSFORMADO.textContent !== ''){
        TEXTOTRANSFORMADO.textContent = '';
       }
       TEXTOTRANSFORMADO.textContent = text;
       console.log(TEXTOTRANSFORMADO.textContent)
       textoTransformado = TEXTOTRANSFORMADO.textContent;
       return textoTransformado;
}
function copiar(copytext){
    navigator.clipboard.writeText(copytext)
    
    BTNCOPIAR.textContent = 'Copiado';
    BTNCOPIAR.classList.add('btnAgrandar')
    setTimeout(()=>{
        BTNCOPIAR.classList.remove('btnAgrandar')
            BTNCOPIAR.textContent = 'Copiar';
            
    },600);
}
function hide(){
    if(!TEXTOTRANSFORMADO.textContent){
        document.querySelector('#found').style.display="none"
        document.querySelector('#notFound').style.display="flex"
        setTimeout(()=>{
            document.querySelector('aside').style.backgroundColor = '#9ecbf7'
        },1000)
        document.querySelector('aside').style.backgroundColor = '#dc4787'
    }else{
        document.querySelector('#found').style.display="flex"
        document.querySelector('#notFound').style.display="none"

        setTimeout(()=>{
            document.querySelector('aside').style.backgroundColor = '#9ecbf7'
        },1000)
        document.querySelector('aside').style.backgroundColor = '#76de9b'
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
