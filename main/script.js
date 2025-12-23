const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields ❌";
    } else {
        message.style.color = "green";
        message.innerText = "Message sent successfully ✅";
        form.reset();
    }
});