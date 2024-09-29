function speedDetector(speed) {
    // Set the speed limit, points for every km over limit, and max points for license suspension
    const speedLimit = 70;  
    const kmPerDemeritPoint = 5;  
    const maxDemeritPoint = 12;

    // Check if speed is below or equal to the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");  // Print "Ok" if speed is within the limit
    }

    // Calculate how much speed is over the limit
    let excessSpeed = speed - speedLimit;

    // Calculate demerit points based on how many km/h the speed exceeds the limit
    let demeritPoints = excessSpeed / kmPerDemeritPoint;

    // If excess speed is not exactly divisible by kmPerDemeritPoint, floor the points
    if (excessSpeed % kmPerDemeritPoint !== 0) {
        demeritPoints = Math.floor(demeritPoints); // Floor the value to remove decimal points
    }

    // Print out the total demerit points
    console.log("Points:", demeritPoints);

    // If demerit points exceed the maximum allowed, print that the license is suspended
    if (demeritPoints > maxDemeritPoint) {
        console.log("License suspended");
    }
}

// Call the function with a sample speed value
let speed = 80;  // You can change this to test other speeds
speedDetector(speed);  // This will print the demerit points or "License suspended" or "Ok" based on speed
