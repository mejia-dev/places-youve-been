// Define TravelLocations

function TravelLocations() {
  this.destinations = {};
}

TravelLocations.prototype.addLocation = function(newDestination) {
  this.destinations[newDestination.location] = newDestination;
}


// Define Destination
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes;
}

// Create list and destinations

let myTravelLocations = new TravelLocations();
let portland = new Destination("Portland",["Welcome to Oregon Sign", "Rose Garden", "Lloyd Center Ice Rink"],"Fall","Home of Epicodus!");
let seattle = new Destination("Seattle",["Space Needle", "Fish Market", "Gum Wall"],"Winter","ABC Gum is gross");
let lasvegas = new Destination("Las Vegas",["MGM", "Caesar's Palace", "Eiffel Tower"],"Summer","Fake");
myTravelLocations.addLocation(portland);
myTravelLocations.addLocation(seattle);
myTravelLocations.addLocation(lasvegas);