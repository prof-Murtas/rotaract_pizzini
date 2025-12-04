const motivi = [
    "🤝 Networking: conoscerai decine di giovani professionisti come te.",
    "🧠 Formazione: workshop, conferenze, mentoring… tutto incluso.",
    "🌍 Impatto: dai una mano a progetti che migliorano davvero la città.",
    "🎉 Eventi: aperitivi, cene, attività e viaggi di club.",
    "🚀 Leadership: imparerai a guidare progetti e team.",
    "🌐 Internazionalità: eventi con club da tutta Europa.",
    "❤️ Comunità: entrerai in un gruppo affiatato e accogliente.",
    "📚 Competenze: project management, fundraising e soft skills.",
    "💡 Ispirazione: speaker, professionisti e storie che lasciano il segno.",
    "🏆 Esperienze uniche: momenti indimenticabili che puoi vivere solo qui."
];

function generaMotivo() {
    const casuale = Math.floor(Math.random() * motivi.length);
    document.getElementById("motivo").textContent = motivi[casuale];
}
