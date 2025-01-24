 // JSON data for achievements
 const achievements = [
    { icon: "🏆", title: "Top Performer", description: "Awarded for outstanding performance in Q1." },
    { icon: "📚", title: "Learning Champ", description: "Completed 10+ advanced training courses." },
    { icon: "🌟", title: "Star Innovator", description: "Recognized for proposing 3 innovative projects." },
    { icon: "🚀", title: "Growth Leader", description: "Exceeded growth targets for the year." },
    { icon: "💡", title: "Idea Machine", description: "Submitted 20+ impactful ideas in the suggestion box." },
    { icon: "🤝", title: "Team Builder", description: "Organized team-building activities boosting morale." },
    { icon: "📈", title: "Sales Achiever", description: "Achieved record-breaking sales in Q3." },
    { icon: "🏅", title: "Customer Hero", description: "Received highest customer satisfaction ratings." },
    { icon: "💻", title: "Tech Guru", description: "Led successful deployment of new technology." }
];

const container = document.getElementById('achievement-container');
let currentIndex = 0;

// Function to render cards
function renderAchievements(startIndex) {
    container.innerHTML = ''; // Clear current cards
    for (let i = startIndex; i < startIndex + 3; i++) {
        const { icon, title, description } = achievements[i % achievements.length];
        const card = document.createElement('div');
        card.className = "bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform scale-0";
        card.innerHTML = `
  <div class="text-4xl mb-4">${icon}</div>
  <h3 class="text-xl font-semibold mb-2">${title}</h3>
  <p class="text-gray-600">${description}</p>
`;
        container.appendChild(card);
        gsap.to(card, { scale: 1, duration: 0.5, delay: (i - startIndex) * 0.2 });
    }
}

// Initial render
renderAchievements(currentIndex);

// Auto-rotate achievements every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 3) % achievements.length;
    renderAchievements(currentIndex);
}, 2000);