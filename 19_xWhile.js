"use strict";
const readlineSync = require("readline-sync");

let size = readlineSync.question("Enter size of X : ");
size = Number(size);

//This program is almost identical to the nested loops For, while i also use two nested while loops.
//Except we have to seperate the initialization  and afterthought expressions apart.

let row = 0;
while (row < size) {
    let col = 0;
    //Create an empty temporary list to add " . " and " X "
    let tempList = "";

    while (col < size) {
        let temp_col = size - row - 1;

        if ((col === row) || (col === temp_col)) {
            tempList += " X ";
        } else {
            tempList += " . ";
        };

        col++;
    }
    console.log(tempList);
    row++;
};




