// // 1 - métodos

// const animal = {
//   name: "Bob",
//   latir: function () {
//     console.log("Au au");
//   },
// };

// console.log(animal.name);

// animal.latir();

// // 2 - aprofundando em métodos
// const pessoa = {
//   nome: "Eduardo",

//   getNome: function () {
//     return this.nome;
//   },

//   setNome: function (novoNome) {
//     this.nome = novoNome;
//   },
// };

// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// pessoa.setNome("Xibiribi");

// console.log(pessoa.getNome());

// // 3 - prototype

// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const boll = true;

// console.log(Object.getPrototypeOf(boll));

// const arr = [];

// console.log(Object.getPrototypeOf(arr));

// // 4 - mais sobre prototype
// const myObject = {
//   a: "b",
// };

// console.log(Object.getPrototypeOf(myObject));

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) == myObject);

// const cachorro = {
//   raca: null,
//   patas: 4,
// };

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro);

// bulldog.raca = "Bulldog";

// console.log(bulldog);

// // 5 - função como classe - função construtora
// function criarCachorro(nome, raca) {
//   const cachorro = Object.create({});

//   cachorro.nome = nome;
//   cachorro.raca = raca;

//   return cachorro;
// }

// const bob = criarCachorro("Bob", "PastorAlemão");

// console.log(bob);

// const pacoca = criarCachorro("Paçoca", "Pug");

// console.log(pacoca);

// // 6 - funções como classe
// function Cachorro(nome, raca) {
//   this.nome = nome;
//   this.raca = raca;
// }

// const pitBull = new Cachorro("Simba", "PitBull");

// console.log(pitBull);

// // 7 - metodos na função construtora
// Cachorro.prototype.uivar = function () {
//   console.log("Auuuuu");
// };

// pitBull.uivar();

// // 8 - classe ES6
// class ClasseCachorro {
//   constructor(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
//   }
// }

// const jeff = new ClasseCachorro("Jeff", "Husky");

// console.log(jeff);

// // 9 mais sobre classes
// class Caminhao {
//   constructor(eixos, cor) {
//     this.eixos = eixos;
//     this.cor = cor;
//   }

//   descreverCaminhao() {
//     console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//   }
// }

// const volvo = new Caminhao("10", "Preta");

// console.log(volvo);
// volvo.descreverCaminhao();

// // 10 - override
// class Humano {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// const eduardo = new Humano("Eduardo", 21);
// console.log(eduardo);

// 11 - symbol
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 2;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 12 - getter e setter
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPost = new Post("Algum post", "Alguma descrição");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Senior, Pleno, Junior";
console.log(myPost);

// 13 - herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

// 14 - instanceof
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "Husky") instanceof Mamifero);
console.log(Post instanceof Aviao);
