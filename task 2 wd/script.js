let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateTime(){

    const currentTime =
    Date.now() - startTime + elapsedTime;

    const milliseconds =
    Math.floor((currentTime % 1000) / 10);

    const seconds =
    Math.floor((currentTime / 1000) % 60);

    const minutes =
    Math.floor((currentTime / 60000) % 60);

    display.textContent =
        `${String(minutes).padStart(2,'0')}:` +
        `${String(seconds).padStart(2,'0')}:` +
        `${String(milliseconds).padStart(2,'0')}`;
}

document.getElementById("start")
.addEventListener("click",()=>{

    if(!timerInterval){

        startTime = Date.now();

        timerInterval =
        setInterval(updateTime,10);
    }
});

document.getElementById("pause")
.addEventListener("click",()=>{

    if(timerInterval){

        clearInterval(timerInterval);

        elapsedTime +=
        Date.now() - startTime;

        timerInterval = null;
    }
});

document.getElementById("reset")
.addEventListener("click",()=>{

    clearInterval(timerInterval);

    timerInterval = null;

    elapsedTime = 0;

    display.textContent = "00:00:00";

    laps.innerHTML = "";
});

document.getElementById("lap")
.addEventListener("click",()=>{

    if(timerInterval){

        const lap =
        document.createElement("li");

        lap.textContent =
        display.textContent;

        laps.appendChild(lap);
    }
});