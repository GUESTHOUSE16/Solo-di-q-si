const messages = [
    "estás segura?",
    "segurisima??",
    "segurísisisisma?",
    "Pookie porfavor...",
    "piénsalo tantito andale!",
    "si dices que no me woa poner sad...",
    "muy muy triste...",
    "pero MUUUUUUUUUUUUUUY TRISTE...",
    "ta bien ya no te voy a molestar...",
    "no te creas di que si maryed ándale :c! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
