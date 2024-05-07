const resultado = document.querySelector('#resultado');       //puxar indereço resultado para dar função
const peso = document.querySelector('#peso');          //puxar indereço peso para dar função
const altura = document.querySelector('#altura');           //puxar indereço altura para dar função

const calculaIMC = () => {
    if (peso.value && altura.value) { // Verifica se os campos estão preenchidos
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);  //fórmula do imc
        let classificacao = '';
 
//abaixo cada nivel de imc para cada resultado

        if (imc < 18.5) {
            classificacao = 'Abaixo do normal';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc < 34.9) {
            classificacao = 'Obesidade (grau I)';
        } else if (imc <= 39.9) {
            classificacao = 'Obesidade (grau II)';
        } else {
            classificacao = 'Obesidade (grau III)';
        }
        resultado.innerHTML = `IMC: ${imc} -> ${classificacao}`;          //forma que o resul vai aparecer
    } else {
        resultado.innerHTML = 'Preencha os campos acima!';      //aviso caso não preenchido
    }
};
//agora para o botão calcular:

const botaoCalcularIMC = document.querySelector('.calcularoIMC button');
botaoCalcularIMC.addEventListener('click', calculaIMC);     //quando botão calcular for clicado, que o calculaIMC() entre em ação



//agora para o botão limpar:
const limparImc = () => { 
    peso.value = ''; //limpar campo peso
        altura.value = ''; //limpar campo altura
            resultado.innerHTML = '';  //limpar campo do span
};
