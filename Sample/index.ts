var cities:string[] = [];
var countries:string[] = [];
var populations:number[] = [];

export const addCity = (city:string, country:string, population:number) => {
    cities.push(city);
    countries.push(country);
    populations.push(population);
    displayCities();
}

export const displayCities = () => {
    let list = document.getElementById('cityList');
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    for(let i = 0; i<cities.length; i++){
        if(list){
            let li = document.createElement("li");
            li.innerText = cities[i] + ", " + countries[i] + ", " + populations[i];
            list.appendChild(li)
        }
    }
}
function clearData()
{
    document.getElementById('cityList')!.innerHTML = "";
}

export const searchCity = (search:string) => {
    clearData();
    let list = document.getElementById('cityList');
    for(let i = 0; i<cities.length; i++){
        if(list){
            if(cities[i].includes(search) || countries[i].includes(search)){
                let li = document.createElement("li");
                li.innerText = cities[i] + ", " + countries[i] + ", " + populations[i];
                list.appendChild(li)
            }
        }
    }
}

//2. ISBN Validation
export const isValid = (isbn:string) => {
    let validate = document.getElementById('validationResult')!;
    let result:number = 0;
    let validValues = "0123456789X";
    if(isbn.length == 10){
        for(let i = 0; i<isbn.length; i++){
            if(validValues.includes(isbn.charAt(i))){
                let val:number = parseInt(isbn.charAt(i))
                if(isbn[isbn.length-1].includes("X")){
                    val = 10;
                }
                result = result + val*(i+1)
            }else {
                console.log(false + " invalid input")
                validate.innerText = isbn + " Invalid, Input should not contain strings other than X";
            }
        }
        if(result % 11 == 0){
            console.log(true + " valid input")
            validate.innerText = isbn + " is Valid Input";
        } else {
            console.log(false + " not valid isbn")
            validate.innerText = isbn + " is not Valid";
        }
    }else {
        console.log(false + " Length should be 10")
        validate.innerText = isbn + " Invalid, Length should be 10";
    }
}

//3. Change it up
export const changeItUp = (value:string) => {
    let values:string = "abcdefghijklmnopqrstuvwxyz";
    let fvalue = value.toLowerCase();
    let convertedValue:string
    var finalConvertedValue = new String()
    for(let i = 0; i<value.length; i++){
        if(values.includes(fvalue.charAt(i))){
            let index:number
            index = values.indexOf(fvalue.charAt(i))
            convertedValue = values.charAt(index+1)
            switch(convertedValue){
                case 'a':
                    convertedValue = convertedValue.toUpperCase()
                    break;
                case 'e':
                    convertedValue = convertedValue.toUpperCase()
                    break;
                case 'i':
                    convertedValue = convertedValue.toUpperCase()
                    break;
                case 'o':
                    convertedValue = convertedValue.toUpperCase()
                    break;
                case 'u':
                    convertedValue = convertedValue.toUpperCase()
                    break;
            }
            finalConvertedValue = finalConvertedValue.concat(convertedValue);
        }
        else{
            finalConvertedValue = finalConvertedValue.concat(fvalue.charAt(i))
        }
    }
    console.log("Converted Value "+finalConvertedValue)
}

changeItUp("Cat30");

//4. Moving zeros to the end

