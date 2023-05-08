const canvas = document.querySelector("canvas");
toolBtns = document.querySelectorAll(".tool");
sizeSlider = document.querySelector("#size-slider")
ctx = canvas.getContext("2d");

let isDrawing = false;
selectedTool = "brush";
brushWidth = 3;

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDraw = (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
}

const drawing = (e) => {
    if(!isDrawing) return;

    if(selectedTool === "brush"){
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
}

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
});

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value);

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);