function insert(entradaNumero){ 
    var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + entradaNumero
}

function insertOperation(entradaNumero){ 
    var numero = document.getElementById('resultado').innerHTML;
    const ultimoDigito = numero.substring(numero.length - 1, numero.length); 
    if(entradaNumero != ultimoDigito && numero != ''){
        document.getElementById('resultado').innerHTML = numero + entradaNumero
    }
}

function insertDot(entrada){ 
    var numero = document.getElementById('resultado').innerHTML;
    const ultimoDigito = numero.substring(numero.length - 1, numero.length); 
    if(numero == ''){
        document.getElementById('resultado').innerHTML = 0 + entrada
    }else if(entrada != ultimoDigito && numero != ''){
        document.getElementById('resultado').innerHTML = numero + entrada
    }
}

function cleanResult(){
    document.getElementById('resultado').innerHTML = '';
}


function back(){
    var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calculateResult(){
    const calculo = eval(document.getElementById('resultado').innerHTML)
    document.getElementById('resultado').innerHTML = calculo
}