document.addEventListener('DOMContentLoaded', () => {
    const eventDataList = [
      {
        background: 'Images/Gallery/IMG_9413.jpg',
        title: 'Event One',
        description: 'Discover the first event.',
        link: 'gallery.html',
      },
      {
        background: 'Images/Gallery/IMG_9414.jpg',
        title: 'Event Two',
        description: 'Explore the second event.',
        link: 'gallery.html',
      },
      {
        background: 'Images/Gallery/IMG_9415.jpg',
        title: 'Event Three',
        description: 'Join us for the third event.',
        link: 'gallery.html',
      },
    ];
  
    const container = document.querySelector('.flex-wrap');
  
    if (!container) {
      console.error('Container element not found. Ensure your HTML contains a .flex-wrap element.');
      return;
    }
  
    eventDataList.forEach((event) => {
      const card = document.createElement('div');
      card.className =
        'relative w-80 h-96 bg-cover bg-center rounded-t-full shadow-lg overflow-hidden cursor-pointer';
      card.style.backgroundImage = `url('${event.background}')`;
  
      card.innerHTML = `
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <a href="${event.link}" class="absolute inset-0 flex flex-col items-center justify-center text-center group">
          <div class="absolute inset-0 border-4 border-dashed border-transparent border-yellow-300   group-hover:border-blue-500 rounded-t-full transition-all duration-500"></div>
          <div class="relative z-10 p-4">
            <h2 class="text-2xl font-bold text-white opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">${event.title}</h2>
            <p class="text-white mt-2 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">${event.description}</p>
          </div>
        </a>
      `;
  
      container.appendChild(card);
    });
  });
  