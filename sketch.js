let vel = 0; 
let r, g; 
let mode;
let hue = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
    background(0,255);
  smooth();
  r = 0; 
  g = 255; 
  
  

}

function draw(){

  
  if (mode === 'ellipse') {
   
    noStroke()
   smooth();
   count = (frameCount%600)<255 ? frameCount%500 : 500-(frameCount%500)
   drawGradient(mouseX, mouseY, count)
  }
  
  if (mode === 'line') {
    blendMode(LIGHTEST);
    line(mouseX,mouseY,pmouseX,pmouseY);
     line(mouseX,height-mouseY,pmouseX,height-pmouseY);
	 line(width-mouseX,mouseY,width-pmouseX,pmouseY);
	 line(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);
       
     line(mouseX,mouseY,width/2,height/2);  
     line(mouseX,height-mouseY,width/2,height/2);
	 line(width-mouseX,mouseY,width/2,height/2);
	 line(width-mouseX,height-mouseY,width/2,height/2);
     stroke(r,g,255);
	 strokeWeight(0.3); 
    let X = abs(mouseX - pmouseX);
    let Y = abs(mouseY - pmouseY);
    let vel = floor(X + Y);
  
    if (vel > 3) {
        r+= vel/4; 
        g-= vel/2; 
      } else { 
        r--; 
        g++; 
      }
    r = constrain(r, 0, 255);
    g = constrain(g, 0, 255);
  }
  
  if (mode === 'one') {
    
    blendMode(SCREEN);

    variableEllipse(mouseX,mouseY,pmouseX,pmouseY);
     variableEllipse(mouseX,height-mouseY,pmouseX,height-pmouseY);
	 variableEllipse(width-mouseX,mouseY,width-pmouseX,pmouseY);
	 variableEllipse(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);
       
     variableEllipse(mouseX,mouseY,width/2,height/2);  
     variableEllipse(mouseX,height-mouseY,width/2,height/2);
	 variableEllipse(width-mouseX,mouseY,width/2,height/2);
	 variableEllipse(width-mouseX,height-mouseY,width/2,height/2);
    
    
    
  }
  
  if (mode === 'neon') {
    
   
    push();
    blendMode(DIFFERENCE);
    colorMode(HSB, 360, 100, 100, 100);
	drawingContext.shadowBlur = 50;
    drawingContext.shadowColor = color( 220, 100, 100);
    
    
	stroke(10, 255);
	strokeWeight(1);
    
    line(mouseX,mouseY,pmouseX,pmouseY);
     line(mouseX,height-mouseY,pmouseX,height-pmouseY);
	 line(width-mouseX,mouseY,width-pmouseX,pmouseY);
	 line(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);
       
     line(mouseX,mouseY,width/2,height/2);  
     line(mouseX,height-mouseY,width/2,height/2);
	 line(width-mouseX,mouseY,width/2,height/2);
	 line(width-mouseX,height-mouseY,width/2,height/2);
    
    hue += 10;
    
    pop();
    
   }
   
  if (mode === 'neonellipse') {
    
   
    push();
    blendMode(SCREEN);
    colorMode(HSB, 360, 100, 100, 100);
	drawingContext.shadowBlur = 50;
    drawingContext.shadowColor = color( 210, 100, 100);
    
    
	stroke(5, 200);
	strokeWeight(5);
    
    line(mouseX,mouseY,pmouseX,pmouseY);
   line(mouseX,height-mouseY,pmouseX,height-pmouseY);
	 line(width-mouseX,mouseY,width-pmouseX,pmouseY);
	 line(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);
       

    
    hue += 10;
    
    pop();
    
   }
  
     
}

function drawGradient(x, y, count) {
  let radius = 20;
	ellipseColor = color(x, 50, 220, y);
	
  for (let r = 0; r < radius; r++) {
    ellipseColor.setAlpha(9);
		fill(ellipseColor)
        ellipse(x, y, r, r);
		ellipse(width-x, y, r, r)
		ellipse(x, height-y, r, r)
		ellipse(width-x, height-y, r, r)
  }

}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  noStroke();
  fill(r,g,255,random(10,200));
  ellipse(x, y, speed/20, speed/20);
}


function keyPressed() {
  switch (key) {
		
		case '1':
			mode = 'ellipse'
			break
			
		case '2':
			mode = 'line'
			break
            
        case '3':
			mode = 'one'
			break
			
        case '4':
			mode = 'neon'
			break
            
        case '5':
			mode = 'neonellipse'
			break
  }
   if (key === 'c') {
    clear();
   background(0);
  }
	 if (key === 's') {
    save(`${(new Date()).toISOString()}.png`)
    }
   }
  