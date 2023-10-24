// Datos de temperatura y humedad (ejemplo)
const datos = [
    { timestamp: '1', temperatura: 23.5, humedad: 50 },
    { timestamp: '2', temperatura: 24.0, humedad: 52 },
    { timestamp: '3', temperatura: 23.8, humedad: 49 },
    { timestamp: '4', temperatura: 24.2, humedad: 53 },
    { timestamp: '5', temperatura: 23.9, humedad: 51 },
    { timestamp: '6', temperatura: 24.5, humedad: 54 },
    { timestamp: '7', temperatura: 24.7, humedad: 55 },
    { timestamp: '8', temperatura: 24.8, humedad: 52 },
    { timestamp: '9', temperatura: 24.4, humedad: 53 },
    { timestamp: '10', temperatura: 24.3, humedad: 50 }
];

// Crear un gráfico vacío
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: datos.map(item => item.timestamp),
        datasets: [
            {
                label: 'Temperatura (°C)',
                data: datos.map(item => item.temperatura),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'Humedad (%)',
                data: datos.map(item => item.humedad),
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                beginAtZero: true,
            },
        },
    },
});
