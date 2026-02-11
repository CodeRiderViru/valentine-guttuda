const reasons = [
    "Your smile is dangerously contagious.",
    "'Idhar udhar ho jata h toh' but you still manage everything.",
    "'Me toh special hu na' — yes, permanently.",
    "'Gutsa ki toh bhais baith gyi' still iconic.",
    "The way you say 'Kyyyya haain' 😄",
    "'I am in no horries' but my heart hurries for you.",
    "You bring jolly chaos into my calm life.",
    "Traveling with you feels like home.",
    "You make simple days unforgettable.",
    "And now... the real reason."
];

let current = 0;
let spotifyClicked = false;

function openSpotify() {
    spotifyClicked = true;

    // Enable Begin button
    const beginBtn = document.getElementById("beginBtn");
    beginBtn.disabled = false;
    beginBtn.classList.remove("disabled");

    // Remove pulse animation
    document.getElementById("spotifyBtn").classList.remove("pulse");

    // Dim screen slightly
    document.body.classList.add("dimmed");

    window.open("https://open.spotify.com/track/4vNWFGDqIdoELp4zTUI6lT", "_blank");

    // Restore brightness after 2 seconds
    setTimeout(() => {
        document.body.classList.remove("dimmed");
    }, 2000);
}

function startExperience() {
    if (!spotifyClicked) return;

    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("countdownScreen").classList.remove("hidden");

    let count = 3;
    let interval = setInterval(() => {
        document.getElementById("countdown").innerText = count;
        count--;

        if (count < 0) {
            clearInterval(interval);
            document.getElementById("countdownScreen").classList.add("hidden");
            document.getElementById("mainContent").classList.remove("hidden");
            showReason();
        }
    }, 1000);
}

let usingFirst = true;

function showReason() {
    const photo1 = document.getElementById("photo1");
    const photo2 = document.getElementById("photo2");

    document.getElementById("reasonText").innerText = reasons[current];

    if (usingFirst) {
        photo2.src = "images/pic" + (current + 1) + ".jpg";

        photo2.classList.remove("inactive");
        photo2.classList.add("active");

        photo1.classList.remove("active");
        photo1.classList.add("inactive");
    } else {
        photo1.src = "images/pic" + (current + 1) + ".jpg";

        photo1.classList.remove("inactive");
        photo1.classList.add("active");

        photo2.classList.remove("active");
        photo2.classList.add("inactive");
    }

    usingFirst = !usingFirst;
}



function nextReason() {
    current++;
    if (current < reasons.length) {
        showReason();
    } else {
        transitionToFinal();
    }
}

function transitionToFinal() {
    document.getElementById("mainContent").classList.add("hidden");

    setTimeout(() => {
        document.getElementById("finalScreen").classList.remove("hidden");
        revealFinalMessage();
    }, 1000);
}

function revealFinalMessage() {
    const message = "Because it's you. Always has been. Always will be. ❤️";
    const element = document.getElementById("finalMessage");

    let index = 0;

    setTimeout(() => {
        let interval = setInterval(() => {
            element.innerHTML += message[index];
            index++;
            if (index === message.length) {
                clearInterval(interval);
            }
        }, 60);
    }, 2000);
}
