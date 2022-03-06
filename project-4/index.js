let textNumber = document.querySelector('.result-number')
let value = 0;
let btnIncrease = document.querySelector('.increase');
let btnDecrease = document.querySelector('.decrease')
btnIncrease.onclick = function() {
    value++;
    textNumber.innerHTML = value;
}
btnDecrease.onclick = function() {
    value--;
    textNumber.innerHTML = value;
}