// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// For each ufoSighting
data.forEach(function(ufoSighting) {
  // Log datapoint in console
  console.log(ufoSighting);
  // Add tr tag
  var row = tbody.append("tr");
  
  Object.entries(ufoSighting).forEach(function([key, value]) {
    // Log each key, value pair
    console.log(key, value);
    // Append a cell to the row for each value in the ufoSighting object
    var cell = row.append("td");
    cell.text(value);
  });
});



// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Log user input
  console.log(inputValue);

  // Filter data by datetime
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  // Log filtered data
  console.log(filteredData);

  // Remove all tr tags in tbody
  tbody.selectAll("tr").remove()

  // Filter and add data with corresponding datetime
  data.filter(sighting => sighting.datetime === inputValue).forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
      
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value in the ufoSighting object
      var cell = row.append("td");
      cell.text(value);
    });
  });
};