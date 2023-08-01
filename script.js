/*function Buscar(){
    const calcu = parseFloat(document.querySelector('.inCalcu').value);
    const calcu2 = parseFloat(document.querySelector('.inCalcu2').value);
    const oper = document.querySelector('.inOper').value;
    const result = document.querySelector('.resultado'); 
    let resposta= " "

    soma = calcu+calcu2
    subt = calcu-calcu2
    multi = calcu*calcu2
    divi = calcu/calcu2

    switch (oper) {
        case "+":
            resposta = result.innerHTML = `A soma dos números é:  ${soma}`
            break;
        case "-":
            resposta = result.innerHTML = `A subtração dos números é:  ${subt}`
            break;
        case "*":
            resposta = result.innerHTML = `A multiplicação dos números é:  ${multi}`
            break;
        case "/":
            resposta = result.innerHTML = `A divisão dos números é:  ${divi}`
            break;
        default:
            resposta = result.innerHTML = 'Operação não encontrada'
            break;
    }
   
} */

let soma=0
for(let i=1; i<=10;i++){
    let num = parseFloat(prompt("Número: "));
    soma=soma+num;
    console.log(soma);
}

