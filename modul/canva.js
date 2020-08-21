const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(640,640);
const ctx = canvas.getContext("2d");

async function createImg(req, res){
    function draw(payload) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        ctx.beginPath();
        ctx.fillStyle= "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //  create tittle image
        ctx.beginPath();
        ctx.font = "36px Arial";
        ctx.fillStyle= "white"
        // maximum tittle length 25
        ctx.fillText('Cara mengatasi error 1234', 25, 150)
        ctx.fillText('pada Arduino', 25, 190)
        let p = 'Cara mengatasi error 1234'
        console.log(p.length);

        // create content image
        ctx.beginPath();
        ctx.font = "24px Arial";
        ctx.fillStyle= "red"

        // maximum word length 42
        ctx.fillText('lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 40, 250)
      
        return canvas;
    }
    let data =
    '<img src="' + draw(req.body).toDataURL("image/png") + '" />';
    
    res.type("text/html");
    res.send(data);
}

module.exports = { createImg }