//let num = '9'



function verificarMaiorIdade() {
 if (idade >= 18) {
    return 'Variavel de Maior Idade'
 } else {
    return 'Variavel de Menor idade'
 }
}

console.log(verificarMaiorIdade(17))

function compararNumeros(num1, num2) {
    if (num1 < num2) {
        return 'O número um é menor'
    } else if (num1 > num2) {
        return 'O número 2 é menor'
    } else {
        return 'Os números tem o mesmo valor'
    }
}

console.log(compararNumeros(1, 2))

function verificarNumeros(numero) {
    if (numero < 0) {
        return "Negativo"
    } else if (numero > 0) {
        return "Positivo"
    } else {
        return "Numero 0"
    }
}

console.log(compararNumeros(1))

function diaDaSemana(numero){
    switch (numero) {
        case 1:
            return "Domingo"
        case 2: 
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7: 
            return "Sabado"
        default: 
          return "Esse numero é invalido"    
    }
}

console.log(diaDaSemana(2))

