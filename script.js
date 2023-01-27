const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const input = document.getElementById("input");
const output = document.getElementById("output");
const copyButton = document.getElementById("copy-button");

encryptButton.addEventListener("click", () => {
    let text = input.value;
    text = text.toLowerCase();
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    output.value = text;
    input.value = "";
    output.style.backgroundImage = "none";
});

decryptButton.addEventListener("click", () => {
    let text = input.value;
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    output.value = text;
    input.value = "";
    output.style.backgroundImage = "none";
});

copyButton.addEventListener("click", () => {
    output.select();
    document.execCommand("copy");
    output.value = "";
    output.style.backgroundImage = "";
});
