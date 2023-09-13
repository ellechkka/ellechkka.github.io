var canvas = document.getElementById("mycanvas");
canvas.height = 500;
canvas.width = 800;

var ctx = canvas.getContext("2d");
ctx.fillStyle = 'rgb(116, 157, 102)';

canvas.addEventListener("mousedown", function(event){
    let x = event.offsetX;
    let y = event.offsetY;

    if (event.button == 0) {
        ctx.fillStyle = 'rgb(116, 157, 102)';
        ctx.fillRect(x, y, 10, 10);
    }
    if (event.button == 2) {
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(x-5, y-5, 20, 20);
    }
});
canvas.addEventListener('contextmenu', event => event.preventDefault());
