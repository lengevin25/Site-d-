// Gestion des images associées aux résultats
const diceImages = [
    'dice1.png', // Image pour le résultat 1
    'dice2.png', // Image pour le résultat 2
    'dice3.png', // Image pour le résultat 3
    'dice4.png'  // Image pour le résultat 4
];

// Fonction pour mettre à jour l'image du dé
function updateDiceImage(result) {
    const diceImageElement = document.getElementById('diceImage');
    diceImageElement.src = diceImages[result - 1]; // Associe l'image au résultat
    diceImageElement.style.display = 'block'; // Affiche l'image
}

// Écouteur d'événement pour le bouton
document.getElementById('rollDice').addEventListener('click', function() {
    const result = Math.floor(Math.random() * 4) + 1; // Génère un nombre entre 1 et 4
    document.getElementById('result').textContent = `Résultat : ${result}`; // Met à jour le résultat
    updateDiceImage(result); // Met à jour l'image
    playRandomSound(); // Joue le son
});
