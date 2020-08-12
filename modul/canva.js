const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(640,640);
const ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle= "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle= "white"
    ctx.fillText('mengapa salah?', 10, 100)
  
    return canvas;
}

module.exports = draw