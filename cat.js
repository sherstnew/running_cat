window.onload = function() {

var place = 0
var pos1 = ''
var pos2 = ''
const min = 10;
const max = 80;
const entity = document.querySelector('#entity')
const text = document.querySelector('.click')

entity.addEventListener('click', ready)

function ready(){

place = 2
text.style.opacity = 0
entity.style.top = '30%'
entity.style.left = '30%'

entity.addEventListener('mouseover', entitymove)
entity.addEventListener('click', entitymove)

function entitymove() {
    switch (place) {
        case 0: 
            pos1 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            pos2 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            entity.style.top = pos1
            entity.style.left = pos2
            place = 1
            break
        case 1:
            pos1 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            pos2 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            entity.style.top = pos1
            entity.style.left = pos2
            place = 2
            break
        case 2:
            pos1 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            pos2 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            entity.style.top = pos1
            entity.style.left = pos2
            place = 3
            break
        case 3:
            pos1 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            pos2 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            entity.style.top = pos1
            entity.style.left = pos2
            place = 4
            break
        case 4:
            pos1 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            pos2 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
            entity.style.top = pos1
            entity.style.left = pos2
            place = 0
            break

    }
}
}


}