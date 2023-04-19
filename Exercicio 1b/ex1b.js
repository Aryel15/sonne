//cria o array de numeros
var numeros = [];
function enviarEx2(){
    //pega o valor que foi digitado no input e adiciona no array
    var valor = document.getElementById("numeros").value;
    numeros.push(valor);
    document.getElementById("numeros").value = "";
}
function mostrar() {
    var pares = 0
    //mapeia os numeros
    numeros.map((numero) => {
        //caso o numero seja par ele é somado na variável pares
        if(numero % 2 == 0){
            pares = pares + parseInt(numero) 
        }
        return pares
    })
    //coloca o resultado no campo do HTML
    document.getElementById("resultado").innerHTML = pares;
}