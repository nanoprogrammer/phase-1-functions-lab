
function distanceFromHqInBlocks(destination) {
    let distanceHqInBlocks;
    const start = 42;

    if(destination > start) {
        return distanceHqInBlocks = (destination - start); 

    } else {
       return distanceHqInBlocks = (start - destination);
    } 
}

function distanceFromHqInFeet(destination) { 
    let start = 42;
    let distanceHqInFeet; 

    if(start < destination) {
        return distanceHqInFeet = (destination - start) * 264;

    } else {
        return distanceHqInFeet = (start - destination) * 264
    }
}

function distanceTravelledInFeet(start, destination){
    let distanceInFeets;

    if(destination > start) {
       return distanceInFeets = (destination - start) * 264;

    } else {
        return distanceInFeets = (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let fareAmount = 0;
    let distanceTravelled;

    if(start < destination) {
        distanceTravelled = (destination - start) * 264;

    } else {
        distanceTravelled = (start - destination) * 264;
    }
        if(distanceTravelled <= 400) {
            return fareAmount += 0;

        } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
            return fareAmount += (distanceTravelled - 400) * 0.02;

        } else if(distanceTravelled > 2000 && distanceTravelled <= 2500) {
           return fareAmount += 25;

        } else {
            return 'cannot travel that far';
    }
}   