import axios from "axios"

const getPlaces = (input) => {
  const apiKey = "AIzaSyC5t7cK8VjiacG1DxOkl0TO-tWcMbKu9hA"
  const url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=79081700&inputtype=textquery&key=AIzaSyC5t7cK8VjiacG1DxOkl0TO-tWcMbKu9hA"

  // const res = fetch(``, { mode: 'cors', credentials: 'include' })

  // const data = res.json()

  // if (!data) {
  //   return { notFound: true }
  // }

  // var myHeaders = new Headers();

  // var myInit = {
  //   method: 'GET',
  //   Headers: { ...myHeaders, 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
  //   mode: 'no-cors',
  //   cache: 'default'
  // };

  // console.log(myInit.headers)

  // fetch(url, myInit).then(response => response.json())
  //   .then(data => console.log(data))

  // async function obterCidades() {
  //   const res = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=79081700&inputtype=textquery&key=AIzaSyC5t7cK8VjiacG1DxOkl0TO-tWcMbKu9hA`, myInit)
  //   const data = await res.json()

  //   if (!data) {
  //     return { notFound: true }
  //   }

  //   console.log(data)
  // }

  // obterCidades()

  return fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=79081700&inputtype=textquery&key=AIzaSyC5t7cK8VjiacG1DxOkl0TO-tWcMbKu9hA", {
    method: 'HEAD',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Basic ' + window.btoa('user:senha')
    },

  }).then(resp => console.log(resp))

}

// let map: window.google.maps.Map;
// let service: window.google.maps.places.PlacesService;
// let infowindow: window.google.maps.InfoWindow;

// function initMap(): void {
//   const sydney = new window.google.maps.LatLng(-33.867, 151.195);

//   infowindow = new window.google.maps.InfoWindow();

//   map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: sydney,
//     zoom: 15,
//   });

//   const request = {
//     query: "Museum of Contemporary Art Australia",
//     fields: ["name", "geometry"],
//   };

//   service = new window.google.maps.places.PlacesService(map);

//   service.findPlaceFromQuery(
//     request,
//     (
//       results: window.google.maps.places.PlaceResult[] | null,
//       status: window.google.maps.places.PlacesServiceStatus
//     ) => {
//       if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
//         for (let i = 0; i < results.length; i++) {
//           createMarker(results[i]);
//         }

//         map.setCenter(results[0].geometry!.location!);
//       }
//     }
//   );
// }



export default getPlaces
