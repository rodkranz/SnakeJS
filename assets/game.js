/**
 * Created by rlopes on 26/01/2017.
 */
var snake;
var scl = 20;
var food;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();

    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);

    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
    snake.update();
    snake.show();

    if (snake.eat(food)) {
        pickLocation();
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            snake.dir(0, -1);
            break;
        case DOWN_ARROW:
            snake.dir(0, 1);
            break;
        case RIGHT_ARROW:
            snake.dir(1, 0);
            break;
        case LEFT_ARROW:
            snake.dir(-1, 0);
            break
    }
}
