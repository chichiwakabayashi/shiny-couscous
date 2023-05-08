const canvas = document.querySelector("drawing-board"),
ctx = canvas.getContext("2d");

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const drawing = (e) => {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}
canvas.addEventListener("mousemove", drawing);