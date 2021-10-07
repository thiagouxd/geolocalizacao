import stores from "../api/stores.json"

let storesPositionCompareWithClientPosition: any = [];
const numberOfStores: number = 3;

const comparePlaces = (clientPosition: any) => {
  stores.forEach(store => {
    console.log(store)
    const diferenceLat = store.lat - clientPosition.lat;
    const diferenceLng = store.lng - clientPosition.lng;
    const distance = Math.hypot(diferenceLat, diferenceLng);

    storesPositionCompareWithClientPosition.push({
      ...store,
      distance: convertDegressToKm(distance),
    });
  });
};

const convertDegressToKm = (degreess: number) => {
  return (degreess * 111).toFixed(2).replace('.', ',') + "km"
}

async function nearestStores(clientPosition: any) {
  comparePlaces(clientPosition);

  const highestToLowest = storesPositionCompareWithClientPosition.sort(
    (a: any, b: any) => parseFloat(a.distance) - parseFloat(b.distance)
  );
  const nearestStores = highestToLowest.slice(0, numberOfStores);
  return await nearestStores;
}

export default nearestStores
