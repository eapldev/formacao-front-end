// // 1 - Variáveis
// let nome = "Eduardo"
// console.log(nome)
// nome = "Eduardo Aparecido Leite"
// console.log(nome)

// const idade = 21
// console.log(idade)

// console.log(typeof nome)
// console.log(typeof idade)

// // 2 + Mais variáveis
// // let 2teste = "inválido" - ERRADO
// // let @teste = "inválido" - ERRADO

// let a = 20, b = 30, c=40

// console.log(a, b, c)

// // const nomecompleto = "Eduardo Aparecido" - NÃO RECOMENDADO

// const nomeCompleto = "Eduardo Aparecido"

// console.log(nomeCompleto)

// let _teste = "_ok"
// let $teste = "$ok"

// console.log(_teste, $teste)

// 3 - Prompt - NÃO MUITO UTILIZADO!
// const age = prompt("Digite a sua idade:")

// console.log(`Você tem ${age} anos.`)

// 4 - Alert
// alert("Fala Devs")

// const z = 10

// alert(`O número é ${z}`)

// 5 - Math
// console.log(Math.max(5, 2, 10, 1))

// console.log(Math.floor(5.14))

// console.log(Math.ceil(5.14))

// // 6 - Console
// console.log("Teste!")

// console.error("ERROR!")

// console.warn("AVISO!")

// 7 - If
// const m = 10

// if(m > 5) {

//     console.log("M é maior que 5!")
// }

// const user = "Pedro"

// if(user === "Pedro") {

//     console.log(`O user se chama ${user}`)
// }

// if(user === "Maria") {

//     console.log(`O user se chama ${user}`)
// }

// console.log(user === "Pedro", user === "Maria")

// // 8 - Else
// const loggedIn = false

// if(loggedIn) {
//     console.log("Está autenticado!")
// } else {
//     console.log("Não está autenticado")
// }

// const q = 20
// const w = 15

// if(q > 5 && w > 20) {
//     console.log("Números mais altos")
// } else {
//     console.log("Os números não são mais altos.")
// }

// // 9 - Else If
// if(1 > 2) {
//     console.log("Teste")
// } else if(2 > 3) {
//     console.log("Teste.2")
// } else if(5 > 1) {
//     console.log("Agora sim!")
// }

// const userName = "Eduardo"
// const userAge = 21

// if(userName === "José") {
//     console.log(`Bem vindo ${userName}`)
// } else if(userName === "Eduardo" && userAge === 21) {
//     console.log(`Olá ${userName} você tem ${userAge} anos.`)
// } else {
//     console.log("Nenhuma condição foi aceita!")
// }

// 10 - While

// let p = 0

// while(p < 10) {
//     console.log(`Repetindo ${p}`)
//     p = p + 1
// }

// // Loop Infinito
// // let x = 10
// // while(x > 5) {
// //     console.log(`Imprimindo ${x}`)
// // }

// // 11 - do While
// let o = 10

// do {
//     console.log(`Valor de o: ${o}`)
//     o--
// } while(o > 1) 

// 12 - For
// for (let t = 0; t < 10; t++) {
//     console.log("Repetindo algo...")
// }

// let r = 10

// for(r; r > 0; r = r - 1) {
//     console.log(`O r está diminuindo: ${r}`)
// }

// 13 - Identação
// for (let u = 0; u < 10; u++) {
//     if (u * 10 > 2) {
//         console.log(`Maior que 10! ${u}`)
//     } else {
//         if (u / 2 === 0) {
//             console.log("deu 0.")
//         }
//     }
// }

// 14 - Break
// for (let g = 20; g > 10; g--) {
//     console.log(`O valor de g é: ${g}`)

//     if(g === 12) {
//         console.log("O g é 12!")
//         break
//     }
// }

// 15 - Continue
for (let s = 1; s < 10; s = s + 1) {
    // operador resto = %
    if (s % 2 === 0) {
        console.log("Numero par!")
        continue
    }
    console.log(s)
}

// 16 - Switch
const job = "Programador"

switch (job) {
    case "Médico":
        console.log("Você é um Médico!")
        break

    case "Engenheiro":
        console.log("Você é um Engenheiro!")
        break

    case "Programador":
        console.log("Você é um Programador!")
        break

    default:
        console.log("Profissão não encontrada!")
}

// Switch ERRADO!

// const v = 100

// switch (v) {
//     case 200:
//         console.log("V é 200!")
//     case 100:
//         console.log("V é 100!")
//     case 10:
//         console.log("V é 10!")
//     default:
//         console.log("V não foi encontrado!")
// }  OBS: switch sem [break]