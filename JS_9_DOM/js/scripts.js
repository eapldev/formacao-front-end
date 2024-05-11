// 1 - movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando elemento por id
const title = document.getElementById("title");

console.log(title);

// 4 - selecionando elemento por classe
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - selecionando os elementos por css
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - replaceChild
const h1 = document.createElement("h1");

h1.textContent = "Meu novo título!";

header.replaceChild(h1, title);

// 9 - createTextNode
const myText = document.createTextNode("Novo título adicionado");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute(
  "href",
  "https://www.linkedin.com/in/eduardo-aparecido-4bbb75246/"
);

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// 11 - altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - posição do elemento
const product = products[0];

console.log(product.getBoundingClientRect());

// 13 - css com js
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
// mainContainer.stye.paddingBottom = "5px";

// 14 - alterando estilos de vários elementos
for (const li of listItens) {
  li.style.backgroundColor = "purple";
}
