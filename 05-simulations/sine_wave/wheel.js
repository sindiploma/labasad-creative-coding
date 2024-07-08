class Wheel {
    constructor(angle) {
    }
  
    update(angle) {
        noFill();
        stroke(255, 100);
        ellipse(width/5, height/2, 200, 200);
  
        noStroke();
        fill(255, 100);
        textAlign(RIGHT);
        text(0, width/5 + 100 - 10, height/2);
        textAlign(CENTER);
        text('Π/2', width/5, height/2 - 100 - 10);
        textAlign(RIGHT);
        text('Π', width/5 - 100 - 10, height/2);
        textAlign(CENTER);
        text('3Π/2', width/5, height/2 + 100 + 10 + 10);
  
        noStroke();
        fill(255);
        ellipse(width/5, height/2, 4, 4);
  
        let x = cos(angle) * 100 + width/5;
        let y = sin(angle) * 100 + height/2;
        ellipse(x, y, 4, 4);
  
        stroke(255, 100);
        line(width/5, height/2, x, y);
        line(x, y, x, height/2);
        line(width/5, height/2, x, height/2);
  
        fill(255,100);
        text(1, width/5 + 100 + 20, height/2 - 100 - 10);
        text(-1, width/5 + 100 + 20, height/2 + 100 + 10 + 10);
  
        stroke(255,80);
        line(x, y, width/5 + 100 + 20, y);
    }
  }