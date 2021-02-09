//Draw Functions Assignment
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1500;
cnv.height = 600;

//Draw Targets

function drawTarget(x, y, n, color) {
    stroke(color);
    for (let numRings = 1; numRings <= n; numRings++ ){
    circle(x + 50, y + 150, n * 10, "stroke");
    circle(x + 300, y + 400 , n * 3, "stroke");
    circle(x + 275, y + 350, n * 6, "stroke");
    }
}
drawTarget(100, 100, 10, "green");
drawTarget(300, 200, 3, "blue");
drawTarget(275, 300, 6, "red");


//Draw Platforms

function drawStar(x, y, w, color){
    for(let numWidth = 1; numWidth <=w; numWidth++){
        stroke(color);
    }
    line(x - 40, y + 90, x + 5, y + 20);
    line(x + 40, y + 90, x + 5, y + 20);
    line(x + 50, y + 50 , x - 40 , y + 90 );
    line(x - 50, y + 50 , x + 40 , y + 90 );
    line(x - 50 , y + 50 , x + 50 , y + 50);
}
drawStar(700, 150, 3, "blue");

//function drawStar2(x, y, color){
   // stroke(color);
   // lineWidth(2);
   // line(x - 60, y + 150, x + 8, y + 40);
   // line(x + 60, y + 150, x + 8, y + 40);
   // line(x + 80, y + 80 , x - 60 , y + 150 );
   // line(x - 80, y + 80 , x + 60 , y + 150 );
   // line(x - 80 , y + 80 , x + 80 , y + 80);
//}
//drawStar2(900, 100, "green");



