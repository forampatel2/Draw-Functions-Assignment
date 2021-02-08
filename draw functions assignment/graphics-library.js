function stroke(color){
    ctx.strokeStyle = color;
}

function fill(color){
    ctx.fillStyle = color;
}

function lineWidth(width){
    ctx.lineWidth = width;
}

function font(fontSetting){
    ctx.font = fontSetting;
}

// Draw a stroke circle with centre (x.y) and radius of r
function circle(x, y, r, mode){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill"){
        ctx.fill();
    } else if (mode === "stroke"){
        ctx.stroke();
    }
}

//Draw a line segment from (x1, y1) t0 (x2, y2)
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //Endpoint 1
    ctx.lineTo(x2, y2); //Endpoint 2
    ctx.stroke();
}