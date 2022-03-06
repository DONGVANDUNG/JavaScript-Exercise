let btnPrev = document.querySelector('.prev')
let btnNext = document.querySelector('.next')
let image = document.querySelector('.image')
let index = 0;
const imageList = ['../image/phone1.jpg',
    '../image/phone2.jpg',
    '../image/phone3.jpg',
    '../image/phone4.jpg'
]
btnPrev.onclick = function() {
    if (index < 1) {
        index = imageList.length - 1;
    }
    image.animate([{ opacity: '0.3' }, { opacity: '1' }], {
        duration: 3000,
        fill: 'forwards'
    });
    index--;
    image.src = imageList[index];
    image.style.opacity = 1
}
btnNext.onclick = function() {

    if (index == imageList.length - 1) {
        index = 0;
    }
    image.animate([{ opacity: '0.3' }, { opacity: '1' }], {
        duration: 2000,
        fill: 'forwards'
    });
    index++;
    image.src = imageList[index]
}