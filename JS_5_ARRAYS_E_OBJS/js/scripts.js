// // 1 - arrays
// const lista = [1, 2, 3, 4, 5]

// console.log(lista)

// console.log(typeof lista)

// const itens = ["Eduardo", true, 21, 1.60, []]

// console.log(itens)

// // 2 - mais sobre arrays
// const arr = ["a", "b", "c", "d", "e",]

// console.log(arr[1])
// console.log(arr[3])
// console.log(arr[100])

// // 3 - propriedades
// const numbers = [1, 2, 3]

// console.log(numbers.length)

// console.log(numbers["length"])

// const myName = "Eduardo"

// console.log(myName.length)

// // 4 - métodos
// const otherNumbers = [1, 2, 3]

// const allNumbers = numbers.concat(otherNumbers)

// console.log(allNumbers)

// const text = "alguma coisa"

// console.log(text.toUpperCase())
// console.log(typeof text.toUpperCase)
// console.log(text.indexOf("g"))

// // 5 - Objetos
// const person = {
//     name: "Eduardo",
//     age: 31,
//     job: "Programador",
// }

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.job)
// console.log(person.name.length)
// console.log(typeof person)

// 6 - criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: "Audi",
//     model: "RS6",
//     km: 30000,
// }

// console.log(car)

// car.doors = 4
// console.log(car)

// delete car.km

// console.log(car)

// // 7 - mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true,
// }

// console.log(obj instanceof Object)

// const obj2 = {
//     c: [],
// }

// Object.assign(obj2, obj)

// console.log(obj2)
// console.log(obj)

// // 8 - conhecendo melhor os objetos
// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))
// console.log(Object.keys(car))

// console.log(Object.entries(car))

// // 9 - mutação
// const a = {
//     name: "Eduardo"
// }

// const b = a

// console.log(a)
// console.log(b)

// console.log(a === b)

// a.age = 21

// console.log(a)
// console.log(b)

// delete b.age 

// console.log(a)
// console.log(b)

// // 10 - loop em array
// const user = ["Eduardo", "Lucca", "Thomas", "Miguel",]

// for(let i = 0; i < user.length; i++) {
//     console.log(`Listando o usuário: ${user[i]}`)
// }

// 11 - push e pop
// const array = ["a", "b", "c"]

// array.push("d")
// console.log(array)

// console.log(array.length)

// array.pop()

// console.log(array)

// const itemRemovido = array.pop()

// console.log(itemRemovido)
// console.log(array)

// array.push("z", "x", "y")

// console.log(array)

// // 12 - shift e unshift
// const letters = ["a", "b", "c"]

// const letter = letters.shift()
// console.log(letter)
// console.log(letters)

// letters.unshift("p", "q", "r")
// letters.unshift("z")

// console.log(letters)

// // 13 - indexOf e lastIndexOf
// const myElements = ["Morango","Maça","Melancia","Mamão","Uva"]

// console.log(myElements.indexOf("Maça"))
// console.log(myElements.indexOf("Mamão"))

// console.log(myElements[4])
// console.log(myElements[myElements.indexOf("Uva")])

// console.log(myElements.lastIndexOf("Uva"))

// console.log(myElements.lastIndexOf("Banana"))

// console.log(myElements.indexOf("Banana"))

// 14 - slice
// const testeSlice = ["a", "b", "c", "d", "e", "f"]

// const subArray = testeSlice.slice(2, 4)

// console.log(subArray)

// console.log(testeSlice)

// const subArray2 = testeSlice.slice(2, 4 + 1)

// console.log(subArray2)

// const subArray3 = testeSlice.slice(10, 20)

// console.log(subArray3)

// const  subArray4 = testeSlice.slice(2)

// console.log(subArray4)

// // 15 - foreach
// const nums = [1, 2, 3, 4, 5]

// nums.forEach((numero) => {
//     console.log(`O número é ${numero}`)
// })

// const post = [
//     { title: "Primeiro post", category: "PHP"},
//     { title: "Segundo post", category: "Java"},
//     { title: "Terceiro post", category: "JavaScript"},
//     { title: "Quarto post", category: "TypeScript"},
// ]

// post.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria ${post.category}.`)
// })

// // 16 - includes
// const brands = ["BMW", "AUDI", "MERCEDES",]

// console.log(brands.includes("AUDI"))


// console.log(brands.includes("KIA"))

// if(brands.includes("BMW")) {
//     console.log("Há carros da marca BMW!")
// }

// 17 - reverse
// const reverseTest = [1, 2, 3, 4, 5]

// reverseTest.reverse()

// console.log(reverseTest)

// // 18 - trim
// const trimTest = "  testando \n  "

// console.log(trimTest)

// console.log(trimTest.trim())

// console.log(trimTest.length)

// console.log(trimTest.trim().length)

// // 19 - padstart
// const testePadStart = "1"

// const newNumber = testePadStart.padStart(4, "0")

// console.log(testePadStart)

// console.log(newNumber)

// const testePadEnd = newNumber.padEnd(10, "0")

// console.log(testePadEnd)

// // 20 - split
// const frase = "Hello World"

// const arrayDaFrase = frase.split(" ")

// console.log(arrayDaFrase)

// // 21 - join
// const fraseDenovo = arrayDaFrase.join(" ")

// console.log(fraseDenovo)

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`
// console.log(fraseDeCompra)

// // 22 - repeat
// const palavra = "Testando "

// console.log(palavra.repeat(10))

// // 23 - rest operator

// const somaInfinita = (...args) => {

//     let total = 0

//     for (let i = 0; i < args.length; i++) {

//         total += args[i]
//     }
//     return total
// }

// console.log(somaInfinita(1, 2, 3))

// console.log(somaInfinita(1, 20, 34, 5000, 12145, 2002, 23241, 100))

// 24 - for of
const somaInfinita2 = (...args) => {

    let total = 0

    for (num of args) {
        total += num
    }
    return total
}

console.log(somaInfinita2(1, 2, 4))
console.log(somaInfinita2(1, 2, 4, 10, 40, 90))

// 25 - destructuring em objetos
const userDetails = {
    firstName: "Eduardo",
    lastName: "Aparecido",
    job: "Programador"
}

const { firstName, lastName, job } = userDetails

console.log(firstName, lastName, job)

// renomear variaveis
const { firstName: primeiroNome } = userDetails
console.log(firstName)

// 26 - destructuring com arrays
const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON
const myJson = '{"name": "Eduardo", "age": 21, "skills": ["PHP", "JavaScript", "Python"]}'

console.log(myJson)

console.log(typeof myJson)

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson)

console.log(myObject)

console.log(myObject.name)

console.log(typeof myObject)

// JSON invalido
const badJson = '{"name": Eduardo, "age": 21}'

// const myBadObject = JSON.parse(badJson) 

myObject.isOpenToWork = true

console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)