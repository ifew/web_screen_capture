const Screenshot = require('url-to-screenshot')
const fs = require('fs')

new Screenshot('https://myifew.com/')
    .width(800)
    .height(600)
    .sslProtocol('any')
    .ignoreSslErrors()
    .capture()
    .then(img => {
        fs.writeFileSync(`${__dirname}/myifew.com.png`, img)
        console.log('open myifew.com.png')
    })