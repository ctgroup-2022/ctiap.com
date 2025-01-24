const sectionsData = [
    {
        title: "Design Studio",
        cards: [
            { title: "Infra 1", description: "Description 1", img: "Images/Infrastructure/Infra1.jpg" },
            { title: "Infra 2", description: "Description 2", img: "Images/Infrastructure/Infra1.jpg" }
        ]
    },
    {
        title: "Section 2",
        cards: [
            { title: "Infra 3", description: "Description 3", img: "https://via.placeholder.com/150" },
            { title: "Infra 4", description: "Description 4", img: "https://via.placeholder.com/150" }
        ]
    },
    {
        title: "Section 3",
        cards: [
            { title: "Infra 5", description: "Description 5", img: "https://via.placeholder.com/150" },
            { title: "Infra 6", description: "Description 6", img: "https://via.placeholder.com/150" }
        ]
    },
    {
        title: "Section 4",
        cards: [
            { title: "Infra 7", description: "Description 7", img: "https://via.placeholder.com/150" }
        ]
    },
    {
        title: "Section 5",
        cards: [
            { title: "Infra 8", description: "Description 8", img: "https://via.placeholder.com/150" }
        ]
    },
    {
        title: "Section 6",
        cards: [
            { title: "Infra 9", description: "Description 9", img: "https://via.placeholder.com/150" }
        ]
    },
    {
        title: "Section 7",
        cards: [
            { title: "Infra 10", description: "Description 10", img: "https://via.placeholder.com/150" }
        ]
    }
];

const renderSections = () => {
    const container = document.getElementById("sections-container");
    sectionsData.forEach((section, index) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.id = `section${index + 1}`;
        sectionDiv.classList.add("content-section", "mb-8");

        const title = document.createElement("h1");
        title.textContent = section.title;
        title.classList.add("text-2xl", "font-bold", "mb-4");
        sectionDiv.appendChild(title);

        const cardsContainer = document.createElement("div");
        cardsContainer.classList.add("grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4");

        section.cards.forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("bg-white", "shadow-md", "rounded-lg", "p-4", "hover:shadow-lg", "transition");

            const img = document.createElement("img");
            img.src = card.img;
            img.alt = card.title;
            img.classList.add("w-full", "h-64", "object-cover", "rounded-t-md","shadow-md");
            cardDiv.appendChild(img);

            const cardTitle = document.createElement("h2");
            cardTitle.textContent = card.title;
            cardTitle.classList.add("text-lg", "font-semibold", "mt-2");
            cardDiv.appendChild(cardTitle);

            const cardDesc = document.createElement("p");
            cardDesc.textContent = card.description;
            cardDesc.classList.add("text-sm", "text-gray-600");
            cardDiv.appendChild(cardDesc);

            cardsContainer.appendChild(cardDiv);
        });

        sectionDiv.appendChild(cardsContainer);
        container.appendChild(sectionDiv);
    });
};

const showContent = (sectionId) => {
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    renderSections();
    showContent("section1"); // Show the first section by default
});