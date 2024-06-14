// Voorbeeld van een array met tarotkaarten en hun betekenissen
const tarotCards = [
 { name: 'De Dwaas', meaning: 'Nieuwe mogelijkheden, avontuur, spontaniteit' },
    { name: 'De Magiër', meaning: 'Manifestatie, energie, wilskracht' },
    { name: 'De Hogepriesteres', meaning: 'Intuïtie, mysterie, innerlijke stem' },
    { name: 'De Keizerin', meaning: 'Overvloed, moederlijke zorg, creativiteit' },
    { name: 'De Keizer', meaning: 'Autoriteit, structuur, vastberadenheid' },
    { name: 'De Hiërofant', meaning: 'Traditie, overtuigingen, spirituele leider' },
    { name: 'De Geliefden', meaning: 'Liefde, verbinding, keuze' },
    { name: 'De Zegewagen', meaning: 'Succes, controle, vooruitgang' },
    { name: 'Kracht', meaning: 'Kracht, moed, innerlijke kracht' },
    { name: 'De Heremiet', meaning: 'Reflectie, introspectie, wijsheid' },
    { name: 'Het Rad van Fortuin', meaning: 'Verandering, lot, kansen' },
    { name: 'Gerechtigheid', meaning: 'Eerlijkheid, balans, rechtvaardigheid' },
    { name: 'De Gehangene', meaning: 'Loslaten, opoffering, nieuwe perspectieven' },
    { name: 'Dood', meaning: 'Transformatie, einde van een cyclus, vernieuwing' },
    { name: 'Matigheid', meaning: 'Balans, harmonie, gematigdheid' },
    { name: 'De Duivel', meaning: 'Verslaving, beperkingen, materialisme' },
    { name: 'De Toren', meaning: 'Verandering, crisis, openbaring' },
    { name: 'De Ster', meaning: 'Hoop, inspiratie, spirituele groei' },
    { name: 'De Maan', meaning: 'Illusies, onzekerheid, onderbewuste' },
    { name: 'De Zon', meaning: 'Vreugde, succes, vitaliteit' },
    { name: 'Het Oordeel', meaning: 'Oordeel, verlossing, innerlijke roeping' },
    { name: 'De Wereld', meaning: 'Vervulling, voltooiing, integratie' },
    // Voeg meer kaarten toe met hun betekenissen
];

function drawCards() {
    // Aantal kaarten dat de gebruiker wil trekken (bijvoorbeeld 3)
    const numCards = 3;
    
    // Selecteer willekeurige kaarten uit de array
    const selectedCards = [];
    for (let i = 0; i < numCards; i++) {
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        selectedCards.push(tarotCards[randomIndex]);
    }
    
    // Toon de getrokken kaarten in de HTML
    const cardsSection = document.getElementById('cards-section');
    cardsSection.innerHTML = '';
    selectedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card.name;
        cardsSection.appendChild(cardElement);
    });
    
    // Toon de betekenissen van de kaarten
    const meaningsSection = document.getElementById('meanings-section');
    meaningsSection.innerHTML = '';
    selectedCards.forEach(card => {
        const meaningElement = document.createElement('div');
        meaningElement.classList.add('meaning');
        meaningElement.textContent = `${card.name}: ${card.meaning}`;
        meaningsSection.appendChild(meaningElement);
    });
}