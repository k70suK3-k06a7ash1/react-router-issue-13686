import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
type Props = {
  location: {
    lat: number;
    lon: number;
  };
};

export const MapComponent = ({ location }: Props) => {
  // --- アイコンパスの手動設定 ---
  // @ts-ignore (delete L.Icon.Default.prototype._getIconUrl; で型エラーが出る場合)
  // biome-ignore lint/performance/noDelete: <explanation>
  // delete L.Icon.Default.prototype._getIconUrl;

  // L.Icon.Default.mergeOptions({
  //   iconRetinaUrl: '/images/marker-icon-2x.png', // public/images/ にコピーした場合
  //   iconUrl: '/images/marker-icon.png', // public/images/ にコピーした場合
  //   shadowUrl: '/images/marker-shadow.png', // public/images/leaflet/ にコピーした場合
  // });

  const position = [location.lat, location.lon];

  return (
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
  );
};
