window.onload = function() {

var place = 0
const entity = document.querySelector('#entity')
const text = document.querySelector('.click')

entity.addEventListener('click', ready)

function ready(){

place = 2
text.style.opacity = 0
entity.style.top = '30%'
entity.style.left = '30%'

entity.addEventListener('mouseover', entitymove)

function entitymove() {
    switch (place) {
        case 0: 
            entity.style.top = '50%'
            entity.style.left = '40%'
            place = 1
            break
        case 1:
            entity.style.top = '30%'
            entity.style.left = '20%'
            place = 2
            break
        case 2:
            entity.style.top = '50%'
            entity.style.left = '20%'
            place = 3
            break
        case 3:
            entity.style.top = '50%'
            entity.style.left = '60%'
            place = 4
            break
        case 4:
            entity.style.top = '30%'
            entity.style.left = '60%'
            place = 0
            break

    }
}
}


}