
let userText = document.getElementById('parrafo');
console.log(userText);
let text = document.querySelector('.result');
console.log(text);
let textFinal = userText.value;
function showText(){
    let textFinal = userText.value;
    console.log(textFinal)
    let mensaje = '';
    if (textFinal){
        mensaje = '' + textFinal;
        text.textContent = mensaje;
    }    
 else { 
    text.textContent = 'No Valido';
}
}
