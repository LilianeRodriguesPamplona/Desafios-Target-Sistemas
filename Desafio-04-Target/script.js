const interruptor1 = document.getElementById('interruptor1');
const interruptor2 = document.getElementById('interruptor2');
const interruptor3 = document.getElementById('interruptor3');

interruptor1.addEventListener('click', () => {
document.getElementById('lampada1').textContent = 'Ligada';
document.getElementById('lampada2').textContent = 'Desligada';
document.getElementById('lampada3').textContent = 'Desligada';
});

interruptor2.addEventListener('click', () => {
document.getElementById('lampada1').textContent = 'Desligada';
document.getElementById('lampada2').textContent = 'Ligada';
document.getElementById('lampada3').textContent = 'Desligada';
});

interruptor3.addEventListener('click', () => {
document.getElementById('lampada1').textContent = 'Desligada';
document.getElementById('lampada2').textContent = 'Desligada';
document.getElementById('lampada3').textContent = 'Ligada';
});
