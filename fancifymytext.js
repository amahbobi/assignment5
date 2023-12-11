// fancifymytext.js

function alertWindow() {
    alert("Hello, world!");
}

function increaseTextSize() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontSize = "1.5em";
}

function applyStyles() {
    var textArea = document.getElementById("textInput");
    var fancyShmancyRadio = document.getElementById("fancyShmancy");

    if (fancyShmancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.textDecoration = "none";
        textArea.style.color = "";
    }
}

function addMoo() {
    var textArea = document.getElementById("textInput");
    var textValue = textArea.value;

    textArea.value = textValue.toUpperCase();

    var sentences = textValue.split(".");
    for (var i = 0; i < sentences.length - 1; i++) {
        var words = sentences[i].trim().split(" ");
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(".");
}
