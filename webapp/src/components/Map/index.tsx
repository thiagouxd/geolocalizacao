import pinMap from "../../images/icon_pin_mapa.svg"
import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
};

const key = "AIzaSyC5t7cK8VjiacG1DxOkl0TO-tWcMbKu9hA"

function Map({ stores }: any) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key
  })

  return isLoaded && stores ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      id="marker-example"
      zoom={16}
      center={{ lat: stores[0].lat, lng: stores[0].lng }}
    >
      {stores.map((store: any, index: number) => {
        return (
          <Marker
            key={index}
            position={new window.google.maps.LatLng(store.lat, store.lng)}
            icon={pinMap} />
        )
      })}
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
