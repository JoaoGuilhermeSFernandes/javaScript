const { Name } = require("selenium-webdriver/lib/command")

console.log('Hello world JavaScript!')

//Console
console.error('Este é um erro!') 
console.warn('Este é um aviso!')
console.log('Esta é uma mensagem!')

//Variáveis
var x = 10
//Maneiras mais modernas 
let y = 15
const z = 20

if (1) {
    let y = 55
    console.log(y)
}

console.log(x)
console.log(y)
console.log(z)

y = 25

console.log(y)

//Tipos de dados
const name = "Matheus"
console.log(name)
console.log(typeof name)

const shirtsQty = 4
console.log(shirtsQty)
console.log(typeof shirtsQty)

const decimal = 12.4
console.log(decimal)
console.log(typeof decimal)

const isApproved = false // true or false (boolean)
console.log(isApproved)
console.log(typeof isApproved)

let surname = null
console.log(surname)
console.log(typeof surname)

surname = "Batisti"
console.log(surname)
console.log(typeof surname)

let age 
console.log(age)
console.log(typeof age)

age = 30
console.log(age)
console.log(typeof age)

const languages = ["JavaScript", "PHP", "Python"]
console.log(languages)
console.log(typeof languages)

const user = {email: 'jguisf@gmail.com', password: "teste123", age: 20} //object literals
console.log(user)
console.log(typeof user)

//métodos de string
const fullName = "Matheus Batisti"

console.log(fullName.length)

const stringToArray = fullName.split(' ')

console.log(stringToArray)

console.log(fullName.toLowerCase())

console.log(fullName.toUpperCase())

console.log(fullName.indexOf('Battisti'))

console.log('asgdifyd'.indexOf('Battisti'))

console.log(fullName.slice(0, 7))

//Métodos de array
const list = ['a', 'b', 'c', 'd', 'e'] //começa a contar de o

console.log (list.length)

console.log(list(2))

list[5] = 'f'

console.log(list)

console.log(list[list.length - 1]) //conseguir o elemento que está na última posição

list.push('g') //adicionar um elemento ao fim da lista
console.log(list)

list.pop() //Remover um elemento ao final da lista 
console.log(list)

list.shift() //Remover o primeiro elemento
console.log(list)

list.unshift('a') //Adicionar um elemento ao início
console.log(list)

//Objetos
const product = {
    name: 'camisa',
    price: 15,99,
    instock: true,
    sizes: ['P', 'M', 'G'],
    'Main color: Blue',
}

console.log(product.name)

console.log(product['name'])

console.log(product['Main color'])

//Destructuring (objetos e array)
const {price, instock} = product
console.log(price)
console.log(instock)

const [n1, n2] = list
console.log(n1)
console.log(n2)

//Json - JavaScript object notation 
const dog = {
    name: 'Shark',
    age: 10
}
const json = JSON.stringify(dog)
console.log(json) 






































