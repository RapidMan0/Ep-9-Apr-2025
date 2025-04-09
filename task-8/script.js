function startLoading() {
    const progressBar = document.getElementById("progressBar");
    const statusText = document.getElementById("statusText");
    const button = document.getElementById("startButton");

    let progress = 0;
    button.disabled = true;

    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);// Stop the interval when progress reaches 100%
            button.disabled = false;
        } else {
            progress++;
            progressBar.style.width = progress + "%";
            statusText.textContent = "Progress: " + progress + "%";
        }
    }, 100);
}

document.getElementById("startButton").addEventListener("click", startLoading);
