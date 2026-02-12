window.onload = function() {
    document.getElementById("photo").style.backgroundImage =
        "url('images/pic1.jpg')";
};

const reasons = [
    "Your smile genuinely changes my mood instantly",
    "'Idhar udhar ho jata h toh' but you still manage everything. 🫡",
    "'This is toh part of life na' - but you are my complete life not just part of it 🥺 ",
    "'Me toh special hu na' — yes, permanently. 😇",
    "Because you tolerate me on Video call even when you don't want to 🫣",
    "Because your dramatic “Kyyyya haain” heals my mood 🫠",
    "'I am in no hurries' but my heart hurries for you ❤️‍🩹",
    "Because aap Paneer ki sabzi bhot acchi banate h 👩‍🍳",
    "Because you keep the family together 🙇",
    "'Me toh Viru Singh ji ki biwi hu na toh' — and I’m proud of that every day. 👸",
    "Because tum Hanumangarh ka bagad billa bhi toh ho na 😸",
    "Fun is funnier with you 🌊",
    "Because even cute-sa ke nakhre feel cute 👱‍♀️",
    "No one looks better in Rajputi paushak than our Guttsa does 👗",
    "Because you are super hot and you've got a great ass 🍑🌋",
    "You make me laugh when I don’t want to 🫂",
    "You bring chaos and calm at the same time 💝",
    "Traveling with you feels like home. 🛥️",
    "You turn normal days into memories. 🎑",
    "You try — even when it’s inconvenient ✨"
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

            current = 0;              // force reset
            showReason();
            updateButtons();
        }
    }, 1000);
}


let usingFirst = true;

function showReason() {
    const photo = document.getElementById("photo");

    // Fade out slightly
    photo.style.opacity = 0;
    photo.style.transform = "scale(1.08)";

    setTimeout(() => {
        document.getElementById("reasonText").innerText = reasons[current];

        photo.style.backgroundImage =
            "url('images/img" + (current + 1) + ".jpg')";

        // Fade back in
        photo.style.opacity = 1;
        photo.style.transform = "scale(1)";
    }, 400);
}


function prevReason() {
    if (current > 0) {
        current--;
        showReason();
        updateButtons();
    }
}


function nextReason() {
    if (current < reasons.length - 1) {
        current++;
        showReason();
        updateButtons();
    } else {
        transitionToFinal();
    }
}


function updateButtons() {
    const prevBtn = document.getElementById("prevBtn");

    prevBtn.disabled = (current === 0);
}


function transitionToFinal() {
    document.getElementById("mainContent").classList.add("hidden");

    setTimeout(() => {
        document.getElementById("finalScreen").classList.remove("hidden");
        revealFinalMessage();
    }, 1000);
}

function revealFinalMessage() {
    const message = "You are my happening part."
                     + " You complete me in ways I never knew were missing."
                     + " Because of you, I’ve met parts of myself I never thought existed."
                     + " Life feels fuller, louder, warmer with you in it."
                     + " Happy Valentine’s Day, my cute-sa permanent person 💕🫵😘🫂️";
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
