import L from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
type Props = {
  location: {
    lat: number;
    lon: number;
  };
};

export const MapComponent = ({ location }: Props) => {

   const [ isClient, setIsClient ] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const position = [location.lat, location.lon];

  return (
    isClient && (
    <div style={{ height: '180px', width: '100%' }}>
      <MapContainer
        // @ts-ignore
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* @ts-ignore */}
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    )
  );
};
