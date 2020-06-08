let size = 1050;
let x = 150;
let y = 150;
function setup() {
    const canv =  createCanvas(windowWidth, windowHeight);
    canv.style('display', 'block');
    background(0);
    stroke(255);
    strokeWeight(2);
  
    translate(windowWidth/3, windowHeight/3);
  
    
  }
  
function draw() {
    cantor(x,y,size);
    /* y++; */
    /* x++; */
    /* size+=100; */
  }
  
function cantor(x,y,len){
    if (len >=1) {
        line(x, y, x+len, y);
        y+=45;
        cantor(x,y,len/3);
        cantor(x + 2*len/3,y, len/3);
    }
}