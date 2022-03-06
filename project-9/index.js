const itemLink = document.querySelectorAll('.description-item');
const listItem = document.querySelectorAll('.list-item')
const active = document.querySelector('.active')

function removeActive() {
    let active = document.querySelector('.active');
    if (active) {
        active.classList.remove('active')
    }
}

function setItem() {
    itemLink.forEach(function(item) {
        item.addEventListener('click', removeActive)
        item.addEventListener('click', function() {
            item.classList.add('active');
            let link = item.nextElementSibling;
            let displayItem = link;
            if (displayItem.style.display == 'block') {
                displayItem.style.display = 'none';
            } else {
                displayItem.style.display = 'block';
            }
        })
    })
}
setItem()