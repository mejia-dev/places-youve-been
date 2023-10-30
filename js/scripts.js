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
let portland = new Destination("Portland",["Welcome to Oregon Sign", " Rose Garden", " Lloyd Center Ice Rink"],"Fall","Home of Epicodus!");
let seattle = new Destination("Seattle",["Space Needle", " Fish Market", " Gum Wall"],"Winter","ABC Gum is gross");
let lasvegas = new Destination("Las Vegas",["MGM", " Caesar's Palace", " Eiffel Tower"],"Summer","Fake");
myTravelLocations.addLocation(portland);
myTravelLocations.addLocation(seattle);
myTravelLocations.addLocation(lasvegas);


// UI Logic
function displayInformation() {
  event.preventDefault();
  const selection = document.getElementById("locationDropdown").value;
  let resultsList = document.getElementById("listHolder");

//Clear previous results
resultsList.innerHTML = '';

  let landmarksLi = document.createElement("li");
  let timeOfYearLi = document.createElement("li");
  let notesLi = document.createElement("li");


  landmarksLi.append("Landmarks: " + myTravelLocations.destinations[selection].landmarks);
  timeOfYearLi.append(" Time of Year Visited: " + myTravelLocations.destinations[selection].timeOfYear);
  notesLi.append(" Notes: " + myTravelLocations.destinations[selection].notes);

  
  resultsList.appendChild(landmarksLi);
  resultsList.appendChild(timeofYearLi);
  resultsList.appendChild(notesLi);
}

window.addEventListener("load", function() {
  this.document.getElementById("locationSelector").addEventListener("submit", displayInformation);
})