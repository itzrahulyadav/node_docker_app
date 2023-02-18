const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    console.log(`${method} and url is ${url}`)
    next()
}

module.exports = logger
