let all = document.querySelector('.btn-all')
let cake = document.querySelector('.btn-cake')
let cupCake = document.querySelector('.btn-cupcake')
let image_cake = document.querySelectorAll('.image-cake')
let modal = document.querySelector('.modal')
let modal_box = document.querySelector('.modal-box')
let exit = document.querySelector('.exit')
let btnPrev = document.querySelector('.control-prev')
let btnNext = document.querySelector('.control-next')
let inputSearch = document.querySelector('.search__input')
let indexImage = 0;
let btnControl = document.querySelectorAll('.btn')
let listNameProduct = document.querySelectorAll('.name-product')
let sourceImage = ''
let listCake = document.querySelectorAll('.cake-item')
const listImageProduct = ['cake-1.jpeg', 'cake-2.jpeg', 'cake-3.jpeg',
    'cupcake-1.jpeg', 'cupcake-2.jpeg', 'cupcake-3.jpeg',
    'sweets-1.jpeg', 'sweets-2.jpeg', 'sweets-3.jpeg'
]
image_cake.forEach(cake => {
    cake.onclick = function(e) {
        modal.style.display = 'block';
        modal_box.style.display = 'block';
        modal_box.style.backgroundImage = `url('${e.target.src}')`;
        let indexStartImage = e.target.src.indexOf('/image');
        let sourceImage = e.target.src.slice(indexStartImage + 7)
        for (let i = 0; i < listImageProduct.length; i++) {
            if (listImageProduct[i] == sourceImage) {
                indexImage = i;
                break;
            }
        }
        console.log(sourceImage)
    }
})
exit.onclick = function() {
    modal.style.display = 'none';
    modal_box.style.display = 'none'
}
btnPrev.onclick = function() {
    indexImage--;
    if (indexImage < 0) {
        indexImage = listImageProduct.length - 1;
    }
    modal_box.style.backgroundImage = `url('../image/${listImageProduct[indexImage]}')`;
}
btnNext.onclick = function() {
    indexImage++;
    if (indexImage == listImageProduct.length) {
        indexImage = 0;
    }
    modal_box.style.backgroundImage = `url('../image/${listImageProduct[indexImage]}')`;
}
Array.from(btnControl).forEach(btn => {
    btn.onclick = function(e) {
        Array.from(listCake).forEach(cake => {

            document.querySelector('.active').classList.remove('active')
            e.target.classList.add('active');

            let name_filter = btn.dataset.filter;
            if (cake.dataset.item === name_filter || name_filter === 'all') {
                cake.style.display = 'flex';
            } else {
                cake.style.display = 'none';
            }
        })
    }
})
inputSearch.onkeydown = function() {
    listCake.forEach(product => {
        let item = product.dataset.item
        if (item.includes(inputSearch.value)) {
            product.style.display = 'flex'
        } else {
            product.style.display = 'none'
        }
    })
}