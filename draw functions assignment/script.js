//Draw Functions Assignment
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1500;
cnv.height = 600;

//Draw Targets

function drawTarget(x, y, color) {
    stroke(color);
    circle(x + 50, y + 250, 100, "stroke");
    circle(x + 50, y + 250, 90, "stroke");
    circle(x + 50, y + 250, 80, "stroke");
    circle(x + 50, y + 250, 70, "stroke");
    circle(x + 50, y + 250, 60, "stroke");
    circle(x + 50, y + 250, 50, "stroke");
    circle(x + 50, y + 250, 40, "stroke");
    circle(x + 50, y + 250, 30, "stroke");
    circle(x + 50, y + 250, 20, "stroke");
    circle(x + 50, y + 250, 10, "stroke");
}
drawTarget(100, 100, "green");

function drawTarget1(x, y, color) {
    stroke(color);
    circle(x + 300, y + 100, 80, "stroke");
    circle(x + 300, y + 100, 60, "stroke");
    circle(x + 300, y + 100, 30, "stroke");
}
drawTarget1(100, 100, "blue");

function drawTarget2(x, y, color){
    stroke(color);
    circle(x + 275, y + 350, 50, "stroke");
    circle(x + 275, y + 350, 40, "stroke");
    circle(x + 275, y + 350, 30, "stroke");
    circle(x + 275, y + 350, 20, "stroke");
    circle(x + 275, y + 350, 10, "stroke");

}
drawTarget2(100, 100, "red");

//Draw Platforms

function drawStar(x, y, color){
    stroke(color);
    lineWidth(4);
    line(x - 40, y + 90, x + 5, y + 20);
    line(x + 40, y + 90, x + 5, y + 20);
    line(x + 50, y + 50 , x - 40 , y + 90 );
    line(x - 50, y + 50 , x + 40 , y + 90 );
    line(x - 50 , y + 50 , x + 50 , y + 50);
}
drawStar(700, 150, "blue");

function drawStar2(x, y, color){
    stroke(color);
    lineWidth(2);
    line(x - 60, y + 150, x + 8, y + 40);
    line(x + 60, y + 150, x + 8, y + 40);
    line(x + 80, y + 80 , x - 60 , y + 150 );
    line(x - 80, y + 80 , x + 60 , y + 150 );
    line(x - 80 , y + 80 , x + 80 , y + 80);
}
drawStar2(900, 100, "green");



