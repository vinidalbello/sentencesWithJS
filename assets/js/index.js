const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) { // Usa da repetição para aparecer as frases criadas
    let { tag, texto } = elementos[i]; // Atribuição via desestruturação
    let tagCriada = document.createElement(tag); // Pega a tag do objeto e cria o elemento dado ao valor dela
    tagCriada.innerText = texto; // Insere o texto da tag
    div.appendChild(tagCriada); // Adiciona a tag e o texto 
    console.log(tag);
}

container.appendChild(div);