// Liste des sons disponibles
const sounds = [
    'son1.mp3',
    'son2.mp3',
    'son3.mp3',
    'son4.mp3'
];

// Variable pour garder une référence au son en cours
let currentAudio = null;

// Fonction pour jouer un son aléatoire
function playRandomSound() {
    if (currentAudio) {
        currentAudio.pause(); // Arrête le son actuel
        currentAudio.currentTime = 0; // Réinitialise le temps
    }

    const randomIndex = Math.floor(Math.random() * sounds.length);
    currentAudio = new Audio(sounds[randomIndex]); // Charge un nouveau son
    currentAudio.play(); // Joue le son
}

// Écouteur d'événement pour le bouton
document.getElementById('rollDice').addEventListener('click', function() {
    playRandomSound();
});
