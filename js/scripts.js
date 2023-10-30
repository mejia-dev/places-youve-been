function TravelLocations() {
  this.destination = {};
}

function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes;
}

let myTravelLocations = new TravelLocations();
let portland = new Destination("Portland",["Welcome to Oregon Sign", "Rose Garden", "Lloyd Center Ice Rink"],"Fall","Home of Epicodus!");