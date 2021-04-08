//Inital start location for the circle and variables that dictate circle position.
var x = 750;
var y = 360;
//scale var for distance between dots
var distB = 10;
//Count variable for switch statment
var count = 0;
//The size of the circle being drawn
var circlSiz = 100;

//Setting up the canvas and an event listener for the screenshot
function setup() {
    createCanvas(windowWidth, windowHeight);
    document.addEventListener("keydown", function(scshot) {
	if (scshot.ctrlKey && scshot.altKey && scshot.key === "s") {
	    saveCanvas('myCoolImage', 'jpg');
	}
    });
}

//Responding to a new window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//Checking if the inter-dot distance is below one and if circle size
//is below one
function checkNeg() {
    if (distB == 0) {
	distB++;
	console.log('The distance between the dots is now: 1')
    }
    if (circlSiz == 0) {
	circlSiz++;
	console.log('The size of the dot is now: 1');
    }
}

//Handling all of the keypresses
function keyPressed() {
    //Logic block for changing circle position using the arrow keys
    switch (keyCode) {
    case UP_ARROW:
	y -= distB;
	break;
    case DOWN_ARROW:
	y += distB;
	break;
    case LEFT_ARROW:
	x -= distB;
	break;
    case RIGHT_ARROW:
	x += distB;
	break;
    case 16:
	//Shift key to reset circle position
	x = 750;
	y = 360;
	break;
    case 87:
	//W key to increment distance
	distB += 1;
	console.log(`The distance between dots is now: ${distB}`);
	break;
    case 83:
	//S key to decrement distance
	distB -= 1;
	console.log(`The distance between dots is now: ${distB}`);
	break;
    case 8:
	//Backspace to clear
	background(255);
	break;
    case 13:
	//Enter to clear and re center
	background(255);
	x = 750;
	y = 360;
	break;
	// Setting dot color
    case 50:
	count++;
	break;
    case 49:
	count--;
	break;
    case 88:
	// X key to increase size
	circlSiz++;
	console.log(`The size of the dot is: ${circlSiz}`);
	break;
    case 90:
	// Z key to decrease size
	circlSiz--;
	console.log(`The size of the dot is: ${circlSiz}`);
	break;
    case 67:
	//C key for size reset
	circlSiz = 100;
	console.log(`The size of the circle is: ${circlSiz}`);
	break;
    }
    checkNeg();
}

function draw() {
    //drawing circles
    ellipse(x, y, circlSiz, circlSiz);
    //switch for changing color
    switch (count) {
    case 0:
	//white
	fill(255, 255, 255);
	break;
    case 1:
	//purple
	fill(191, 0, 255);
	break;
    case 2:
	//blue
	fill(0, 246, 255);
	break;
    case 3:
	//orange
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

