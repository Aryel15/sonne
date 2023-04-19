function enviarEx1() {
    var result
    //variavel pega o valor digitado no input e na estrutura de condição verific se ele é divisivel por 3, 5, ambos ou nenhum
    var numero = document.getElementById("numero").value;
    if ((numero % 3 == 0) & (numero % 5 == 0)) {
        result = "FizzBuzz"
    } else if(numero % 3 == 0) {
        result = "Fizz"; 
    } else if(numero % 5 == 0){
        result ="Buzz"; 
    }else{
        result = "Não é divisivel nem por 3 nem por 5"
    }
    //coloca o resultado no campo do HTML
    document.getElementById("resultado").innerHTML = result;
}