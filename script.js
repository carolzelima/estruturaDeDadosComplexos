// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

let caracteres =  {
        nome: "Carolina",
        idade: 22,
        altura: 1.54
    }
console.log (caracteres)
caracteres.Olhos = "Verdes"
delete caracteres.idade
console.log(caracteres)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.

let cadastro = [
    {
        nome: "Diogo",
        idade: 19,
        telefone: 988776655,
        amigos: ["Solange", "David", "Joana", "Jessica"],
    }, 
    {
        nome: "Paloma",
        idade: 16,
        telefone: 998095678,
        amigos: ["Maria", "Dalva", "Leticia", "Carlos"],
    },
    {
        nome: "Gabriel",
        idade: 17,
        telefone: 987334420,
        amigos: ["Sabrina", "Carla", "Mariana", "Roberta"],
    },
    {
        nome: "Fábio",
        idade: 29,
        telefone: 990789956,
        amigos: ["Tibúrcio", "Flávia", "Gabriel", "Dionisio"],
    }, 
    {
        nome: "Larissa",
        idade: 44,
        telefone: 999210666,
        amigos: ["Emidio", "Andre", "Paulo", "Samuel"],
    }
]

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[0])

