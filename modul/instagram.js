const ig = require('instagram-scraping')

async function feedUser(request, reply){
    ig.scrapeUserPage(request.params.name).then(res =>{
        reply.send({
            profil: request.params.name,
            data: res
        })
    })
}

async function feedTags(request, reply){
    ig.scrapeTag(request.params.hashtag).then(res =>{
        reply.send({
            hashtag: request.params.hashtag,
            data: res
        })
    })
}

module.exports = {
    feedTags,feedUser
}