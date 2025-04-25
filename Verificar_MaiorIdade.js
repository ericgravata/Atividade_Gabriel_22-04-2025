document.getElementById("formMaioridade").addEventListener("submit", function(event) {
    //Adiciona um alerta se a caixa de input estiver vazia
    if (document.getElementById('numberMaioridade').value === "") {
        alert("Por favor, insira um número.");
        return; // Impede o envio do formulário se o campo estiver vazio
    }

    event.preventDefault(); // Impede o envio do formulário
    var idade = parseInt(document.getElementById("numberMaioridade").value);
    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {    
        alert("Você é menor de idade.");
    }
    
    // Exibir resultado na página
    var resultado = (idade >= 18) ? "Você é maior de idade." : "Você é menor de idade.";
    document.getElementById("saidaMaioridade").innerText = resultado;
});