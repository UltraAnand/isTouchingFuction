var fixedrect, movingrect;


function setup() {
  createCanvas(800, 400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200, 300, 50, 25)
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;

  console.log("Moving Rect (" + movingrect.x + ", " + movingrect.y + ")");
  console.log("Fixed Rect Rect (" + fixedrect.x + ", " + fixedrect.y + ")");
  console.log("Widths sum " + fixedrect.width / 2 + movingrect.width / 2);
  console.log("heights sum " + fixedrect.height / 2 + movingrect.height / 2);

  if (isRectangleTouching(fixedrect, movingrect)) {
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";

  } else {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";

  }
}



//function isCircleTouching(c1, c2) {
//  var distance = sqrt(power((c1.x - c2.x), 2) + power((c1.y - c2.y), 2));
//  if (distance < (c1.width / 2 + c2.width / 2)) {
//    return true;
 // } else {
 //   return false;
////  }
//}