let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

document.getElementById("resultado").innerText = `A soma dos índices de 1 a ${INDICE} é ${SOMA}`;
