document.getElementById("formSoma").addEventListener("submit", function(event) {
    //Adiciona um alerta se a caixa de input estiver vazia
    if (document.getElementById('numberSoma').value === "") {
        alert("Por favor, insira um número.");
        return; // Impede o envio do formulário se o campo estiver vazio
    }
    event.preventDefault(); // Impede o envio do formulário padrão
    var numberSoma = parseInt(document.getElementById("numberSoma").value);
    var soma = 0;
    for (var i = 1; i <= numberSoma; i++) {
        soma += i;
    }
    document.getElementById("saidaSoma").innerText = "A soma dos números de 1 a " + numberSoma + " é: " + soma;
});