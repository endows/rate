var fs = require('fs');
var ss = require('simple-statistics');

fs.readFile('./data.json', 'utf8', function (err, text) {

    obj = JSON.parse(text)
    ar = []
    Object.keys(obj).forEach(function (key) {
      ar.push(obj[key])
    });

    mean = ss.mean(ar)
    sd = ss.sampleStandardDeviation(ar)

    Deviation = (1500 - mean) / sd * 10 + 50
    console.log('deviation is:',Deviation)
    // console.log(ss.mean(ar))
    // console.log(ss.sampleStandardDeviation(ar))
});
