const fastify = require("fastify")({ logger: true });
const instagram = require("./modul/instagram");
var draw = require("./modul/canva");


fastify.register(require('fastify-cors'), { 
})

// Route
fastify.get("/ig/user/:name", instagram.feedUser);
fastify.get("/ig/tags/:hashtag", instagram.feedTags);
fastify.get("/createImage", draw.createImg);

fastify.listen(3000);
