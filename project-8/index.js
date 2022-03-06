const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');
const itemSlide = document.querySelectorAll('.slide-item');
const listSlide = document.querySelector('.list-slide')
const widthTotal = document.querySelector('.container')

function make_slide(amountSlider) {
    let widthSlideMargin = widthTotal.offsetWidth / amountSlider;
    let widthAllBox = widthSlideMargin * itemSlide.length;
    listSlide.style.width = `${widthAllBox}px`;
    Array.from(listSlide).forEach(function(slide) {
        slide.style.width = `${widthSlideMargin -20}px`;
        slide.style.margin = '20px';
    })

    let widthTranslate = 0;
    btnNext.onclick = function() {
        let stop = widthAllBox - amountSlider * widthSlideMargin;
        widthTranslate += widthSlideMargin;
        if (widthTranslate > stop) {
            widthTranslate = 0;
        }
        listSlide.style.transform = `translateX(${-widthTranslate}px)`
    }
    btnPrev.onclick = function() {
        let stop = widthAllBox - amountSlider * widthSlideMargin;
        widthTranslate -= widthSlideMargin;
        if (widthTranslate < 0) {
            widthTranslate = stop;
        }
        listSlide.style.transform = `translateX(${-widthTranslate}px)`
    }
}
make_slide(3)