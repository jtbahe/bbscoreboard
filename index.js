let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score");


function addNum(x, number) {
    x.textContent = parseInt(x.textContent) + number
}

function reset() {
    home.textContent = 0;
    guest.textContent = 0;
}