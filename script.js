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

/*
    TODO:
    regex to find encrypted parts inside text on dscrpt() function
    regex to find vogals to encrypt inside text on crpt() function
*/

var userInputVar;

//Atribuindo os elementos HTML do site para as variáveis
var asideParent = document.getElementById('resultAside');
const noTextDiv = document.getElementById('noTextDiv');

// criação de div's e outros elementos através do DOM (document object model)
const outputDiv = document.createElement('div');
outputDiv.id = 'outputDiv';

const resultText = document.createElement('span');
resultText.id = 'outputText';
outputDiv.appendChild(resultText);


function containsAccentOrUppercase(str) {
    return /[^a-z0-9_\s]/.test(str);
}

function inputWarning(paramStr){
    if(containsAccentOrUppercase(paramStr)){
        console.log("LETRA ESPECIAL/MAIUSCULA");
        return true;
    } else {
        console.log("LETRA MINUSCULA");
        return false;
    }
}

function dscrpt(){
    
}



function updateAside(){
    let divCheck = document.querySelector('#noTextDiv');
    if(divCheck != null){
        asideParent.replaceChild(outputDiv, noTextDiv);
    }
    resultText.textContent = userInputVar;
}

userInput.addEventListener('input', function handleChange(event) {
        console.log(event.target.value);
      }); 

function checkNotNullString(paramString) {
    if(paramString != null && paramString != "") {
        return true;
    } else{
        return false;
    }
}
function crptButton(){
    userInputVar = document.getElementById('userInput').value;
    if(checkNotNullString(userInputVar)){
        updateAside();
    } else {
        asideParent.replaceChild(noTextDiv, outputDiv);
    }
}

function dscrptButton(){
    userInputVar = document.getElementById('userInput').value;
    if(checkNotNullString(userInputVar)){
        dscrpt(userInputVar);
        updateAside();
    } else {
        asideParent.replaceChild(noTextDiv, outputDiv);
    }
}
