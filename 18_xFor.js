"use strict";
const readlineSync = require("readline-sync");

let col;
let row;
let size = readlineSync.question("Enter size of X : ");
size = Number(size);

for (row = 0; row < size ; row++) {
    //Create an empty temporary list to add " . " and " X "
    let tempList = "";

    for (col = 0 ; col < size; col++) {
        //To draw a cross, I draw 2 lines
        //One has the coordinates where x = y
        //The other has the coordinates where x = size - 1 - y
        let temp_col = size - row - 1;

        if ( (col === row) || (col === temp_col))  {
            tempList += " X ";
        } else {
            tempList += " . ";
        }
    }
    console.log(tempList);
}
    



