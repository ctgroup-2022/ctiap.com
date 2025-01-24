 // Sample JSON data
 const courseData = [
    { "name": "Computer Science", "duration": "4 Years", "fee": "$10,000", "details": "#" },
    { "name": "Business Management", "duration": "3 Years", "fee": "$8,000", "details": "#" },
    { "name": "Mechanical Engineering", "duration": "4 Years", "fee": "$9,000", "details": "#" },
    { "name": "Electrical Engineering", "duration": "4 Years", "fee": "$9,500", "details": "#" },
    { "name": "Civil Engineering", "duration": "4 Years", "fee": "$9,000", "details": "#" }
];

const tableBody = document.getElementById('course-table-body');
const searchInput = document.getElementById('search');

// Function to render table rows
function renderTable(data) {
    tableBody.innerHTML = '';
    data.forEach(course => {
        const row = document.createElement('tr');
        row.className = "hover:bg-yellow-100 transition-colors duration-300";
        row.innerHTML = `
            <td class="py-3 px-6 text-black font-semibold">${course.name}</td>
            <td class="py-3 px-6 text-blue-700">${course.duration}</td>
            <td class="py-3 px-6 text-blue-700">${course.fee}</td>
            <td class="py-3 px-6"><a href="${course.details}" class="text-yellow-400 underline hover:text-yellow-300">View</a></td>
        `;
        tableBody.appendChild(row);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredData = courseData.filter(course =>
        course.name.toLowerCase().includes(searchText)
    );
    renderTable(filteredData);
});

// Initial render
renderTable(courseData);