import { useEffect, useState } from 'react';
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

type Props = {
  stores: any
}

function Map({ stores }: Props) {
  const [centerPosition, setCenterPosition] = useState<any>()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key
  })

  const [, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  useEffect(() => {
    setCenterPosition({ lat: stores[0].lat, lng: stores[0].lng })
  }, [stores])

  return isLoaded ? (
    <MapContainer>
      {centerPosition && <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerPosition && centerPosition}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {stores.map((store: any, index: number) => {
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
      }
    </MapContainer>
  ) : <></>
}

export default React.memo(Map)

const MapContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`