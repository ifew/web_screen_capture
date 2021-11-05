const Pageres = require('pageres');

(async() => {
    await new Pageres({ delay: 2 })
        .src('https://myifew.com', ['480x320', '1024x768'], { crop: true })
        .src('https://myifew.com', ['1280x1024', '1920x1080'])
        .dest(__dirname)
        .run();

    console.log('Finished generating screenshots!');
})();