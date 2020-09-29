//document.body.innerHTML = "<p>Hello World</p>";
//document.getElementById("main").innerHTML = 5 + 6;
//console.log("test");
//document.getElementById("main").innerHTML = "hello world";

//document.write(5 + 6);
//api.openweathermap.org/data/2.5/weather?zip={40356},&appid={d9608784e9e57ff730dbec18ce772f3a};
var webAddress = 'https://api.openweathermap.org/data/2.5/weather?zip=';
var webID = ',us&appid=d9608784e9e57ff730dbec18ce772f3a';
var data;


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
}


// getWeather().then(data => console.log(data));

// async function getUsers() {
    // let response = await fetch(
    //   "api.openweathermap.org/data/2.5/weather?zip=40356&appid=d9608784e9e57ff730dbec18ce772f3a"
    // );
    // let data = await response.json();
    // return data;
//}
// getUsers().then(data => console.log(data));