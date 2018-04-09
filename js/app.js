// Enemies our player must avoid
var Enemy = function(x, y, v){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.v = v;
  
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same v for
    // all computers.
    displacement = dt*this.v;
    this.x += displacement;
    if (this.x >= 505){
        this.x = 0;
    }
    checkCollision(this);
};

var checkCollision = function(anEnemy){
    // check for collision between enemy and player (101x171)
    if (player.y + 100 > anEnemy.y + 71
        && player.y + 70 < anEnemy.y + 101 
        && player.x + 75 > anEnemy.x + 26
        && player.x + 25 < anEnemy.x + 76) 
        {
        player.x = 200;
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);   
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){

    this.sprite = "images/char-boy.png";
    this.x = 200;
    this.y = 400;

};

Player.prototype.update = function(dt){
    displacement = dt*250;
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction){
    switch (direction){
        case 'up':
        this.y -= 90;
        break;
        case 'down':
        this.y += 90;
        break;
        case 'left':
        this.x -= 90;
        break;
        case 'right':
        this.x += 90;
        break;
    }

    if (this.y > 400){
        this.y = 400;
    }
    if (this.x < 0){
        this.x = 0;
    }
    if (this.x > 400){
        this.x = 400;
    }
    if (this.y < 0){
        this.x = 200;
        this.y = 400;
    }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(0,50,Math.floor(Math.random()*200)+80), new Enemy(0,140, Math.floor(Math.random()*200)+80), new Enemy(0, 230, Math.floor(Math.random()*200)+80)];
var player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e){
    var allowedKeys ={
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


