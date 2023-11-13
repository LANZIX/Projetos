// Conexão com elementos HTML
// Encapsulando os elementos em uma variável

// Filtro de pesquisa
const filter = document.getElementById('filter')
// Formulário para add item
const form = document.getElementById('addForm')
// lista para receber novos itens adicionados
const list = document.getElementById('items')

filter.addEventListener('keyup', filtraritem);

form.addEventListener('submit', addItem);

list.addEventListener("click", reomoveitem);

function filtraritem(){};

// Função para adicionar um novo item
function addItem(evento){
    // Salvar variaveis sem precisar de database
    evento.preventDefault();
    /* Passo a Passo
    1 - criar li
    2 - atribuir classes
    3 - inserir valor
    4 - criar btn e colocar classe
    5 - inserir texto 'x' */

    // Receber o valor do campo input
    const textoItem = document.getElementById('item').value;
    if (textoItem != '') {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    // Inserindo texto no li
    li.appendChild(document.createTextNode (textoItem));
    // Criar elemento button
    const btn = document.createElement('button')
    // Atribuir classes
    btn.className = 'btn btn-danger btn-sm float-end delete';
    btn.appendChild(document.createTextNode('X'));
     // Unindo Butão ao li
    li.appendChild(btn);

    // Adicionar o li á lista
    list.appendChild(li);

    // Resetar o formulário
    form.reset();

}
 else {
    alert ('Digite algo!!')
 }
};

function removeitem(evento){
   /* alert('você clicou em mim')*/
  if (evento.target.classList.contains('delete')){
    // Selecionando o pai do elemento clicado
    let li = evento.target.parentElement;
    list.removeChild(li); // remove o elemento da lista
  }
};