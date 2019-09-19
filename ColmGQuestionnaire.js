// JavaScript Document


 
/* var select = document.getCountyById("selectCounty"); 
var options = ["Antrim", "Armagh", "Carlow", "Cavan", 
               "Clare", "Cork", "Derry", "Donegal", 
               "Down", "Dublin", "Fermanagh", "Galway", 
               "Kerry", "Kildare", "Kilkenny", "Laois", 
               "Leitrim", "Limerick", "Longford", "Louth", 
               "Mayo", "Meath", "Monaghan", "Offaly", 
               "Roscommon", "Sligo", "Tipperary", "Tyrone", 
               "Waterford", "Westmeath", "Wexford", "Wicklow"]; 

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}?   */

var myArray = new Array("Antrim", "Armagh", "Carlow", "Cavan", 
               "Clare", "Cork", "Derry", "Donegal", 
               "Down", "Dublin", "Fermanagh", "Galway", 
               "Kerry", "Kildare", "Kilkenny", "Laois", 
               "Leitrim", "Limerick", "Longford", "Louth", 
               "Mayo", "Meath", "Monaghan", "Offaly", 
               "Roscommon", "Sligo", "Tipperary", "Tyrone", 
               "Waterford", "Westmeath", "Wexford", "Wicklow");


// Get dropdown element from DOM
var dropdown = document.getElementById("selectCounty");

// Loop through the array
for (var i = 0; i < myArray.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
}


