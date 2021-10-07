import stores from "../api/stores.json"

const numberOfStores: number = 3;

const comparePlaces = (clientPosition: any) => {
  let storesPositionCompareWithClientPosition: any = [];

  storesPositionCompareWithClientPosition = []
  stores.forEach(store => {
    console.log(store)
    const diferenceLat = store.lat - clientPosition.lat;
    const diferenceLng = store.lng - clientPosition.lng;
    const distance = Math.hypot(diferenceLat, diferenceLng);

    storesPositionCompareWithClientPosition.push({
      ...store,
      distance: convertDegressToKm(store.lat, clientPosition.lat, store.lng, clientPosition.lng),
    });
  });

  return storesPositionCompareWithClientPosition
};

const convertDegressToKm = (storeLat: number, clientPositionLat: number, storeLng: number, clientPositionLng: number) => {
  const earthRadius = 6371e3; // metres
  const lat1 = storeLat * Math.PI / 180; // lat, lng in radians
  const lat2 = clientPositionLat * Math.PI / 180;
  const hypoLat = (clientPositionLat - storeLat) * Math.PI / 180;
  const hypoLng = (clientPositionLng - storeLng) * Math.PI / 180;

  const a = Math.sin(hypoLat / 2) * Math.sin(hypoLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(hypoLng / 2) * Math.sin(hypoLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = earthRadius * c; // in metres

  console.log(d.toFixed(2))

  return d.toFixed(2)
}

async function nearestStores(clientPosition: any) {
  const highestToLowest = comparePlaces(clientPosition).sort(
    (a: any, b: any) => parseFloat(a.distance) - parseFloat(b.distance)
  );
  const nearestStores = highestToLowest.slice(0, numberOfStores);
  return await nearestStores;
}

export default nearestStores
