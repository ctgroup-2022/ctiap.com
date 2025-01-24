 // Example Testimonial Data (Could be fetched from an API or database)
 const testimonials = [
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Aarav Sharma",
        course: "MBA Student",
        content: "My experience at the college has been life-changing. The professors are incredible and supportive!"
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Vihaan Patel",
        course: "Engineering Graduate",
        content: "I gained practical skills and made lifelong friends. This college has prepared me for a great career."
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Ananya Singh",
        course: "Literature Graduate",
        content: "The environment here fosters creativity and learning. I couldn’t have asked for a better experience!"
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Aarav Sharma",
        course: "MBA Student",
        content: "My experience at the college has been life-changing. The professors are incredible and supportive!"
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Vihaan Patel",
        course: "Engineering Graduate",
        content: "I gained practical skills and made lifelong friends. This college has prepared me for a great career."
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Ananya Singh",
        course: "Literature Graduate",
        content: "The environment here fosters creativity and learning. I couldn’t have asked for a better experience!"
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Aarav Sharma",
        course: "MBA Student",
        content: "My experience at the college has been life-changing. The professors are incredible and supportive!"
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Vihaan Patel",
        course: "Engineering Graduate",
        content: "I gained practical skills and made lifelong friends. This college has prepared me for a great career."
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Ananya Singh",
        course: "Literature Graduate",
        content: "The environment here fosters creativity and learning. I couldn’t have asked for a better experience!"
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Aarav Sharma",
        course: "MBA Student",
        content: "My experience at the college has been life-changing. The professors are incredible and supportive!"
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Vihaan Patel",
        course: "Engineering Graduate",
        content: "I gained practical skills and made lifelong friends. This college has prepared me for a great career."
    },
    {
        photo: "Images/Testimonials/1.jpeg",
        name: "Ananya Singh",
        course: "Literature Graduate",
        content: "The environment here fosters creativity and learning. I couldn’t have asked for a better experience!"
    }
];

// DOM Element for the Testimonials Grid
const gridContainer = document.getElementById("testimonial-grid");

// Dynamically Populate Testimonial Cards
testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-lg p-6 hover-card fade-in";

    card.innerHTML = `
<div class="flex items-center mb-4">
  <img src="${testimonial.photo}" alt="${testimonial.name}" class="w-16 h-16 rounded-full shadow">
  <div class="ml-4">
    <h3 class="text-lg font-bold text-gray-800">${testimonial.name}</h3>
    <p class="text-sm text-gray-500">${testimonial.course}</p>
  </div>
</div>
<blockquote class="text-gray-600 text-base">
  "${testimonial.content}"
</blockquote>
`;

    // Append card to the grid container
    gridContainer.appendChild(card);
});