  // JSON data for the gallery
  const galleryData = [
    { image: "/Images/Gallery/IMG_9413.jpg", title: "Sunset Bliss", description: "A breathtaking sunset view.", date: "2023-01-15" },
    { image: "/Images/Gallery/IMG_9414.jpg", title: "Mountain Majesty", description: "Snowy peaks reaching the sky.", date: "2023-02-10" },
    { image: "/Images/Gallery/IMG_9415.jpg", title: "Forest Retreat", description: "Lush green forest paths.", date: "2023-03-05" },
    { image: "/Images/Gallery/IMG_9416.jpg", title: "Ocean Serenity", description: "Calm and peaceful ocean waves.", date: "2023-04-20" },
    { image: "/Images/Gallery/IMG_9417.jpg", title: "City Lights", description: "Night cityscape with sparkling lights.", date: "2023-05-15" },
    { image: "/Images/Gallery/IMG_9418.jpg", title: "Desert Dreams", description: "Golden sand dunes under the sun.", date: "2023-06-25" }
];

const container = document.getElementById('gallery-container');
const searchBar = document.getElementById('search-bar');

// Function to render gallery cards
function renderGallery(data) {
    container.innerHTML = ''; // Clear current cards

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "bg-white shadow-lg rounded-lg overflow-hidden transform scale-0 hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-blue-700";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2 text-blue-700">${item.title}</h3>
                <p class="text-gray-600 mb-4 ">${item.description}</p>
                <p class="text-sm text-yellow-400">${item.date}</p>
            </div>
        `;

        // Add click effect to cards
        card.addEventListener('click', () => {
            gsap.to(card, { scale: 1.2, duration: 0.5, ease: "power3.out", yoyo: true, repeat: 1 });
        });

        container.appendChild(card);
        gsap.to(card, { scale: 1, duration: 0.5, delay: index * 0.2 });
    });
}

// Initial render
renderGallery(galleryData);

// Search functionality
searchBar.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredData = galleryData.filter(item =>
        item.title.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue)
    );
    renderGallery(filteredData);
});