// Objetos
/* 
const user = {
    name: 'Thiago',
    nickname: 'Tato',
    idade: 29,
    address: {
        street: 'Rua Paranapiacaba',
        number: 1259
    }
}
// Desestruturação 
function mostraIdade ({idade}){
    return idade
} */


//Rest operator 
// const { name, idade, ...rest } = user

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const [first, , third,  ...rest] = array



// Short syntax 

// const name = 'Thiago'
// const age = 29

// const user = {
//     name,
//     age,
// }

//Optional Chaining
// const user = {
//     name: 'Thiago',
//     nickname: 'Tato',
//     idade: 29,
//     address: {
//         street: 'Rua Paranapiacaba',
//         number: 1259,
//         zip: {
//             code: '18025-760',
//             city: 'Sorocaba'
//         },
//         showFullAddress() {
//             return 'ok'
//         }
//     }
// }

// Métodos de array 

// for (const i of array) {
//     document.body.innerText += i
// }

// array.forEach(item => {
//     document.body.innerText += item
// })

// const novoArray = array.map(item => {
//     if (item % 2 === 0 ) {
//         return item * 10
//     }
//     return item
// })

// map, filter, every, some, find, findIndex, reduce. 

// Promises

// .then/.catch

// fetch('https://api.github.com/users/mqthiago')
// .then(response => {
//     return response.json()
// })
// .then(body => {
//     console.log(body)
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log('deu')
// })

async function buscaDadosNoGithub() { 
    try {
        const response = await fetch('https://api.github.com/users/mqthiago')
        const body = await response.json()

        return body.name
    } catch (err) {
        console.log(err)
    } finally{
        console.log('deu')
    }
}
buscaDadosNoGithub().then(name => {
    console.log(name)
})