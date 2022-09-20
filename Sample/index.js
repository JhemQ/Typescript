"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = exports.searchCity = exports.displayCities = exports.addCity = void 0;
var cities = [];
var countries = [];
var populations = [];
const addCity = (city, country, population) => {
    cities.push(city);
    countries.push(country);
    populations.push(population);
    (0, exports.displayCities)();
};
exports.addCity = addCity;
const displayCities = () => {
    let list = document.getElementById('cityList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    for (let i = 0; i < cities.length; i++) {
        if (list) {
            let li = document.createElement("li");
            li.innerText = cities[i] + ", " + countries[i] + ", " + populations[i];
            list.appendChild(li);
        }
    }
};
exports.displayCities = displayCities;
function clearData() {
    document.getElementById('cityList').innerHTML = "";
}
const searchCity = (search) => {
    clearData();
    let list = document.getElementById('cityList');
    for (let i = 0; i < cities.length; i++) {
        if (list) {
            if (cities[i].includes(search) || countries[i].includes(search)) {
                let li = document.createElement("li");
                li.innerText = cities[i] + ", " + countries[i] + ", " + populations[i];
                list.appendChild(li);
            }
        }
    }
};
exports.searchCity = searchCity;
//ISBN Validation
const isValid = (isbn) => {
    let validate = document.getElementById('validationResult');
    let result = 0;
    let validValues = "0123456789X";
    if (isbn.length == 10) {
        for (let i = 0; i < isbn.length; i++) {
            if (validValues.includes(isbn.charAt(i))) {
                let val = parseInt(isbn.charAt(i));
                if (isbn[isbn.length - 1].includes("X")) {
                    val = 10;
                }
                result = result + val * (i + 1);
            }
            else {
                console.log(false + " invalid input");
                validate.innerText = isbn + " Invalid, Input should not contain strings other than X";
            }
        }
        if (result % 11 == 0) {
            console.log(true + " valid input");
            validate.innerText = isbn + " is Valid Input";
        }
        else {
            console.log(false + " not valid isbn");
            validate.innerText = isbn + " is not Valid";
        }
    }
    else {
        console.log(false + " Length should be 10");
        validate.innerText = isbn + " Invalid, Length should be 10";
    }
};
exports.isValid = isValid;
