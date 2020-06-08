let divisiones = 15;
let angulo = 360 / divisiones;

function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'flex');
  background(10,2,20);
  strokeWeight(4);
  angleMode(DEGREES);
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  for (let i = 0; i < divisiones; i++) {
    
    rotate(angulo);
    let mx= mouseX - windowWidth/2;
    let my= mouseY - windowHeight/2;
    let pmx= pmouseX - windowWidth/2;
    let pmy= pmouseY - windowHeight/2;


    if (mouseIsPressed){
      
      stroke( map(mouseX, 0, windowWidth, 100, 255), 0, map(mouseY, 10, windowHeight, 0, 255));
      
      line(mx, my, pmx, pmy);

      push();
      scale(1, -1);
      line(mx, my, pmx, pmy);
      pop();

    
    }
    
  }
  
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}