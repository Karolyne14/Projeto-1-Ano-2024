let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário ==""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "bem vindo visitante!";
}else{
    elemento.textContent = nomeUsuário;
}

