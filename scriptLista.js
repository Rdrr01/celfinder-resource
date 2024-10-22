document.addEventListener('DOMContentLoaded', function() {
    const results = [
        { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com', edad: '21', estado: 'soltero'},
        { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@example.com', edad: '21', estado: 'soltero' },
        { id: 3, nombre: 'Carlos Ruiz', email: 'carlos.ruiz@example.com', edad: '21', estado: 'soltero' }
    ];


    const tbody = document.querySelector('#resultsTable tbody');


    results.forEach(result => {
        const row = document.createElement('tr');

        Object.values(result).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
});
const easterEggContainer = document.querySelector('.easter-egg-container');
const easterEggAudio = document.getElementById('easter-egg-audio');


easterEggContainer.addEventListener('mouseover', () => {
    easterEggAudio.play();
});


easterEggContainer.addEventListener('mouseout', () => {
    easterEggAudio.pause();
    easterEggAudio.currentTime = 0; 
});