//None-destructively remove elements
const returnFirstTwoDrivers = function (pickDrivers) {
    for (let i = 0; i < pickDrivers.length; i++) {
        return pickDrivers.slice(0,2);
    }
    
}
console.log(returnFirstTwoDrivers(['Antonia', ' Nuru', ' Amari', ' Mo']));

//Non-destructively remove elements
const returnLastTwoDrivers = function (pickDrivers) {
    for (let i = 0; i < pickDrivers.length; i++) {
        let drivers = pickDrivers.slice(pickDrivers.length-2);
        return drivers
    }
    
}
console.log(returnLastTwoDrivers(['Antonia', ' Nuru', ' Amari', ' Mo']));

//Array Definition
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

//Fare Multiplier function
const createFareMultiplier = (num) => {
    return function (fare) {
        return fare * num;
    }
}
console.log(createFareMultiplier(2)(300))

//Double fare
const fareDoubler = (fare) => {
    const doubleFare = createFareMultiplier(2)(fare);
    return doubleFare;
}
console.log(fareDoubler(10))

//Tripple fare
const fareTripler = (fare) => {
    const trippleFare = createFareMultiplier(3)(fare);
    return trippleFare
}
console.log(fareTripler(20))

//Passing a function as an argument to the callBack function
const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
}
console.log(selectDifferentDrivers(['Antonia', ' Nuru', ' Amari', 'Charles', ' Mo'], returnFirstTwoDrivers))
console.log(selectDifferentDrivers(['Antonia', ' Nuru', ' Amari', ' Mo', 'Sharon'], returnLastTwoDrivers))