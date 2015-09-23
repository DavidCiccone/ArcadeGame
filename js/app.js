// Enemies our player must avoid
var Enemy = function Enemy(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
  
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

//Bug speed
this.x = this.x + (Math.random() * (500 - 1)) * dt;
    //Resets bugs back to the start at or behind -120 px
    if (this.x > 800) {
       this.x = ((Math.random() * 500) && -120);
        }
    }

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//  ---Player Class---
var Player = function Player(x, y) {
this.x = 200;
this.y = 400;
this.sprite = 'images/char-boy.png';

}

Player.prototype.update = function()  {}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//var enemyGroup = allEnemies;
  //  var playerCol = Player;
    //var dims = {x: 50, y: 50, w: 50, h: 50};
    //if (enemyGroup.x < playerCol.x + playerCol.w &&
      //  enemyGroup.x + enemyGroup.w > playerCol.x &&
       // enemyGroup.y < playerCol.y + playerCol.h &&
      //  enemyGroup.h + enemyGroup.y > playerCol.y) {
      //  this.x = 200;
       // this.y = 400;
    //}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//player movement
Player.prototype.handleInput = function(directionKey) {

if(directionKey === 'left'){
this.x -= 100;
    }
    if(directionKey === 'right'){
this.x += 100;
    } 
if(directionKey === 'up'){
this.y -= 90;
    }
    if(directionKey === 'down'){
this.y += 90;
    }
}



//keeps player within canvas boundaries


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy (-400,65), new Enemy (-275,145), new Enemy (-120,225), new Enemy (-650,145), new Enemy (-1000,65)];


var player = new Player();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

