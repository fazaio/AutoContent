const fastify = require('fastify')({ logger: true })
const instagram = require('./modul/instagram')
var draw = require('./modul/canva')


// Route
fastify.get('/ig/user/:name', instagram.feedUser )
fastify.get('/ig/tags/:hashtag', instagram.feedTags )
fastify.get('/canvas/:dynamic', async function(req, res){

    let data = '<img src="' + draw().toDataURL('image/png') + '" />'

    res.type('text/html')
    res.send(data)
    
})



fastify.listen(3000)