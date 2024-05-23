// Function to simulate typing effect
function typeWriter(text, i, id, reverse) {
    var elem = document.getElementById("typing-text");
    if (!reverse) {
        if (i < text.length) {
            elem.innerHTML += text.charAt(i);
            i++;
            setTimeout(function () {
                typeWriter(text, i, id, reverse);
            }, 100); // Adjust typing speed here (milliseconds)
        } else {
            setTimeout(function () {
                typeWriter(text, i, id, true);
            }, 3000); // Delay before starting backspace (milliseconds)
        }
    } else {
        if (i >= 0) {
            elem.innerHTML = text.substring(0, i);
            i--;
            setTimeout(function () {
                typeWriter(text, i, id, true);
            }, 50); // Adjust backspace speed here (milliseconds)
        } else {
            setTimeout(function () {
                typeWriter(text, 0, id, false);
            }, 500); // Delay before starting typing again (milliseconds)
        }
    }
}

// Trigger typing effect on page load
window.onload = function () {
    // Text to be typed
    var text = "PRIYANSHU SINGH BISHT";
    // Start typing animation
    typeWriter(text, 0, "typing-text", false);
};
