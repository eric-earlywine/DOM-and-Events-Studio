// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let takeoff_button = document.getElementById("takeoff");
    let land_button = document.getElementById("landing");
    let abort_button = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    let flightStatus = document.getElementById("flightStatus")
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let takeoff = false;
    takeoff_button.addEventListener("click", function(){
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation && !takeoff) {
            let height = Number(shuttleHeight.innerHTML);
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = height + 10000;
            takeoff = true;
            rocket.style.bottom = "10px";
            rocket.style.left = "0px";
        }
    });
    land_button.addEventListener("click", function(){
        if (takeoff) {
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.bottom = 0;
            rocket.style.left = 0;
            takeoff = false;
        }
        else {
            window.alert("The shuttle hasn't taken off!");
        }
    });
    abort_button.addEventListener("click", function(){
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.bottom = 0;
            rocket.style.left = 0;
            takeoff = false;
        }
    });
    up.addEventListener("click", function(){
        if (takeoff && parseInt(rocket.style.bottom) < 250) {
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        rocket.style.bottom = (parseInt(rocket.style.bottom) + 10) + "px";
        }
    });
    down.addEventListener("click", function(){
        if (takeoff && parseInt(rocket.style.bottom) > 0) {
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        rocket.style.bottom = (parseInt(rocket.style.bottom) - 10) + "px";
        }
    });
    left.addEventListener("click", function(){
        if (takeoff && (parseInt(rocket.style.left) + shuttleBackground.clientWidth) > 30) {
        rocket.style.left = (parseInt(rocket.style.left) - 10) + "px";
        }
    });
    right.addEventListener("click", function(){
        if (takeoff && (shuttleBackground.clientWidth - parseInt(rocket.style.left)) > 58) {
        rocket.style.left = (parseInt(rocket.style.left) + 10) + "px";
        }
    });
}

window.onload = init;
