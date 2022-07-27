//module for working with files
var fs = require('fs');
//The json file is extracted
let ListAcme = require('../IOET-NodeJs-Exercise/textJson.json');

/*
Counts the number of matches between two arrays
Args:
     - array1: List of characters of the employee1 schedule
     - array2: List of characters of the employee2 schedule
Returns: An integer value
*/
function CounterConcidences(array1, array2) {
    //the value is initialized to 0
    var coincidences = 0;
    /*
    Both arrays used by this function are treated with the macth function and the regular expression.
     /.{1,14}/g, with the aim of separating the schedules every 14 characters.
     Example:
     default: MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
     separated with macth: [ 'MO10:00-12:00,', 'TH12:00-14:00,', 'SU20:00-21:00' ]
    */
    var arreglo1 = array1.match(/.{1,14}/g);
    var arreglo2 = array2.match(/.{1,14}/g);
    //loop through each array, comparing content and counting matches
    for (var i in arreglo1) {
        for (var j in arreglo2) {
            if (arreglo1[i] == arreglo2[j]) {
                coincidences++;
            }
        }
    }
    return coincidences
}
/*
Go through the complete list, to make the combinations between employees and
the number of coincidences
Returns a final arrangement with employees and coincidences
*/
function combineEmployeesSchedules() {
    let horario1;
    let horario2;
    var arreglofinal = '';
    for (const i in ListAcme) {
        let current1 = ListAcme[i];
        let empleado1 = current1.Empleado;
        horario1 = current1.Horario;
        for (const j in ListAcme) {
            let current2 = ListAcme[j];
            let empleado2 = current2.Empleado;
            horario2 = current2.Horario;
            if (empleado1 != empleado2) {
                var cont = CounterConcidences(horario1, horario2);
                if (cont != 0) {
                    //console.log(empleado1 + "-" + empleado2 + ":" + cont);
                    arreglofinal += (empleado1 + "-" + empleado2 + ":" + cont + "\n");
                }
            }
        }
    }
    return arreglofinal
}

var arrayToTxt = combineEmployeesSchedules();
console.log(arrayToTxt);

/*
Convert arrays to txt files
Args:
     -list: List of employees and matches
*/
function writeTxt(list) {
    try {
        fs.writeFileSync('txtResult.txt', list);
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}

writeTxt(arrayToTxt);