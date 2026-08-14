function realizarCalculo() {

    let v1 = parseFloat(document.getElementById("val1").value);
    let v2 = parseFloat(document.getElementById("val2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = document.getElementById("resultado");

    let calculo;

    switch (operacao) {

        case "+":
            calculo = v1 + v2;
            break;

        case "-":
            calculo = v1 - v2;
            break;

        case "*":
            calculo = v1 * v2;
            break;

        case "/":
            if (v2 === 0) {
                resultado.textContent = "Não é possível dividir por zero!";
                return;
            }

            calculo = v1 / v2;
            break;

        default:
            resultado.textContent = "Operação inválida!";
            return;
    }

    resultado.textContent = "Resultado: " + calculo;
}