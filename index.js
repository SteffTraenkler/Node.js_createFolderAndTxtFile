const fs = require('fs')

if (!fs.existsSync('./assetsTxt/')) {
    fs.mkdirSync('./assetsTxt')
}

function addLine(line) {

    fs.appendFile('./assetsTxt/newfile.txt', line + '\n', (err) => {
        if (err) {
            return console.log('failed to create file');
        }
    });
}
addLine('testetstest')
addLine('heeeyyy')
addLine('newwline')