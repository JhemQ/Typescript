"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeItUp = exports.isValid = exports.searchCity = exports.displayCities = exports.addCity = void 0;
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
//2. ISBN Validation
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
//3. Change it up
const changeItUp = (value) => {
    let values = "abcdefghijklmnopqrstuvwxyz";
    let fvalue = value.toLowerCase();
    let convertedValue;
    var finalConvertedValue = new String();
    console.log("Change it up");
    console.log("from: " + value);
    for (let i = 0; i < value.length; i++) {
        if (values.includes(fvalue.charAt(i))) {
            let index;
            index = values.indexOf(fvalue.charAt(i));
            convertedValue = values.charAt(index + 1);
            switch (convertedValue) {
                case 'a':
                    convertedValue = convertedValue.toUpperCase();
                    break;
                case 'e':
                    convertedValue = convertedValue.toUpperCase();
                    break;
                case 'i':
                    convertedValue = convertedValue.toUpperCase();
                    break;
                case 'o':
                    convertedValue = convertedValue.toUpperCase();
                    break;
                case 'u':
                    convertedValue = convertedValue.toUpperCase();
                    break;
            }
            finalConvertedValue = finalConvertedValue.concat(convertedValue);
        }
        else {
            finalConvertedValue = finalConvertedValue.concat(fvalue.charAt(i));
        }
    }
    console.log("Converted Value: " + finalConvertedValue);
};
exports.changeItUp = changeItUp;
(0, exports.changeItUp)("Cat30");
//4. Moving zeros to the end
console.log("Moving zeros to the end");
var arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
console.log(arr.filter(val => val !== 0).concat(arr.filter(zeros => zeros == 0)));
