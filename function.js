//Estrutura de uma função 

//Realizando uma tarefa

function olamundo(){
    console.log('Olá mundo!')

}

olamundo()

//Parâmetros e argumentos
function greetings(name) {
    console.log('olá, ' + name + '!')
}

//greetings('Carmen')
//greetings('Hariany')
//greetings('Nilson')

//Função com múltiplos parâmetros
function cumprimento(firstName, lastName) {

    console.log('Olá, ' + firstName + ' ' + lastName + '!')
}

cumprimento('Tech', 'Fixe')
cumprimento('Emerson', 'Magalhaes')

//Calculando valores
function aoQuadrado(number) {
    return number * number
}

let numero = aoQuadrado(5)
console.log(numero)