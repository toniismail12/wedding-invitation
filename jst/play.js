var buttonElement = document.getElementById("buttonShow");
var contentElement = document.getElementById("content");

function play() {
    if (contentElement.style.display === "none") {

        buttonElement.style.display = "none";
        contentElement.style.display = "block";

    } else {
        contentElement.style.display = "none";
    }
    playAudio();
}

function playAudio() {
    var a = new Audio("music/music-1.mp3");
    a.play();
}