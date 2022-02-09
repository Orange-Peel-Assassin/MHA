/*
    Query user for how many char
  > rangen 7 nubers from 1 to 20
 |  order them
  --loop till userchar amount is reached

*/

/*
    array
        obejt
            array, sum of array
*/
var maxchar;
function askMax(){
    if (maxchar == null) {
        maxchar = window.prompt("How many Char Stats will be genarated: ");
    }
    return maxchar
};


function roll(){ 
    var charArray = (Array.from({length: 8}, () => Math.floor(Math.random() * 20) + 1));
    charArray = charArray.sort(function(a, b){return a - b});
    return charArray;
};


function bestRolls(){
    askMax()
    let rollArray = [];
    for (let i = 0; i < maxchar; i++) {
        newRoll = roll();
        rollArray.push({Array: newRoll, Avg: newRoll.reduce((a, b) => a + b) / newRoll.length, StdDev: getStandardDeviation(newRoll)})
    }
    return rollArray.sort((firstItem, secondItem) => (firstItem.Avg - firstItem.StdDev) - (secondItem.Avg - secondItem.StdDev))
};


function getStandardDeviation (array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  }
