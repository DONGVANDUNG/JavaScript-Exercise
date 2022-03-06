const btnAdd = document.querySelector('.btn-add')
const inputField = document.querySelector('.input')
const listItem = document.querySelector('.list-item')

let htmls = '';
//validate Input

//input error
function displayAnounce() {
    if (inputField.value == '') {
        inputField.placeholder = 'Vui lòng nhập lịch trình';
    }
}
//set input default
function inputDefault() {
    inputField.placeholder = 'Input activity';
}

function validatInput() {
    if (inputField.value == '') {
        setTimeout(displayAnounce, 500)
        setTimeout(inputDefault, 5000)
    }
}

// add element to DOM
function addElement(e) {
    if (inputField.value) {
        listItem.insertAdjacentHTML("beforeend",
            `<div class="item">
              <p class="title-schedule">${inputField.value}</p>
            <div class="icon">
              <i class="fa-solid fa-hammer"></i>
              <i class="fa-regular fa-trash-can icon-delete"></i>
            </div>
         </div>`)
    }
    inputField.value = '';
}

btnAdd.addEventListener('click', validatInput);
btnAdd.addEventListener('click', addElement)
inputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        btnAdd.click()
    }
})