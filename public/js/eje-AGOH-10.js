function suma(){
    //declaracion
    //let y const
    const num1=parseInt(document.getElementById('tf1').value);
    const num2=parseInt(document.getElementById('tf2').value);
    const resultado=document.getElementById('resultado');
    //proceso
    const suma = num1 + num2;
    //salida
    resultado.innerHTML='resultado: '+suma;
}

function resta(){
   //declaracion
    //let y const
    const num1=parseInt(document.getElementById('tf1').value);
    const num2=parseInt(document.getElementById('tf2').value);
    const resultado=document.getElementById('resultado');
    //proceso
    const resta = num1 - num2;
    //salida
    resultado.innerHTML='resultado: '+resta;
}

function multi(){
    //declaracion
    //let y const
    const num1=parseInt(document.getElementById('tf1').value);
    const num2=parseInt(document.getElementById('tf2').value);
    const resultado=document.getElementById('resultado');
    //proceso
    const multi = num1 * num2;
    //salida
    resultado.innerHTML='resultado: '+multi;
}

function divi(){
    //declaracion
    //let y const
    const num1=parseInt(document.getElementById('tf1').value);
    const num2=parseInt(document.getElementById('tf2').value);
    const resultado=document.getElementById('resultado');
    //proceso
    const divi = num1 / num2;
    //salida
    resultado.innerHTML='resultado: '+divi;
}