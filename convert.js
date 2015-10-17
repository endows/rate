var fs = require('fs');
fs.readFile('./data.json', 'utf8', function (err, text) {

    obj = JSON.parse(text)
    console.log(obj)
    ar = []
    Object.keys(obj).forEach(function (key) {
      ar.push(obj[key])
    });
    console.log(ar)
});
