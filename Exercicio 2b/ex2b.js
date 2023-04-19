//Criando a lista de objetos
const pessoas = [
    {
        name: "Ana",
        age:18
    },
    {
        name: "Cleber",
        age:35
    },
    {
        name: "Maria",
        age:46
    },
    {
        name: "Natalia",
        age:17
    },
    {
        name: "Otavio",
        age:12
    },
    {
        name: "Roberto",
        age:22
    },
    {
        name: "Pedro",
        age:19
    },
    {
        name: "Luisa",
        age:15
    },
    {
        name: "Janaina",
        age:16
    },
    {
        name: "Eduardo",
        age:15
    }
]

// Criando array de adultos
let adultos = [];
//Criando a função que mapeia os adultos
function getAdultos() { 
    adultos = pessoas.map((pessoa) => { 
      return { 
        name: pessoa.name, 
        isAdult: pessoa.age >= 18 
      }; 
    }); 
}
getAdultos();

//Criando as funções que irão mostrar as todas as pessoas e as pessoas adultas
var pessoasHTML = document.getElementById("pessoas")
var adultosHTML = document.getElementById("adultos")
function mostraPessoas(){
    pessoas.map((pessoa) => {
        let div = document.createElement('div');
        div.innerHTML = `Nome: ${pessoa.name}</br>Idade: ${pessoa.age}`;
        pessoasHTML.appendChild(div);
    })
}
function mostraAdultos(){
    adultos.map((adulto) => {
        if(adulto.isAdult){
            let div = document.createElement('div');
            div.innerHTML = `Nome: ${adulto.name}</br>Tem mais de 18 anos`;
            adultosHTML.appendChild(div);
        }
    })
}
mostraPessoas();
mostraAdultos();
