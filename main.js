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

let id = 0;
function setDataStorage() {
    const name = document.querySelector('#nome').value;

    if (getDataStorage() == null) {}
    const data = getDataStorage() + name
    
    localStorage.setItem('database', data)
}

function getDataStorage() {
    return localStorage.getItem('database');
}

function setTemplate(id, info) {
    return(`
        <div class="logbar">
            <div class="info-bar">
                <div class="id-box">${id}</div>
                <div class="description-box">${info}</div>
            </div>
            <div class="options-bar">
                <button class="rename"><i class="fa fa-edit"></i></button>
                <button class="delete"><i class="fa fa-trash"></i></button>
            </div>
        </div>
    `);
}