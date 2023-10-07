function toggle(){
    var newsletter = document.querySelector('.newsletter');
    newsletter.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    const countdownDate = new Date("2023-12-31T00:00:00").getTime(); // Set your target date and time here
    const countdown = document.querySelector(".countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("day").innerText = days;
            document.getElementById("hour").innerText = hours;
            document.getElementById("minute").innerText = minutes;
            document.getElementById("second").innerText = seconds;
        } else {
            countdown.style.display = "none";
        }
    }

    setInterval(updateCountdown, 1000);
});
