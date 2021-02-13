const from_planet = document.getElementById("from_planet");
const to_planet = document.getElementById("to_planet");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const pluto = document.getElementById("pluto");
const calculate = document.querySelector("#calculate");
let result_message;




function calculate_planets_distance() {
 let result_message;
 if ((from_planet.value == "Mercury" && to_planet.value == "Venus") || (from_planet.value == "Venus" && to_planet.value == "Mercury")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 0.34 AU. That's approximately 50,290,000 km or 31,248,757 miles.";
 }

 if ((from_planet.value == "Mercury" && to_planet.value == "Earth") || (from_planet.value == "Earth" && to_planet.value == "Mercury")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 0.61 AU. That's approximately 91,691,000 km or 56,974,146 miles.";
 }

 if ((from_planet.value == "Mercury" && to_planet.value == "Mars") || (from_planet.value == "Mars" && to_planet.value == "Mercury")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 1.14 AU. That's approximately 170,030,000 km or 105,651,744 miles.";
 }

 if ((from_planet.value == "Mercury" && to_planet.value == "Jupiter") || (from_planet.value == "Jupiter" && to_planet.value == "Mercury")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 4.82 AU. That's approximately 720,420,000 km or 447,648,234 miles.";
 }

 if ((from_planet.value == "Mercury" && to_planet.value == "Saturn") || (from_planet.value == "Saturn" && to_planet.value == "Mercury")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 9.14 AU. That's approximately 1,366,690,000 km or 849,221,795 miles.";
 }

 if ((from_planet.value == "Mercury" && to_planet.value == "Uranus") || (from_planet.value == "Uranus" && to_planet.value == "Mercury")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 18.82 AU. That's approximately 2,815,640,000 km or 1,749,638,696 miles.";
 }

 if ((from_planet.value == "Mercury" && to_planet.value == "Neptune") || (from_planet.value == "Neptune" && to_planet.value == "Mercury")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 29.70 AU. That's approximately 4,443,090,000 km or 2,760,936,126 miles.";
 }

 if ((from_planet.value == "Venus" && to_planet.value == "Earth") || (from_planet.value == "Earth" && to_planet.value == "Venus")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 0.28 AU. That's approximately 41,400,000 km or 25,724,767 miles.";
 }

 if ((from_planet.value == "Venus" && to_planet.value == "Mars") || (from_planet.value == "Mars" && to_planet.value == "Venus")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 0.8 AU. That's approximately 119,740,000 km or 74,402,987 miles.";
 }

 if ((from_planet.value == "Venus" && to_planet.value == "Jupiter") || (from_planet.value == "Jupiter" && to_planet.value == "Venus")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 4.48 AU. That's approximately 670,130,000 km or 416,399,477 miles.";
 }

 if ((from_planet.value == "Venus" && to_planet.value == "Saturn") || (from_planet.value == "Saturn" && to_planet.value == "Venus")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 8.80 AU. That's approximately 1,316,400,000 km or 817,973,037 miles.";
 }

 if ((from_planet.value == "Venus" && to_planet.value == "Uranus") || (from_planet.value == "Uranus" && to_planet.value == "Venus")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 18.49 AU. That's approximately 2,765,350,000 km or 1,718,388,490 miles.";
 }

 if ((from_planet.value == "Venus" && to_planet.value == "Neptune") || (from_planet.value == "Neptune" && to_planet.value == "Venus")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 29.37 AU. That's approximately 4,392,800,000 km or 2,729,685,920 miles.";
 }

 if ((from_planet.value == "Earth" && to_planet.value == "Mars") || (from_planet.value == "Mars" && to_planet.value == "Earth")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 0.52 AU. That's approximately 78,340,000 km or 48,678,219 miles.";
 }

 if ((from_planet.value == "Earth" && to_planet.value == "Jupiter") || (from_planet.value == "Jupiter" && to_planet.value == "Earth")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 4.2 AU. That's approximately 628,730,000 km or 390,674,710 miles.";
 }

 if ((from_planet.value == "Earth" && to_planet.value == "Saturn") || (from_planet.value == "Saturn" && to_planet.value == "Earth")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 8.52 AU. That's approximately 1,275,000,000 km or 792,248,270 miles.";
 }

 if ((from_planet.value == "Earth" && to_planet.value == "Uranus") || (from_planet.value == "Uranus" && to_planet.value == "Earth")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 18.21 AU. That's approximately 2,723,950,000 km or 1,692,662,530 miles.";
 }

 if ((from_planet.value == "Earth" && to_planet.value == "Neptune") || (from_planet.value == "Neptune" && to_planet.value == "Earth")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 29.09 AU. That's approximately 4,351,400,000 km or 2,703,959,960 miles.";
 }

 if ((from_planet.value == "Mars" && to_planet.value == "Jupiter") || (from_planet.value == "Jupiter" && to_planet.value == "Mars")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 3.68 AU. That's approximately 550,390,000 km or 342,012,346 miles.";
 }

 if ((from_planet.value == "Mars" && to_planet.value == "Saturn") || (from_planet.value == "Saturn" && to_planet.value == "Mars")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 7.99 AU. That's approximately 1,196,660,000 km or 743,604,524 miles.";
 }

 if ((from_planet.value == "Mars" && to_planet.value == "Uranus") || (from_planet.value == "Uranus" && to_planet.value == "Mars")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 17.69 AU. That's approximately 2,645,610,000 km or 1,643,982,054 miles.";
 }

 if ((from_planet.value == "Mars" && to_planet.value == "Neptune") || (from_planet.value == "Neptune" && to_planet.value == "Mars")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 28.56 AU. That's approximately 4,273,060,000 km or 2,655,279,484 miles.";
 }

 if ((from_planet.value == "Jupiter" && to_planet.value == "Saturn") || (from_planet.value == "Saturn" && to_planet.value == "Jupiter")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 4.32 AU. That's approximately 646,270,000 km or 401,592,178 miles.";
 }

 if ((from_planet.value == "Jupiter" && to_planet.value == "Uranus") || (from_planet.value == "Uranus" && to_planet.value == "Jupiter")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 14.01 AU. That's approximately 2,095,220,000 km or 1,301,969,708 miles.";
 }

 if ((from_planet.value == "Jupiter" && to_planet.value == "Neptune") || (from_planet.value == "Neptune" && to_planet.value == "Jupiter")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 24.89 AU. That's approximately 3,722,670,000 km or 2,313,267,138 miles.";
 }

 if ((from_planet.value == "Saturn" && to_planet.value == "Uranus") || (from_planet.value == "Uranus" && to_planet.value == "Saturn")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 9.7 AU. That's approximately 1,448,950,000 km or 900,377,530 miles.";
 }

 if ((from_planet.value == "Saturn" && to_planet.value == "Neptune") || (from_planet.value == "Neptune" && to_planet.value == "Saturn")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 20.57 AU. That's approximately 3,076,400,000 km or 1,911,674,960 miles.";
 }

 if ((from_planet.value == "Uranus" && to_planet.value == "Neptune") || (from_planet.value == "Neptune" && to_planet.value == "Uranus")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 10.88 AU. That's approximately 1,627,450,000 km or 1,011,297,430 miles.";
 }

 if ((from_planet.value == "Mercury" && to_planet.value == "Pluto") || (from_planet.value == "Pluto" && to_planet.value == "Mercury")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 39.14 AU. That is approximately 5, 855, 610, 000 km or 3, 638, 507, 366 miles."
 }

 if ((from_planet.value == "Pluto" && to_planet.value == "Venus") || (from_planet.value == "Venus" && to_planet.value == "Pluto")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 38.81 AU. That is approximately  5,805,320,000 km or 3,607,258,609 miles."
 }

 if ((from_planet.value == "Pluto" && to_planet.value == "Earth") || (from_planet.value == "Earth" && to_planet.value == "Pluto")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 38.54 AU. That is approximately 5,763,920,000 km or 3,581,533,942 miles."
 }

 if ((from_planet.value == "Pluto" && to_planet.value == "Mars") || (from_planet.value == "Mars" && to_planet.value == "Pluto")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 38.00 AU. That is approximately 5,685,580, 000 km or 3,532,855,623 miles."
 }

 if ((from_planet.value == "Pluto" && to_planet.value == "Jupiter") || (from_planet.value == "Jupiter" && to_planet.value == "Pluto")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 34.33 AU. That is approximately 5,135,190, 000 km or 3,190,859,132 miles."
 }


 if ((from_planet.value == "Pluto" && to_planet.value == "Saturn") || (from_planet.value == "Saturn" && to_planet.value == "Pluto")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is 29.97 AU. That is approximately 4,484,120,000 km or 2,786,302,990 miles."
 }


 if ((from_planet.value == "Pluto" && to_planet.value == "Uranus") || (from_planet.value == "Uranus" && to_planet.value == "Pluto")) {
  result_message = "The distance between " + from_planet.value + " and " + to_planet.value + " is  20.34 AU. That is approximately 3,042,530,000 km or 1,890,540,493 miles."
 }


 if ((from_planet.value == "Pluto" && to_planet.value == "Neptune") || (from_planet == "Neptune" && to_planet.value == "Pluto")) {
  result_message = "The distance between " + from_planet + " and " + to_planet.value + " is 9.42 AU. That is approximately 1,409,220,000 km or 875,648,711 miles."
 }

 if ((from_planet.value == "Mercury" && to_planet.value == "Mercury") || (from_planet == "Mercury" && to_planet.value == "Mercury")) {
  result_message = "You have selected the same Planets."
 }

 if ((from_planet.value == "Venus" && to_planet.value == "Venus") || (from_planet == "Venus" && to_planet.value == "Venus")) {
  result_message = "You have selected the same Planets."
 }

 if ((from_planet.value == "Earth" && to_planet.value == "Earth") || (from_planet == "Earth" && to_planet.value == "Earth")) {
  result_message = "You have selected the same Planets."
 }

 if ((from_planet.value == "Mars" && to_planet.value == "Mars") || (from_planet == "Mars" && to_planet.value == "Mars")) {
  result_message = "You have selected the same Planets."
 }

 if ((from_planet.value == "Jupiter" && to_planet.value == "Jupiter") || (from_planet == "Jupiter" && to_planet.value == "Jupiter")) {
  result_message = "You have selected the same Planets."
 }

 if ((from_planet.value == "Saturn" && to_planet.value == "Saturn") || (from_planet == "Saturn" && to_planet.value == "Saturn")) {
  result_message = "You have selected the same Planets."
 }

 if ((from_planet.value == "Uranus" && to_planet.value == "Uranus") || (from_planet == "Uranus" && to_planet.value == "Uranus")) {
  result_message = "You have selected the same Planets."
 }

 if ((from_planet.value == "Neptune" && to_planet.value == "Neptune") || (from_planet == "Neptune" && to_planet.value == "Neptune")) {
  result_message = "You have selected the same Planets."
 }

 if ((from_planet.value == "Pluto" && to_planet.value == "Pluto") || (from_planet == "Pluto" && to_planet.value == "Pluto")) {
  result_message = "You have selected the same Planets."
 }

 document.getElementById("result_message").innerHTML = result_message;
}

to_planet.addEventListener("change", calculate_planets_distance);
from_planet.addEventListener("change", calculate_planets_distance);