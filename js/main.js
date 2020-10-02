// declare variables - link html
const city = document.querySelector('.city');
const kel = document.querySelector('.kel');
const deg = document.querySelector('.deg');
const cel = document.querySelector('.cel');
const con = document.querySelector('.con');
const pic = document.querySelector('.pic');

var webAddress = 'https://api.openweathermap.org/data/2.5/weather?zip=';
var webID = ',us&appid=d9608784e9e57ff730dbec18ce772f3a';
var data;
document.getElementById('turnon').style.visibility='hidden'

async function getWeather(zip) {
    let response = await fetch(webAddress + zip + webID);
    let d = await response.json();
    return d;
}

// get zip and display rest of page
async function getZipcode() {
    
    //  get zip from input element
    var zipcode = document.getElementById("myInput").value;
    
    //  Checks to see if zip looks valid and doublechecks with user
    if (zipcode.length != 5) {
        alert('Invalid zipcode');
    } else {
        //alert('Get weather info for zipcode ' + zipcode + '?');        
        data = await getWeather(zipcode);
    }

    // make elements visible
    document.getElementById('turnon').style.visibility='visible'

    // push data to html elements
    city.innerHTML = data.name;
    kel.innerHTML = Math.floor(data.main.temp);
    deg.innerHTML = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32);
    cel.innerHTML = Math.floor(data.main.temp - 273.15) + " " + "C";
    con.innerHTML = data.weather[0].description;


    // grab icon code
    let str = data.weather[0].icon;
    //console.log(str);

    // add icon to rest of url to get icon img
    var src = "http://openweathermap.org/img/wn/" + str + "@2x.png";

    // set pic div to img with attribute src
    pic.innerHTML='<img src=\"' + src + '\">';

    


}

// focus cursor on input element immediately on loading
document.getElementById("myInput").focus();
