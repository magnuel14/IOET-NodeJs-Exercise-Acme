const obj = {};
const fs = require('fs');
const lr = require('readline');

/*
Set of functions to extract the txt to be processed,
read each line and assign keys for each column
,in this case Employee and Schedule.
Then this new array is converted to Json and a Json file is generated
*/

console.log(obj.length);
var lineReader = lr.createInterface({
    input: fs.createReadStream('textTojson.txt')
});

lineReader.on('line', function (line) {
    let [Empleado, Horario] = line.split('=');
    obj[Object.keys(obj).length || 0] = { Empleado, Horario };
});

lineReader.on('close', () => {
    fs.writeFile("textJson.json", JSON.stringify(obj), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Convertido a JSON");
        console.log(obj)
    });
});
