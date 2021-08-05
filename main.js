var mouseEvent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthline=1;
canvas.addEventListener("mousedown",mymouse);
function mymouse(e){
    color=document.getElementById("color").value;
    console.log(color);
    widthline=document.getElementById("width").value; 
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    curentx=e.clientX-canvas.offsetLeft;
    curenty=e.clientY-canvas.offsetTop;
    console.log(curentx,curenty)
    if(mouseEvent="mouseDown"){ctx.beginPath();
        console.log(color);
    ctx.strokeStyle=color;ctx.lineWidth=widthline;
    ctx.moveTo(lastx,lasty);
    console.log(curentx,curenty)
    ctx.lineTo(curentx,curenty)
    ctx.stroke();}lastx=curentx;
    lasty=curenty; 
    console.log(curentx,curenty)
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}