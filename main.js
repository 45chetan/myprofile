var song = ["arjan valley.mp3", "believer.mp3","india wale.mp3","amplifier.mp3","Mera Bhola Hai Bhandari.mp3","bholenath a love story.mp3"];
var img = ["arjan valley.webp", "believer.jpg","india wale.jpg","amplifier.jpg","mera bhola hai bhandari.jpg","bholenath a love story.jpg.crdownload"];
var background2 = ["#dd99ff"," #ffdd99","lightgrey","skyblue","lightpink","#d4d4aa"]
var currentIndex = 0;
var forwardClicks = 0;
var backwardClicks = 0;

function count() {
    forwardClicks++;
}

function count2() {
    backwardClicks++;
}

function forward() {
    count();
    currentIndex = (currentIndex + 1) % song.length;
    updateUI(true); // Play audio after moving forward
}

function backward() {
    count2();
    currentIndex = (currentIndex - 1 + song.length) % song.length;
    updateUI(true); // Do not play audio after moving backward
}

function updateUI(playAudio) {
    var img2 = document.getElementById('img');
    var source = document.getElementById('source');
    var audio = document.getElementById('myaudio');
    img2.src = img[currentIndex];
    source.src = song[currentIndex];
    document.body.style.background=background2[currentIndex]
    audio.load();
    if (playAudio) {
        audio.play(); // Play audio if specified
    }
}

// Example usage of the click counts:
// function showClickCounts() {
//     console.log("Forward clicks:", forwardClicks);
//     console.log("Backward clicks:", backwardClicks);
// }
