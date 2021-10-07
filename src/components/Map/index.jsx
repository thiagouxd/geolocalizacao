import { useState } from 'react';
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import pinMap from "../../images/icon_pin_mapa.svg"
import { biggerThanDesktop } from '../../utils/mediaQueries';
import styled from 'styled-components';

const key = "AIzaSyC5t7cK8VjiacG1DxOkl0TO-tWcMbKu9hA"

const containerStyle = {
  width: '100%',
  height: '100%'
};

function Map({ stores }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={stores && { lat: stores[0].lat, lng: stores[0].lng }}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {stores && stores.map((store, index) => {
          return (
            <Marker
              key={index}
              position={{
                lat: store.lat,
                lng: store.lng
              }}
              icon={pinMap} />
          )
        })}
        <></>
      </GoogleMap>
    </MapContainer>
  ) : <></>
}

export default React.memo(Map)

const MapContainer = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  margin-left: 24px;
  ${biggerThanDesktop} {
    display: flex;
  }
`