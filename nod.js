function init () {
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicar = document.getElementById('multiplicar');
    var division = document.getElementById('division');
    var raiz = document.getElementById('raiz');
    var raizcubica = document.getElementById('raizcubica');
    var modulo = document.getElementById('modulo');
    var potencia = document.getElementById('potencia');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent+"1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent+"2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent+"3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent+"4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent+"5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent+"6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent+"7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent+"8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent+"9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent+"0";
    }

    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplicar.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    potencia.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "^";
        limpiar();
    }
    raiz.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "√";
        limpiar();
    }
    raizcubica.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "∛";
        limpiar();
    }
    modulo.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "%";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent="";
}
function resetear(){
    resultado.textContent="";
    operandoa=0;
    operandob=0;
    operacion="";
}
function resolver(){
    var res=0;
    switch(operacion){
        case"+":
        res=parseFloat(operandoa) + parseFloat(operandob);
        break
        case"-":
        res=parseFloat(operandoa) - parseFloat(operandob);
        break
        case"/":
        res=parseFloat(operandoa) / parseFloat(operandob);
        break
        case"*":
        res=parseFloat(operandoa) * parseFloat(operandob);
        break
        case"^":
        res=Math.pow(operandoa,operandob);
        break
        case"√":
        res= Math.sqrt(operandoa);
        break
        case"∛":
        res= Math.pow(operandoa, 1 / 3);
        break
        case"%":
        res=parseFloat(operandoa) % parseFloat(operandob);
        break
    }
    resetear();
    resultado.textContent = res;
}

