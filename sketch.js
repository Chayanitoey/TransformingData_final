let img;
function preload() {
    img1 = loadImage("assets/skirt.png");
    img2 = loadImage("assets/tangerineDress.png");
    img3 = loadImage("assets/blouse.png");
    img4 = loadImage("assets/jacket.png");
    img5 = loadImage("assets/jeans.png");
    img6 = loadImage("assets/floraldress.png");
    img7 = loadImage("assets/boohoologo.jpg");
    img8 = loadImage("assets/zaralogo.jpg");
    img9 = loadImage("assets/uniqlo.png");
    img10 = loadImage("assets/sheinlogo.jpg");
    img11 = loadImage("assets/hm-logo.jpg");

}
function setup() {
    var canvas =createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-holder');

}
function draw() {
    imageMode(CENTER);
    image(img1, random(width), random(height),
        random(25,150), random(25,150));
   image(img2, random(width), random(height),
        random(25,150), random(25,150));
    image(img3, random(width), random(height),
        random(25,150), random(25,150));
    image(img4, random(width), random(height),
        random(25,150), random(25,150));
    image(img5, random(width), random(height),
        random(25,150), random(25,150));
   image(img6, random(width), random(height),
        random(25,150), random(25,150));
   image(img7, random(width), random(height),
        random(25,150), random(25,150));
   image(img8, random(width), random(height),
        random(25,150), random(25,150));
   image(img9, random(width), random(height),
        random(25,150), random(25,150));
  image(img10, random(width), random(height),
        random(25,150), random(25,150));
  image(img11, random(width), random(height),
        random(25,150), random(25,150));
}
