
module.exports = {
    getDarkJokes:async(req,res) => {
        const resp = await fetch(`https://v2.jokeapi.dev/joke/Dark`)
        const data = await resp.json()
        res.send(`<h1> ${data.setup} -  ${data.delivery}</h1>`)
    }
}
