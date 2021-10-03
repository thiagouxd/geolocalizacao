const posicaoDoCliente = { lat: 20.494596, lng: -54.610121 };

const posicoesDasLojas = [
  { lat: 43, lng: 38 },
  { lat: 34, lng: 88 },
  { lat: 100, lng: 100 },
  { lat: 43, lng: 120 },
  { lat: 20, lng: 21 },
  { lat: 10, lng: 5 },
];

let posicoesDasLojasComparadasComCliente = [];

const compararLocaisComoLocalDoCliente = () => {
  posicoesDasLojas.forEach((loja) => {
    const diferencaDistanciaX = loja.lat - posicaoDoCliente.lat;
    const diferencaDistanciaY = loja.lng - posicaoDoCliente.lng;
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
