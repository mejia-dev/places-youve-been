function TravelLocations() {
  this.destination = {};
}

function Destination(name, location, landmarks, timeOfYear, notes) {
  this.name = name,
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes;
}