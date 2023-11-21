/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"
*/

var user;

var asideParent = document.getElementById('resultAside');
const noTextDiv = document.getElementById('noTextDiv');

const outputDiv = document.createElement('div');
outputDiv.id = 'outputDiv';

const resultText = document.createElement('span');
resultText.id = 'outputText';
outputDiv.appendChild(resultText);

function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

function dscrpt(paramText){
    if(containsUppercase(paramText)){
        console.log("LETRA MAIUSCULA");
    } else {
        console.log("LETRA MINUSCULA");
    }
}



function updateAside(){
    let divCheck = document.querySelector('#noTextDiv');
    if(divCheck != null){
        asideParent.replaceChild(outputDiv, noTextDiv);
    }
    resultText.textContent = user;
}

/* userInput.addEventListener('input', function handleChange(event) {
        console.log(event.target.value);
      }); */

function checkString(paramString) {
    if(paramString != null && paramString != "") {
        return true;
    } else{
        return false;
    }
}
function crptButton(){
    user = document.getElementById('userInput').value;
    if(checkString(user)){
        updateAside();
    } else {
        asideParent.replaceChild(noTextDiv, outputDiv);
    }
}

function dscrptButton(){
    user = document.getElementById('userInput').value;
    if(checkString(user)){
        updateAside();
        dscrpt(user);
    } else {
        asideParent.replaceChild(noTextDiv, outputDiv);
    }
}
