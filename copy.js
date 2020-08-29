// node copy .env.production

const fs = require('fs');
const src = process.argv[2];

fs.copyFileSync(`./src/${src}`, `./out/src/${src}`);
