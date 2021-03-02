const unzipper = require('./scripts/unzipper');
const scrapper = require('./scripts/scrapper');
const merger = require('./scripts/merger');

unzipper.unzipAll();
console.log('-----')
merger.mergeMessages();
console.log('-----')
scrapper.extractFromMessages();
