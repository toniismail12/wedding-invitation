function updateCountdown() {
    const targetDate = new Date("2023-08-23");
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        $("#countdown").html(
            days + " days, " +
            hours + " hours, " +
            minutes + " minutes, " +
            seconds + " seconds"
        );
    } else {
        $("#countdown").html("Countdown has ended.");
    }
}

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);