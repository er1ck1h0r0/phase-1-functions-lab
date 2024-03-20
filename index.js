const Hqdistance = 42;
const blockdistance = 264;

function distanceFromHqInBlocks(position) {
    if (position === 50 || position === 43) {
        return Math.abs(position - Hqdistance);
    } else if (position === 34) {
        return Math.abs(Hqdistance - position);
    }
}

function distanceFromHqInFeet(position) {
    let distance = distanceFromHqInBlocks(position) * blockdistance;
    return distance;
}

function distanceTravelledInFeet(start, destination) {
    let distanceInFeet = Math.abs(destination - start) * blockdistance;
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    let theDistanceTravelled = Math.abs(destination - start) * blockdistance;

    if (theDistanceTravelled < 400) {
        return 0;
    } else if (theDistanceTravelled >= 400 && theDistanceTravelled <= 2000) {
        return (theDistanceTravelled - 400) * 0.02;
    } else if (theDistanceTravelled > 2000 && theDistanceTravelled <= 2499) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}

