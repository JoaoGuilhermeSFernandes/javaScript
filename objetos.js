//Objetos
let person = {
    name: 'Hérzio',
    age: 29,
    addres: 'Avenida Liberdade'
}

//console.log(person)

//Para alterar a propriedade de um objeto
//Dot Notation
person.addres = 'Champ de Mars, Paris, França'
console.log(person.addres)
console.log(person)

//Bracket notation
person['name'] = 'Nilson'
console.log(person.name)
console.log(person)


//Objeto
let carro = {
    cor: 'preto',
    marca: 'BMW',
    ano: 2000,
    motor: '2.0 turbo',
    velocidade: '100km/h',
    tipoDeCombustível: 'gasoleo',
    qtdPassageiros: 5,
    docOk: true
}


console.log(carro)
vonsole.log(person.name + 'está dirigindo a' + carro.velocidade + 'a sua' + carro.marca + ' ' + carro.cor + 'com' + carro.qtdPassageiros)

