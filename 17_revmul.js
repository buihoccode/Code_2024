 "use strict";
 const readlineSync = require("readline-sync");

 do {
    //choose randomly 2 numbers and print them
    let aleaNb_1 = Math.floor(Math.random() * 9 + 1);
    let aleaNb_2 = Math.floor(Math.random() * 9 + 1);
    console.log("%s x %s ?", aleaNb_1, aleaNb_2);

    // make a multiplication operation
    let result = aleaNb_1 * aleaNb_2 ;
    
    //take answer from user / keyboard
    let user_input = readlineSync.question();
    user_input = Number(user_input);

    if (user_input === result) {
        console.log("Exact");
    } else {
        console.log("Faux, %s x %s = %s", aleaNb_1, aleaNb_2, result)
    }
 } while (true);


 


