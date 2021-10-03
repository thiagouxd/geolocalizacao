import { useState } from 'react';
import GoogleMapReact, { GoogleMap } from 'google-map-react';

// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";
// import styled from "styled-components";
// import { biggerThanDesktop } from "../../utils/mediaQueries";
import { ReactComponent as PinMap } from "../../images/icon_pin_mapa.svg"
import { biggerThanDesktop } from '../../utils/mediaQueries';
import styled from 'styled-components';

const key = "AIzaSyC5t7cK8VjiacG1DxOkl0TO-tWcMbKu9hA"

// interface List {
//   lat: number;
//   lng: number
// }

// type Props = {
//   markers: List[]
// }

// const Map = ({ markers }: Props) => {
//   const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//     <GoogleMap
//       defaultZoom={14}
//       defaultCenter={{ lat: markers[0].lat, lng: markers[0].lng }}
//     >
//       {markers.map((marker, index) => {
//         return (
//           <PinMap key={index}
//             lat={marker.lat}
//             lng={marker.lng}
//           />
//         )
//       })}
//     </GoogleMap>
//   ));

//   return (
//     <MapContainer>
//       <MapWithAMarker
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
//         loadingElement={<div className="map-container" />}
//         containerElement={<div className="map-container" />}
//         mapElement={<div className="map-container" />}
//       />
//     </MapContainer>
//   )
// }

// export default Map

const Map = ({ markers }) => {
  const [center] = useState({ lat: markers[0].lat, lng: markers[0].lng });
  const [zoom] = useState(14);

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers.map((marker, index) => {
          return (
            <PinMap key={index}
              lat={marker.lat}
              lng={marker.lng}
            />
          )
        })}
      </GoogleMapReact>
    </MapContainer>
  );
}

export default Map;

const MapContainer = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  margin-left: 24px;
  ${biggerThanDesktop} {
    display: flex;
  }
`