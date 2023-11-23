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

function checkInputWarning(paramStr){
    if(containsAccentOrUppercase(paramStr)){
        console.log("LETRA ESPECIAL/MAIUSCULA");
        return true;
    } else {
        console.log("LETRA MINUSCULA");
        return false;
    }
}

function crpt(strParam){
    let crptString = '';
    /* crptString = crptString.replace('a', 'ai');
    crptString = crptString.replace('e', 'enter');
    crptString = crptString.replace('i', 'imes');
    crptString = crptString.replace('o', 'ober');
    crptString = crptString.replace('u', 'ufat'); */
    for(let i = 0; i < strParam.length; i++){
        switch(true){
            case strParam[i] == 'a':
                crptString += 'ai';
                continue;
            case strParam[i] == 'e':
                crptString += 'enter';
                continue;
            case strParam[i] == 'i':
                crptString += 'imes';
                continue;
            case strParam[i] == 'o':
                crptString += 'ober';
                continue;
            case strParam[i] == 'u':
                crptString += 'ufat';
                                continue;
            default:
                crptString += strParam[i];
                continue;
        }
    } 
    return crptString;
}

function dscrpt(strParam){
    let dscrptString = strParam;
    dscrptString = dscrptString.replaceAll('ai', 'a');
    dscrptString = dscrptString.replaceAll('enter', 'e');
    dscrptString = dscrptString.replaceAll('imes', 'i');
    dscrptString = dscrptString.replaceAll('ober', 'o');
    dscrptString = dscrptString.replaceAll('ufat', 'u');
    return dscrptString;
}

function updateAside(paramStr){
    let divCheck = document.querySelector('#noTextDiv');
    if(divCheck != null){
        asideParent.replaceChild(outputDiv, noTextDiv);
    }
    resultText.textContent = paramStr;
}

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
        updateAside(crpt(userInputVar));
    } else {
        asideParent.replaceChild(noTextDiv, outputDiv);
    }
}

function dscrptButton(){
    userInputVar = document.getElementById('userInput').value;
    if(checkNotNullString(userInputVar)){
        updateAside(dscrpt(userInputVar));
    } else {
        asideParent.replaceChild(noTextDiv, outputDiv);
    }
}
