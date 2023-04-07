import Pageres from 'pageres';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

await new Pageres({ delay: 30 })
    .source('https://myifew.com', ['1280x1024', '1920x1080'], { crop: true })
    .source('https://myifew.com', ['1280x1024', '1920x1080'])
    .destination(__dirname)
    .run();

console.log('Finished generating screenshots!');