// Keep track of the currently playing audio
let currentAudio = null;

// Function to play audio based on the class name and auto-play
function playAudio(className) {
    let audioSrc = '';

    // Determine the audio source based on the class name
    switch (className) {
        case 'he':
            audioSrc = './music/ka.mp3';
            break;
        case 'ha':
            audioSrc = './music/ll.mp3';
            break;
        case 'nv':
            audioSrc = './music/vl.mp3';
            break;
        // You can add more cases for other class names and related audio files as needed
    }

    // Stop the currently playing audio, if any
    if (currentAudio) {
        currentAudio.pause();
    }

    // Create an audio element and play the audio immediately
    const audio = new Audio(audioSrc);
    audio.play();

    // Update the currently playing audio
    currentAudio = audio;
}

// Function to hide all divs
function hideAllDivs() {
    const divs = document.querySelectorAll('.welcome, .teacher, .coding, .dance');
    divs.forEach(function(div) {
        div.style.display = 'none';
    });
}

// Function to show the welcomediv initially
function showWelcome() {
    hideAllDivs();
    document.getElementById('welcomeDiv').style.display = 'block';
}

// Function to show the teacherdiv when the teacherbutton is clicked
function showTeacher() {
    hideAllDivs();
    document.getElementById('teacherDiv').style.display = 'block';
    playAudio('he'); // Play audio when showing teacherDiv
}

// Function to show the codingdiv when the codingbutton is clicked
function showCoding() {
    hideAllDivs();
    document.getElementById('codingDiv').style.display = 'block';
    playAudio('ha'); // Play audio when showing codingDiv
}

// Function to show the dancediv when the dancebutton is clicked
function showDance() {
    hideAllDivs();
    document.getElementById('danceDiv').style.display = 'block';
    playAudio('nv'); // Play audio when showing danceDiv
}

// Function to stop all audio and show the welcome div
function stopAllAudio() {
    if (currentAudio) {
        currentAudio.pause();
    }
    showWelcome(); // Show the "welcome" div
}

// Add click event listeners to the buttons for both audio and video functionality
document.querySelector('.he button').addEventListener('click', function() {
    showTeacher(); // Show video
});

document.querySelector('.ha button').addEventListener('click', function() {
    showCoding(); // Show video
});

document.querySelector('.nv button').addEventListener('click', function() {
    showDance(); // Show video
});

// Add click event listener to the "stop" button to stop all audio and show the welcome div
document.getElementById('stop').addEventListener('click', function() {
    stopAllAudio();
});

// Show the "welcome" div initially
showWelcome();
