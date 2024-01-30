function calcularPeso() {
    // Obter valores dos inputs 
    let erroPeso = document.getElementById("erroInpPeso");
    let erroAltura = document.getElementById("erroInpAlt");
    let peso = document.getElementById("pesoInput").value;
    let altura = document.getElementById("alturaInput").value;
    let resultado = document.getElementById("resultado")

    // Calcular o IMC
    let imc = peso / ((altura / 100) ** 2);


    // Define o IMC com base no valor
    if (imc < 18.5) {
        interpretacao = "Abaixo do peso";
        classificacao = "Menor que 18,5";
    } else if (imc >= 18.5 && imc <= 24.9) {
        interpretacao = "Peso normal";
        classificacao = "Entre 18,5 e 24,9";
    } else if (imc >= 25 && imc <= 29.9) {
        interpretacao = "Sobrepeso";
        classificacao = "Entre 25 e 29,9";
    } else if (imc >= 30 && imc <= 34.9) {
        interpretacao = "Obesidade I";
        classificacao = "Entre 30 e 34,9";
    } else {
        interpretacao = "Obesidade II e III";
        classificacao = "Igual ou maior que 35";
    }

    let areaResultado1 = document.getElementById("areaResultado1")
    let areaResultado2 = document.getElementById("areaResultado2")

    // Exibe o texto de erro
    if (peso == "" || altura == "") {
        erroPeso.style.display = 'block';
        erroAltura.style.display = 'block';
    } else {
        // Exibe os valores se estiver tudo correto
        areaResultado1.innerHTML = (`${interpretacao}`)
        areaResultado2.innerHTML = (`${classificacao}`)
        resultado.style.display = 'block';
    }
}

