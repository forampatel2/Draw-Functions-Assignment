//Draw Functions Assignment
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1500;
cnv.height = 600;

//Draw Targets
function drawTarget(x, y, n, color) {
    stroke(color);
    for (let ringNo = 1; ringNo <= n; ringNo++ ){
        circle(x + 100, y + 150, ringNo * 10, "stroke");
    }
}
    drawTarget(150, 100, 10, "green");
    drawTarget(250, 300, 6, "red");
    drawTarget(300, 50, 3, "blue");
    
//Draw Platforms
function drawStar(x, y, color){
    stroke(color);
    lineWidth(3);
        line(x - 50, y + 100, x, y + 5);
        line(x + 50, y + 100, x, y + 5);
        line(x + 50, y + 50 , x - 50, y + 100 );
        line(x - 50, y + 50 , x + 50 , y + 100 );
        line(x - 50 , y + 50 , x + 50 , y + 50);
}  
    drawStar(100, 100, "blue");


