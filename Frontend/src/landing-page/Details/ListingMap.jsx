import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';   // REQUIRED — without it: scrambled tiles, unstyled controls

// ---- Fix for broken default marker icons under Vite ----
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
// ---------------------------------------------------------

function ListingMap({ lat, lng, title }) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}                       // page scroll doesn't hijack the map
      style={{ height: '400px', width: '100%' }}    // REQUIRED — no height = invisible map
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[lat, lng]}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default ListingMap;