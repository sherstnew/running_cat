window.onload = function() {

    var place = 0
    var counter = 0
    const entity = document.querySelector('#entity')
    const text = document.querySelector('.click')
    const body = document.querySelector('body')
    const toogle = document.querySelector('.toogle')
    const menu = document.querySelector('.menu')
    const satan = document.querySelector('.satan')
    
    entity.addEventListener('click', ready)
    
    function ready(){
    
    entity.style.animation = 'none'

    place = 2
    text.style.opacity = 0
    text.style.animation = 'none'
    entity.style.top = '30%'
    entity.style.left = '30%'
    
    entity.addEventListener('mouseover', entitymove)
    entity.addEventListener('click', entitymove)
    
    function entitymove() {
        switch (place) {
            case 0: 
                entity.style.top = '70%'
                entity.style.left = '40%'
                place = 1
                counter += 1
                break
            case 1:
                entity.style.top = '30%'
                entity.style.left = '20%'
                place = 2
                counter += 1
                break
            case 2:
                entity.style.top = '60%'
                entity.style.left = '20%'
                place = 3
                counter += 1
                break
            case 3:
                entity.style.top = '70%'
                entity.style.left = '60%'
                place = 4
                counter += 1
                break
            case 4:
                entity.style.top = '10%'
                entity.style.left = '60%'
                place = 0
                counter += 1
                break
    
        }

        if (counter == 5) {
            body.style.background = '#B33030'
            toogle.style.display = 'none'
            menu.style.display = 'none'
            satan.style.opacity = 0.4
            entity.style.color = 'white'
            entity.style.animation = 'hide 4s'
            setTimeout(function() {
                entity.style.opacity = 0
                setTimeout(function(){
                    body.style.animation = 'hide 3s'
                        setTimeout(function(){
                            location.href = '/'
                        }, 1000)
                }, 2000)
            }, 3000)
            
        }
    }
    }
    
    
    }