"use strict";
// Enemies our player must avoid
var Enemy = function Enemy(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 171;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //Moves the bugs and set their speed
    var max = 500;
    var min = 1;
    this.x = this.x + Math.floor(Math.random() * (max - min) + min) * dt;

    //Resets bugs back to the start at or behind -120 px
    if (this.x > 800) {
        this.x = ((Math.random()) && -120);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//  ---Player Class---
var Player = function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 171;
    this.sprite = 'images/char-boy.png';

};

var score = 1; //score increment

Player.prototype.update = function() {
    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.

    //keeps player within canvas boundaries
    if (this.x >= 555) {
        this.x = 500;
    }
    if (this.x <= 0) {
        this.x = 0;
    }
    if (this.y > 400) {
        this.y = 400;
    }





    //Resets the player once it hits the water and adds 1 to the score
    if (this.y < 0) {
        this.x = 200, this.y = 400;
        document.getElementById("score").innerHTML = score++;
                    }


    //Enemy collision detection
    for (var i = 0; i < allEnemies.length; i++) {
        if (this.x < allEnemies[i].x && this.x > allEnemies[i].x - this.width && this.y < allEnemies[i].y && this.y > allEnemies[i].y - this.height) {
            this.x = 200, this.y = 400;
        }
    }
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(Key) {
    //player movement keys
    if (Key === 'left') {
        this.x -= 100;
    }
    if (Key === 'right') {
        this.x += 100;
    }
    if (Key === 'up') {
        this.y -= 90;
    }
    if (Key === 'down') {
        this.y += 90;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-400, 65), new Enemy(-275, 145), new Enemy(-120, 225), new Enemy(-650, 145), new Enemy(-1000, 65), new Enemy(-850, 65)];
var player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


