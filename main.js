const newRegist = document.querySelector('.new-registration');
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

function setDataStorage() {
    const productName = document.querySelector('#nome').value;
    const productValue = document.querySelector('#preco').value;
    
    const storageItem = localStorage.getItem('database');
    if (storageItem == null) {
        localStorage.setItem('database', '[]');
    }
    const data = getDataStorage();
    const convertToJson = JSON.parse(data); 
    convertToJson.push({product: productName, price: productValue});
    const convertToString = JSON.stringify(convertToJson);

    // Adiciona um novo array do tipo "object"
    localStorage.setItem('database', convertToString);
}

//Obtem os dados do localStorage
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

function updateDisplay() {
    const data = JSON.parse(getDataStorage());
    const logbox = document.querySelector('.log-box');
    
    for (let i = 0; i < data.length; i++) {
        logbox.innerHTML += setTemplate(data[i].price, data[i].product);
    }
}

updateDisplay();