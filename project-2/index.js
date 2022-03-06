let btn_change_color = document.querySelector('.btn-change-color');
console.log(btn_change_color);
const color = ['#e6380f', '#333333', '#35bbcb', '#5053a2', '#a07859', '#ffffff', "#7bbbf2"];
let hexaColor = document.querySelector('.hexa-color');
let background = document.querySelector('.change-hexa-color')

btn_change_color.onclick = function() {
    const indexRandom = Math.floor(Math.random() * color.length);
    background.style.backgroundColor = color[indexRandom]
    hexaColor.textContent = color[indexRandom]
}