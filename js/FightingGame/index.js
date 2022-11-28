const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')



canvas.width = 1042
canvas.height = 576
const gravity = 0.2
const movespeed = 4
let lastkey
var isgroudet
//custom sprite class
class Sprite {
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    render(col) {
        c.fillStyle = col
        c.fillRect(this.position.x, this.position.y, 50, this.height)

    }
    update(col){
        this.render(col)
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
    
        if (this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
            isgroudet = true
        } else {
            this.velocity.y += gravity }
    }
}
//define player and enemy
const player = new Sprite({
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0}
    
})

const enemy = new Sprite({
    position: { x: 992, y: 0 },
    velocity: { x: 0, y: 0}
})

const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    w:{
        pressed: false
    }
}

    //render player
//player.render('blue')
//enemy.render('red')

console.log(player)
function loop(){
    window.requestAnimationFrame(loop)
    c.fillStyle = 'black'  
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    player.update('blue')
    enemy.update('red')

    player.velocity.x = 0
    if(keys.a.pressed && lastkey === 'a') {
        player.velocity.x = -movespeed
    } else if (keys.d.pressed && lastkey === 'd') {
        player.velocity.x = movespeed
    } 
}
loop()
window.addEventListener('keydown', (event) => {
    switch (event.key){
        case 'd':
            keys.d.pressed = true
            lastkey = 'd'
        break;
        case 'a':
            keys.a.pressed = true
            lastkey = 'a'
        break;
        case 'w':{
            keys.w.pressed = true
            player.velocity.y = -10
        break;
        }
    }
    console.log(event.key)
})
window.addEventListener('keyup', (event) => {
    switch (event.key){
        case 'd':
            keys.d.pressed = false
        break;
        case 'a':
            keys.a.pressed = false
        break;
        case 'w':
            keys.w.pressed = false
        break; 
    }
})