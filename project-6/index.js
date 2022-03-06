let btnPrev = document.querySelector('.btn-prev')
let btnNext = document.querySelector('.btn-next')
let namePeople = document.querySelector('.name');
let image = document.querySelector('.image')
let favourite = document.querySelector('.favourite')
const listPeople = [
    { name: 'Nathan', favourite: 'My favourite is soccer', image: '../image/phone1.jpg' },
    { name: 'Peter', favourite: 'My favourite is baseketball', image: '../image/phone2.jpg' },
    { name: 'Sisoko', favourite: 'My favourite is volleybal', image: '../image/phone3.jpg' },
    { name: 'Ronaldo', favourite: 'My favourite is badminton', image: '../image/phone4.jpg' }
]
let index = 0;
btnPrev.onclick = function() {
    index--;
    if (index < 0) {
        index = listPeople.length - 1;
    }
    namePeople.innerHTML = listPeople[index].name;
    image.src = listPeople[index].image;
    image.style.animation = 'imageTransition linear 0.4s';
    favourite.innerHTML = listPeople[index].favourite
    setTimeout(function() {
        image.style.animation = 'none';
    }, 400)
}
btnNext.onclick = function() {
    index++;
    if (index == listPeople.length) {
        index = 0;
    }
    namePeople.innerHTML = listPeople[index].name;
    image.src = listPeople[index].image;
    image.style.animation = 'imageTransition linear 0.4s';
    setTimeout(function() {
        image.style.animation = 'none';
    }, 400)
    favourite.innerHTML = listPeople[index].favourite
}