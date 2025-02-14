function destroyValentine() {
    const message = document.getElementById("message");
    message.classList.add("shake");

    setTimeout(() => {
        message.innerHTML = "😈 Bhaad me ja tu! 😈";
        message.style.color = "red";
        document.body.style.backgroundColor = "#222";
    }, 500);
}
