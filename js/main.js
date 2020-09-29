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

async function getZipcode() {
    console.log("ran displayNow");
    var zipcode = document.getElementById("myInput").value;
    console.log(zipcode)
    //  Checks to see if zip looks valid and doublechecks with user
    if (zipcode.length != 5) {
        alert('Invalid Zip, restart app');
    } else {
        alert('Get weather info for zipcode ' + zipcode + '?');        
        data = await getWeather(zipcode);
    }
    // push elements to html
    document.getElementById('turnon').style.visibility='visible'
    city.innerHTML = data.name;
    kel.innerHTML = Math.floor(data.main.temp);
    deg.innerHTML = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32);
    cel.innerHTML = Math.floor(data.main.temp - 273.15) + " " + "C";
    con.innerHTML = data.weather[0].description;
    var img = document.createElement("img");
    let str = data.weather[0].icon;
    console.log(str);
    img.src = "http://openweathermap.org/img/wn/" + str + "@2x.png";
    //img.width = width;
    //img.height = height;
    //img.alt = alt;

    // This next line will just add it to the <body> tag
    pic.appendChild(img);

}


