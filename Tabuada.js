function tabuadaTabela() {
    var number = document.getElementById("numberTabuadaTabela").value;
    var output = "<table><tr><th>Multiplicação</th><th>Resultado</th></tr>";
        //Adiciona um alerta se a caixa de input estiver vazia
        if (document.getElementById('numberTabuadaTabela').value === "") {
            alert("Por favor, insira um número.");
            return; // Impede o envio do formulário se o campo estiver vazio
        }

    for (var i = 1; i <= 10; i++) {
        output += "<tr><td>" + number + " x " + i + "</td><td>" + (number * i) + "</td></tr>";
    }
    output += "</table>";
    // Adiciona a tabela ao elemento de saída
    document.getElementById("saidaTabela").innerHTML = output;
}
document.getElementById("formTabuadaTabela").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    tabuadaTabela(); // Chama a função para gerar a tabuada
});




/*
const formTabuada = document.getElementById('formTabuada');
const numberTabuada = document.getElementById('numberTabuada');
const saidaTabuada = document.getElementById('saidaTabuada');

formTabuada.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const number = parseInt(numberTabuada.value);
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}<br>`;
    }
    saidaTabuada.innerHTML = result;
});
*/