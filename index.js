let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
homeCount = 0
guestCount = 0

function incHomeOne() {
    homeCount++
    homeScore.textContent = homeCount;
    console.log(homeScore)
}

function incHomeTwo() {
    homeCount = homeCount + 2
    homeScore.textContent = homeCount;
    console.log(homeScore)
}

function incHomeThree() {
    homeCount = homeCount + 3
    homeScore.textContent = homeCount;
    console.log(homeScore)
}

function incGuestOne() {
    guestCount++
    guestScore.textContent = guestCount;
    console.log(guestScore)
}

function incGuestTwo() {
    guestCount = guestCount + 2
    guestScore.textContent = guestCount;
    console.log(guestScore)
}

function incGuestThree() {
    guestCount = guestCount + 3
    guestScore.textContent = guestCount;
    console.log(guestScore)
}

let startNewGame = document.getElementById("new-game")

function newGame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    console.log(startNewGame)
}

function highlightLeader() {
    const homeEl = document.getElementById("home-team")
    const guestEl = document.getElementById("guest-team")

    if (homeCount > guestCount) {
        homeEl.classList.toggle("leading")
    } else if (guestCount > homeCount) {
        guestEl.classList.toggle("leading")
    }
}