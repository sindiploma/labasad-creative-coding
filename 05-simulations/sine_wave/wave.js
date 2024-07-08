class Wave {
    constructor(_steps, _delay) {
        this.steps = _steps,
        this.delay = _delay
    }

    update(angle) {
        let angle2 = angle;
        let angle3 = angle;
        let space = (width - (width/5 + 100 + 20))/steps;
        
        if (this.steps) {
            for (let i = 0; i < steps; i++) {
                noStroke();
                fill(255);

                let x = width/5 + 100 + 20 + space*i;
                let y = sin(angle2) * 100 + height/2;
                let d = 4;

                ellipse(x, y, d, d);
                angle2 += increment+this.delay;
            }
        }
        
        
        stroke(255, 80);
        noFill();
        beginShape();
        for (let i = 0; i < steps; i++) {
            let x = width/5 + 100 + 20 + space*i;
            let y = sin(angle3) * 100 + height/2;
            vertex(x, y);
            angle3 += increment+this.delay;
        }
        endShape();
    }
}