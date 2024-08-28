function setup() {
    createCanvas(windowWidth, windowHeight);
    background(150);

    fill(215,215,215);
    noStroke();
    ellipse(width/2, height/2.4, 500, 500);

    //right eyebrow
    fill(0,0,0);
    noStroke();
    ellipse(width/1.7, height/4, 50, 20);

    //left eyebrow
    fill(0,0,0);
    noStroke();
    ellipse(width/2.4, height/4, 50, 20);

    //right eye
    fill(0,0,0);
    noStroke();
    ellipse(width/1.7, height/3, 50, 50);

    //left eye
    fill(0, 0, 0);
    ellipse(width/2.4, height/3, 50, 50);

    //right cheek
    fill(255,238,238);
    noStroke();
    ellipse(width/1.6, height/2.30, 100, 100)

    //left cheek
    fill(255,238,238);
    noStroke();
    ellipse(width/2.6, height/2.30, 100, 100)

    //nose
    fill(255, 165, 0); 
    ellipse(width/2, height/2.5, 40, 40);

    //teeth
    fill(255,255,255);
    strokeWeight(2.0);
    ellipse(width/2, height/2.0, 40, 40);

    //mouth
    noFill(0, 0, 0);
    stroke(0,0,0);
    strokeWeight(3.5);
    ellipse(width/2, height/1.9, 50, 90);
}

function draw() {

}