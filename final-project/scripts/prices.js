document.addEventListener('DOMContentLoaded', function() {
    fetch('data/scoots.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('tbody');

            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.vehicle}</td>
                    <td>${item.price}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});