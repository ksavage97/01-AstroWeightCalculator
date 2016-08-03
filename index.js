function gettingTheText() {
  var thePlanetList = document.getElementById("planetList");
  var selectedOption = thePlanetList.value;
  var weightInput = document.getElementById("yourWeight").value;
  var finalWeight = selectedOption * weightInput;
  var whichPlanet = document.getElementById("planetList").options[document.getElementById("planetList").selectedIndex].text;
  console.log(weightInput);

  if(isNaN(weightInput)) {
    alert("Oh no! That's not a number! Please input a valid number for your weight. (ex: 115)");
  } else if (weightInput < 0) {alert("Sorry, your weight can't be a negative value! Please input a valid number for your weight. (ex: 115)");} else if (weightInput === "") {alert("Oops! You didn't input a value. Please input a valid number for your weight. (ex: 115)")}
  else { document.getElementById("printToThePage").innerHTML = 'Wow! If you were on ' + whichPlanet + ', you would weigh ' + finalWeight + '.';    
  }
};

document.getElementById("yourWeight")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("theButton").click();
    }
});