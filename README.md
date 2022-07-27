# IOET-NodeJs-Exercise-Acme

Solved exercise for application in IOET

## Exercise:
The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

### Input:
The name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

#### Example 1:
###### INPUT
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
###### OUTPUT:
ASTRID-RENE: 2
ASTRID-ANDRES: 3
RENE-ANDRES: 2
###### Example 2:
###### INPUT:
RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
OUTPUT:
RENE-ASTRID: 3 

## Solution:
To solve this exercise, JavaScritp was used together with NodeJs in order to execute the scripts through the console. For its operation, 3 main files are used, these are:
### textTojson.txt:
Plain text file that will serve as input for the exercise
### TxtToJson.js:
It is made up of several structured functions, whose function is to convert the file in txt format into a Json type file, separated by the Employee and Schedule keys.
### Main.js:
This file contains 3 functions which manage the Json obtained, in general the function of this file is to combine the names of the employees in a list and determine the coincidences between their schedules, at the end a txt file is generated with the name of txtResult, where the combinations of employees and their time consciousness are presented.
## Imput
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
Manuel=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
Rebeca=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
Mario=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
David=MO9:00-11:00,FR12:00-14:00,SA20:15-21:00
Daniel=MO9:00-11:00,FR12:00-14:00,SA20:15-21:00
## Output
RENE-ASTRID:2
RENE-ANDRES:2
RENE-Manuel:5
RENE-Rebeca:2
RENE-Mario:2
ASTRID-RENE:2
ASTRID-ANDRES:3
ASTRID-Manuel:2
ASTRID-Rebeca:3
ASTRID-Mario:3
ANDRES-RENE:2
ANDRES-ASTRID:3
ANDRES-Manuel:2
ANDRES-Rebeca:3
ANDRES-Mario:3
Manuel-RENE:5
Manuel-ASTRID:2
Manuel-ANDRES:2
Manuel-Rebeca:2
Manuel-Mario:2
Rebeca-RENE:2
Rebeca-ASTRID:3
Rebeca-ANDRES:3
Rebeca-Manuel:2
Rebeca-Mario:3
Mario-RENE:2
Mario-ASTRID:3
Mario-ANDRES:3
Mario-Manuel:2
Mario-Rebeca:3
David-Daniel:3
Daniel-David:3
![Image text]([https://github.com/zzuljs/CppLearning/blob/master/CppLearning/raw/master/Itachi.jpg](https://github.com/magnuel14/IOET-NodeJs-Exercise-Acme/blob/main/Result.png))
## Requirements to run locally

##### Have installed:
Mode in its version v12.22.12
Npm in its version 7.5.2
## Instructions to run locally
##### Run the following command in the project directory:
node node TxtToJson.js
##### And then you need to run the following command:
node Main.js

