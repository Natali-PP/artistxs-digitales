
const colors = ['#ff6700', "#f3da00", "#00e6ea", "#ff0056", "#ff00cd", "#9b0074", "#9a00ff", "#f1f6fb", "#5573a5", "#190027", "#ffd319", "#8c1eff", "#fffb96", "#b967ff", "#05ffa1", "#b39cf3", "#ff0041"];

function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'flex');
  background(13,2,33);
  strokeWeight(4);
  angleMode(DEGREES);
  //paleta de colores
  
}

function draw() {
  /* console.log(mouseY); */
  let divisiones = Math.random();
  let angulo = 360 / divisiones;
  for (let i = 0; i < colors.length; i++) {
    let rectY=20;
    fill(colors[i]);
    rect(20, i * rectY + 20, 20, 20);
  }
  translate(windowWidth/2, windowHeight/2);
  for (let i = 0; i < divisiones; i++) {
    rotate(angulo);
    let mx= mouseX - windowWidth/2;
    let my= mouseY - windowHeight/2;
    let pmx= pmouseX - windowWidth/2;
    let pmy= pmouseY - windowHeight/2;

    if (mouseIsPressed){
      /* stroke( map(mouseX, 0, windowWidth, 100, 255), 0, map(mouseY, 10, windowHeight, 0, 255));  */ 
      line(mx, my, pmx, pmy);
      push();
      scale(1, -1);
      line(mx, my, pmx, pmy);
      pop();
    }

    if (mouseIsPressed==true && mouseX <= 40 && mouseX >=20) {
      console.log("SI")
      switch (true) {
        case (mouseY>=20 && mouseY <=40 ):
          console.log("COLORRR")
          stroke(colors[0]);
          break;
        case (mouseY>40 && mouseY <=60 ):
          stroke(colors[1]);
          break;
        case (mouseY>60 && mouseY <=80 ):
          stroke(colors[2]);
          break;
        case (mouseY>80 && mouseY <=100 ):
          stroke(colors[3]);
          break;
        case (mouseY>100 && mouseY <=120 ):
          stroke(colors[4]);
          break;
        case (mouseY>120 && mouseY <=140 ):
          stroke(colors[5]);
          break;
        case (mouseY>140 && mouseY <=160 ):
          stroke(colors[6]);
          break;
        case (mouseY>160 && mouseY <=180 ):
          stroke(colors[7]);
          break;
        case (mouseY>180 && mouseY <=200 ):
          stroke(colors[8]);
          break;
        case (mouseY>200 && mouseY <=220 ):
          stroke(colors[9]);
          break;
        case (mouseY>220 && mouseY <=240 ):
          stroke(colors[10]);
          break;
        case (mouseY>240 && mouseY <=260 ):
          stroke(colors[11]);
          break;
        case (mouseY>260 && mouseY <=280 ):
          stroke(colors[12]);
          break;
        case (mouseY>280 && mouseY <=300 ):
          stroke(colors[13]);
          break;
        case (mouseY>300 && mouseY <=320 ):
          stroke(colors[14]);
          break;
        case (mouseY>320 && mouseY <=340 ):
          stroke(colors[15]);
          break;
        case (mouseY>340 && mouseY <=360 ):
          stroke(colors[16]);
          break;
        case (mouseY>360 && mouseY <=380 ):
          stroke(colors[17]);
          break;
        default:
          /* stroke( map(mouseX, 0, windowWidth, 100, 255), 0, map(mouseY, 10, windowHeight, 0, 255)); */
          break;
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}