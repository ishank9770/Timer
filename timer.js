document.addEventListener("DOMContentLoaded", function () {
    let timeLeft = 36; // 60 minutes in seconds
    const timerDisplay = document.createElement("div");
    
    timerDisplay.id = "form-timer";
    timerDisplay.style.fontSize = "20px";
    timerDisplay.style.fontWeight = "bold";
    timerDisplay.style.marginBottom = "15px";
    timerDisplay.style.color = "red";
    
    document.body.insertBefore(timerDisplay, document.body.firstChild);

    const form = document.getElementById("form-app");

    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time is up! Submitting the form...");
            form.submit();
        }
        timeLeft--;
    }

    updateTimer(); // Show initial time
    const timerInterval = setInterval(updateTimer, 1000); // Update every second
});
