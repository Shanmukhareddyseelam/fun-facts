document.getElementById('generateFactBtn').addEventListener('click', generateRandomFact);

const facts = [
    "Honey never spoils.",
    "A day on Venus is longer than a year on Venus.",
    "Bananas are berries, but strawberries aren't.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Octopuses have three hearts."
];

function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('factDisplay').textContent = randomFact;
}
