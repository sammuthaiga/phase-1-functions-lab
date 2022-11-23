// Code your solution in this file!

function distanceFromHqInBlocks(block,) {
    if (block >= 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
}

function distanceFromHqInFeet(block) {
    if (block >= 42) {
        return (block - 42) * 264;
    } else {
        return (42 -block) * 264;
    }
}
    
function distanceTravelledInFeet(blocka, blockb) {
    let travelled = (blockb - blocka) * 264;
    if (travelled >= 1) {
        return travelled
    } else {
        return travelled * -1;
    }
}



function calculatesFarePrice(start, destination) {
    let travelled = distanceTravelledInFeet(start, destination);
  /*   console.log(travelled); */
    if (travelled <= 400) {
        return 0;
    } else if(travelled > 400 && travelled < 2000){
        return (travelled - 400) * 0.02;

    } else if(travelled > 2000 && travelled <= 2500) {
        return 25
    } else {
        return "cannot travel that far";
    }

    } 
