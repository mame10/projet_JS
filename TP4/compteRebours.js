let body = document.getElementsByTagName("body");
let title = document.getElementById("h1");
let minuteur = document.getElementById("minuteur");
let message = document.getElementById("message");
let jours= document.getElementById("jour");
let heures = document.getElementById("heure");
let minutes = document.getElementById("minute");
let secondes = document.getElementById("seconde");
let year=document.getElementById('year')

function compteArebours(){
    let now=moment();
    // let n=moment(now,'years')
    let nowYear= moment('2023','YYYY')

    // let nowYear =moment("2022-03-28","YYYY-MM-DD")
    // date de mon anniff
    let difference= nowYear - now ;
    let nbJours=nowYear.diff(now,"day");
    let duration=moment.duration(difference,'milliseconds');
    // console.log(duration)
    jours.textContent = nbJours;
    heures.textContent =  duration._data.hours;
    minutes.textContent = duration._data.minutes;
    secondes.textContent = duration._data.seconds;

    

    if (difference <= 0) {
        clearInterval(countDownInterval);
        body.style.backgroundImage = 'url("newyear.jpg")';
        jours.textContent = 0;
        heures.textContent = 0;
        minutes.textContent = 0;
        secondes.textContent = 0;
        title.innerHTML = "Bonne année !!!";
    }
}
let countDownInterval = setInterval(compteArebours, 1000);
compteArebours();
