function preload() {
  sunimg = loadImage("sun.jpeg");
  girrafeimg = loadImage("girrafe.jpeg")

}


function setup() {
  createCanvas(500, 500);



}

function draw() {

  background(255);

  question1()



  drawSprites();


}


function question1() {

  textSize(20);
  text("Who is the tallest ?" ,180,60);
  
  p1 = createSprite(200, 150, 10, 10)
  p1.addImage("c", sunimg);
  p1.scale = 0.1;


  p2 = createSprite(400, 200, 20, 20)
  p2.addImage("a", girrafeimg);
  p2.scale = 0.2;
  
  


  if (mousePressedOver(p1) || touches.length>0 ) 
  {
    text("correct", 20, 20);
    touches = []
    
  }

}