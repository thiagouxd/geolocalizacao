const posicaoDoCliente = { posX: 43, posY: 38 };

const posicoesDasLojas = [
  { posX: 43, posY: 38 },
  { posX: 34, posY: 88 },
  { posX: 100, posY: 100 },
  { posX: 43, posY: 120 },
  { posX: 20, posY: 21 },
  { posX: 10, posY: 5 },
];

let posicoesDasLojasComparadasComCliente = [];

const compararLocaisComoLocalDoCliente = () => {
  posicoesDasLojas.forEach((loja) => {
    const diferencaDistanciaX = loja.posX - posicaoDoCliente.posX;
    const diferencaDistanciaY = loja.posY - posicaoDoCliente.posY;
    const distancia = Math.hypot(diferencaDistanciaX, diferencaDistanciaY);

    posicoesDasLojasComparadasComCliente.push({
      ...loja,
      distancia: distancia,
    });
  });
};

const tresLojasMaisProximas = () => {
  compararLocaisComoLocalDoCliente();

  const highestToLowest = posicoesDasLojasComparadasComCliente.sort(
    (a, b) => parseFloat(a.distancia) - parseFloat(b.distancia)
  );
  const lojasMaisProximas = highestToLowest.slice(0, 3);
  return lojasMaisProximas;
};

tresLojasMaisProximas();
