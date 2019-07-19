//inital start location for the circle and variables that dictate circle position.
var x = 750;
var y = 360;
//scale var for distance between dots
var distB = 10;
//Count variable for switch statment
var count = 0;
//The size of the circle being drawn
var circlSiz = 100;

function setup() {
    createCanvas(windowWidth, windowHeight )
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    //logic block for changing circle position
    if (keyCode === UP_ARROW) {
        y -= distB;
    } else if (keyCode === DOWN_ARROW) {
        y += distB;
    } else if (keyCode === LEFT_ARROW) {
        x -= distB;
    } else if (keyCode === RIGHT_ARROW) {
        x += distB;
    } else if (keyCode === 16) {
        //shift key to reset circle position
        x = 750;
        y = 360;
    } else if (keyCode === 87) {
        //W key to increment distance
        distB += 10;
        console.log(`the distance between dots = ${distB}`);
    } else if (keyCode === 83) {
        //S key to decrement distance
        distB -= 10;
        console.log(`the distance between dots = ${distB}`);
    } else if (keyCode === 8) {
        //backspace to clear
        background(255);
    } else if (keyCode === 13) {
        //enter to clear and re center
        background(255);
        x = 750;
        y = 360;
    } else if (keyCode === 50) {
        //Logic for changing color switch statment(2 for +,1 for -)
        count++;
    } else if (keyCode === 49) {
        count--;
    } else if (keyCode === 88) {
        //Logic block for changing circle size(z for -, x for +)
        circlSiz++;
    } else if (keyCode === 90) {
        circlSiz--;
    } else if (keyCode === 67) {
        //c key for size reset
        circlSiz = 100;
    }
}

function draw() {
    //drawing circles
    ellipse(x, y, circlSiz, circlSiz);
    //switch for changing color
    switch (count) {
        case 0:
            fill(255, 255, 255);
            break;
        case 1:
            fill(191, 0, 255);
            break;
        case 2:
            fill(0, 246, 255);
            break;
        case 3:
            fill(255, 110, 0);
            break;
    }
    //logic for keeping switch in range
    if (count == -1) {
        count = 0;
    }
    if (count > 3) {
        count = 1;
    }
}