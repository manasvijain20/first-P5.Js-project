function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(300,150)
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,640,480);
    fill(255,105,180);
    rect(27, 0, 570, 20);
    rect(30, 2, 20, 460);
    rect(30, 460, 580, 20);
    rect(600, 2, 20, 460);

    fill(148,0,211);
    circle(40, 30, 60);
    circle(605, 30, 60);
    circle(40, 450, 60);
    circle(605, 450, 60);
   



}
function take_snapshot(){
    save("Image.png");
}