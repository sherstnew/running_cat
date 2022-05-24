window.onload = function() {
    var place = 0
    var pos1 = ''
    var pos2 = ''
    const min = 10;
    const max = 80;
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
                pos1 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
                pos2 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
                entity.style.top = pos1
                entity.style.left = pos2
                counter += 1
                break
            case 3:
                pos1 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
                pos2 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
                entity.style.top = pos1
                entity.style.left = pos2
                counter += 1
                break
            case 4:
                pos1 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
                pos2 = Math.floor(Math.random() * (max - min + 1)) + min + '%';
                entity.style.top = pos1
                entity.style.left = pos2
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
                    body.style.background = 'black'
                    console.log('boo');
                        setTimeout(function(){
                            location.href = '/'
                        }, 1000)
                }, 2000)
            }, 3000)
            
        }
    }
    }
    
    
    }