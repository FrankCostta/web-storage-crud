const newRegist = document.querySelector('.new-registration')
const modalClose = document.querySelector('#modal-close');

const inputName = document.querySelector('#nome');
const inputPreco = document.querySelector('#preco');


// Abre modal
newRegist.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block';
});

// Fecha modal
modalClose.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
    inputName.value = inputPreco.value = '';
});