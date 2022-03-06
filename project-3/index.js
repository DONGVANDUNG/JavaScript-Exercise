let btn_submit = document.querySelector('.submit-message')
let textSubmit = document.querySelector('.text-submited')
btn_submit.onclick = function() {
    let value = document.querySelector('.input').value;
    if (value) {
        textSubmit.innerHTML = value;
        document.querySelector('.input').value = ''
    }
}