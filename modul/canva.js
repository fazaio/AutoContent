const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(640,640);
const ctx = canvas.getContext("2d");

// main color
// bg   : #2d2c2c
// text : #ff5c5c

function countWord(payload){
    let res = payload.split(' ')
    console.log(res);
}

async function createImg(req, res){
    function draw(payload) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        ctx.beginPath();
        ctx.fillStyle= "#2d2c2c"
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //  create tittle image
        ctx.beginPath();
        ctx.font = "36px Arial";
        ctx.fillStyle= "#ff5c5c"
        // maximum tittle length 25 | space 40px
        ctx.fillText('Apa sih keuntungan', 25, 150)
        ctx.fillText('orang bisnis menguasai', 30, 190)
        ctx.fillText('orang bisnis menguasai', 40, 230)

        // create content image
        ctx.beginPath();
        ctx.font = "24px Arial";
        ctx.fillStyle= "white"
        // maximum word length 42
        ctx.fillText('lorem ipsum lorem ipsum lorem ipsum lorem ipsum', 40, 300)
      
        return canvas;
    }
    let data =
    '<img src="' + draw(req.body).toDataURL("image/png") + '" />';
    res.type("text/html");
    res.send(data);
}

module.exports = { createImg }