const canvas = document.querySelector("canvas");
toolBtns = document.querySelectorAll(".tool");
sizeSlider = document.querySelector("#size-slider");
colorBtns = document.querySelectorAll(".colors .option")
colorPicker = document.querySelector("#color-picker");
clearCanvas = document.querySelector(".clear-canvas")
saveImg = document.querySelector(".save-img")
ctx = canvas.getContext("2d");

let isDrawing = false;
selectedTool = "brush";
brushWidth = 3;
selectedColor = "#000000";

const setCanvasBackground = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor;
}

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

const startDraw = (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
}

const drawing = (e) => {
    if(!isDrawing) return;

    if(selectedTool === "brush") {
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

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value)

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = (window.getComputedStyle(btn).getPropertyValue("background-color"));
    }); 
});
colorPicker.addEventListener("change", () => {
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground();
});

saveImg.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = 'yourcloud.jpg';
    link.href = canvas.toDataURL();
    link.click();
})

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);