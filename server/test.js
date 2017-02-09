'use strict';
const path = require('path')
const getColors = require('get-image-colors')
const fs = require('fs')


fs.readdir('images', (err, list) => {
  let promises = [];
  let json = {
    colors: []
  };

  for (const file of list) {
    if(file[0] !== '.') {
      promises.push(getColors(path.join(__dirname, `../images/${file}`)).then(colors => {
        console.log(`${file} done`);
        json.colors.push({file, colors});
      }));
    }
  };

  Promise.all(promises).then(() => { 
    console.log('all done, writing to file');
    fs.writeFile('colors.json', JSON.stringify(json), 'utf8');
  }) 
});

