let storesPositionCompareWithClientPosition: any = [];
const numberOfStores: number = 3;

const storesPosition = [
  { lat: 43, lng: 38 },
  { lat: 34, lng: 88 },
  { lat: 100, lng: 100 },
  { lat: 43, lng: 120 },
  { lat: 20, lng: 21 },
  { lat: 10, lng: 5 },
];

const comparePlaces = (clientPosition: any) => {
  storesPosition.forEach((store) => {
    const diferenceLat = store.lat - clientPosition.lat;
    const diferenceLng = store.lng - clientPosition.lng;
    const distance = Math.hypot(diferenceLat, diferenceLng);

    storesPositionCompareWithClientPosition.push({
      ...store,
      distance: distance,
    });
  });
};

const getNearestStores = (clientPosition: any) => {
  comparePlaces(clientPosition);

  const highestToLowest = storesPositionCompareWithClientPosition.sort(
    (a: any, b: any) => parseFloat(a.distance) - parseFloat(b.distance)
  );
  const nearestStores = highestToLowest.slice(0, numberOfStores);
  // return nearestStores;
  console.log(nearestStores);
  
}

export default getNearestStores
