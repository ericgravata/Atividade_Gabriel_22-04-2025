document.getElementById('formPI').addEventListener('submit', function(event) {
    //Adiciona um alerta se a caixa de input estiver vazia
    if (document.getElementById('numberPI').value === "") {
        alert("Por favor, insira um número.");
        return; // Impede o envio do formulário se o campo estiver vazio
    }
    //Adiciona um alerta se o valor inserido não for um número
    if (isNaN(document.getElementById('numberPI').value)) {
        alert("Por favor, insira um número válido.");
        return; // Impede o envio do formulário se o valor não for um número
    }
    //Adiciona um alerta se o número inserido for negativo
    if (parseInt(document.getElementById('numberPI').value) < 0) {
        alert("Por favor, insira um número positivo.");
        return; // Impede o envio do formulário se o número for negativo
    }

    
    event.preventDefault(); // Impede o envio do formulário
    const number = parseInt(document.getElementById('numberPI').value);
    if (number % 2 === 0) {
    //"Para que o resultado saia em forma de alerta, basta descomentar esta linha e comentar a próxima": alert("O número " + number + " é par.");
        document.getElementById('saidaPI').innerText = "O número " + number + " é par.";
        document.getElementById('saidaPI').style.color = "blue"; // Altera a cor do texto para azul

    } else {
    //"Para que o resultado saia em forma de alerta, basta descomentar esta linha e comentar a próxima": alert("O número " + number + " é ímpar.");
       document.getElementById('saidaPI').innerText = "O número " + number + " é ímpar.";
       document.getElementById('saidaPI').style.color = "red"; // Altera a cor do texto para vermelho
    }
});