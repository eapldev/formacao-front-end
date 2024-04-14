// // // 1 - Criando uma função
// // function primeiraFuncao() {
// //     console.log("Testando")
// // }

// // primeiraFuncao()

// // const minhaFuncaoEmVariavel = function () {
// //     console.log("Função em variável")
// // }

// // minhaFuncaoEmVariavel()

// // function funcaoComParametro(txt) {
// //     console.log(`Imprimindo: ${txt}`)
// // }

// // funcaoComParametro("Imprimindo alguma coisa!")

// // funcaoComParametro("Outra função")

// // // 2 - Return
// // const a = 10
// // const b = 20
// // const c = 30
// // const d = 40

// // function soma(n1, n2) {
// //     return n1 + n2
// // }

// // const resultado = soma(a, b)
// // console.log(resultado)

// // console.log(soma(c, d))


// // // 3 - Escopo da função
// // let y = 10

// // function testandoEscopo() {
// //     let y = 20
// //     console.log(`Y dentro da função é: ${y}`)
// // }

// // testandoEscopo()

// // console.log(`Y fora da função é ${y}`)


// // // 4 - Escopo aninhado
// // let m = 10

// // function escopoAninhado() {
// //     let m = 20

// //     if (true) {
// //         let m = 30

// //         if (true) {
// //             let m = 40

// //             console.log(m)
// //         }

// //         console.log(m)
// //     }

// //     console.log(m)
// // }

// // escopoAninhado()

// // console.log(m)

// // // 5 - Arrow function =>
// // const testeArrow = () => {
// //     console.log("Está é uma arrow function")
// // }

// // testeArrow()

// // const parOuImpar = (n) => {
// //     if (n % 2 === 0) {
// //         console.log("Par")
// //         return
// //     }

// //     console.log("Impar")
// // }

// // parOuImpar(5)
// // parOuImpar(10)

// // // 6 - Mais sobre arrow functions
// // const raizQuadrada = (x) => {
// //     return x * x
// // }

// // console.log(raizQuadrada(4))
// // console.log(raizQuadrada(2))

// // const raizQuadrada2 = (x) => x * x

// // console.log(raizQuadrada2(5))
// // console.log(raizQuadrada2(12))

// // const helloWord = () => console.log("Hello World")

// // helloWord()

// // 7 - Parametro opcional
// const multiplication = function (m, n) {
//     if (n === undefined) {
//         return m * 2
//     } else {
//         return m * n
//     }
// }

// console.log(multiplication(5))
// console.log(multiplication(2, 4))

// const greeting = (name) => {
//     if (!name) {
//         console.log("Olá!")
//         return
//     }

//     console.log(`Olá ${name}`)
// }

// greeting()
// greeting("Eduardo")

// // 8 - Valor default
// const customGreeting = (name, greet = "Olá") => {
//     return `${greet}, ${name}!`
// }

// console.log(customGreeting("Eduardo"))
// console.log(customGreeting("João", "Bom dia"))

// const repeatText = (text, repeat = 2) => {
//     for(let i = 0; i < repeat; i++) {
//         console.log(text)
//     }
// }

// repeatText("Testando")
// repeatText("Agora repete 5 vezes", 5)

// // 9 - Closure
// function someFunction() {
//     let txt = "Alguma coisa"

//     function display() {
//         console.log(txt)
//     }

//     display()
// }

// someFunction()

// // 10 - Mais sobre as closure
// const multiplicationClosure = (n) => {
//     return (m) => {
//         return n * m
//     }
// }

// const c1 = multiplicationClosure(5)
// const c2 = multiplicationClosure(10)

// console.log(c1)
// console.log(c2)

// console.log(c1(5))
// console.log(c2(10))

// 11 -recursion
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7)

// // infite recursion - Loop infinito
// function run() {
//     console.log("Executando...")
//     run()
// }

function factorial(x) {
    if(x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num)

console.log(`O fatorial do número ${num} é ${result}`)