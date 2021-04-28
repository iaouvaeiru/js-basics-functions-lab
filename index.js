function distanceFromHqInBlocks(passengerLocation) {
    let hqLocation = 42
    return Math.abs(passengerLocation - hqLocation)
}

function distanceFromHqInFeet(passengerLocation) {
    let hqLocation = 42
    return Math.abs(passengerLocation - hqLocation)*264
}

function distanceTravelledInFeet(startingLocation, endingLocation) {
    return Math.abs(startingLocation - endingLocation)*264
}

function calculatesFarePrice(start, destination) {
    if (Math.abs(start - destination) * 264 > 2500) {
        return 'cannot travel that far'
    } else if (Math.abs(start - destination) *264 <= 400) {
        return 0
    } else if (Math.abs(start - destination) * 264 >= 2000) {
        return 25
    } else return (Math.abs(start - destination) * 264 - 400) * .02

}