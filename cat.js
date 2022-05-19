window.onload = function() {

var place = 0
const cat = document.querySelector('#cat')
const meow = document.querySelector('.meow')
const mur = document.querySelector('.mur')
const text = document.querySelector('.click')

cat.addEventListener('click', ready)

function ready(){

place = 2
text.style.opacity = 0
cat.style.top = '20%'
cat.style.left = '20%'

cat.addEventListener('mouseover', catmove)

function catmove() {
    switch (place) {
        case 0: 
            cat.style.top = '40%'
            cat.style.left = '40%'
            place = 1
            break
        case 1:
            cat.style.top = '20%'
            cat.style.left = '20%'
            place = 2
            mur.play()
            break
        case 2:
            cat.style.top = '40%'
            cat.style.left = '20%'
            place = 3
            break
        case 3:
            cat.style.top = '40%'
            cat.style.left = '60%'
            place = 4
            break
        case 4:
            cat.style.top = '20%'
            cat.style.left = '60%'
            place = 0
            meow.play()
            break

    }
}
}


}