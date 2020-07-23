let txt = document.getElementById("text");
let cursor = document.querySelector(".cursor")
const base = txt.textContent;
let text_arr = [" am Sathwik Matcha", " do Graphic Design", " do Web Development"];
let charIndex = 0;
let textIndex = 0;
const delTime = 200;
const typeTime = 100;
const genTime = 2000;

function openpdf() {
    window.open("/resume_new_4.pdf");
}
function type() {
    if (!cursor.classList.contains("cursor-typing")) {
        cursor.classList.add("cursor-typing");
    }
    if (charIndex < text_arr[textIndex].length) {
        txt.textContent += text_arr[textIndex].charAt(charIndex);

        charIndex++;
        setTimeout(type, typeTime);
    }
    else {
        cursor.classList.remove("cursor-typing");
        setTimeout(erase, genTime)
    }
}

function erase() {
    if (!cursor.classList.contains("cursor-typing")) {
        cursor.classList.add("cursor-typing");
    }
    if (charIndex > 0) {
        txt.textContent = base + String(" ") + text_arr[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, delTime);
    }
    else {
        cursor.classList.remove("cursor-typing");
        textIndex++;
        if (textIndex >= text_arr.length) {
            textIndex = 0;
        }
        setTimeout(type, 1000)
    }
}

type();
