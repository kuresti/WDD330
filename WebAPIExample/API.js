const myElement = document.getElementById("demo");

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        myElement.innerHTML = err;
    }
    
}

function showPosition(position) {
    myElement.innerHTML = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
}