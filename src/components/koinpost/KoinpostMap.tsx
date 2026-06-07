import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import "./KoinpostMap.css";

interface Partner {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  slug: string;
  coords: [number, number];
}

const partners: Partner[] = [
  {
    id: "terre-terre",
    name: "Terre Terre",
    address: "223 Boulevard Félix Faure",
    city: "93300 Aubervilliers",
    hours: "Jeu 9h–17h · Sam (récompenses)",
    slug: "terre-terre",
    coords: [48.9130, 2.3715],
  },
  {
    id: "petits-pains",
    name: "Compost Petits Pains",
    address: "182 Boulevard Aristide Briand",
    city: "93100 Montreuil",
    hours: "Dim 11h–12h30",
    slug: "petits-pains",
    coords: [48.8583, 2.4450],
  },
  {
    id: "charmes",
    name: "Charmes",
    address: "53 Avenue des Charmes",
    city: "94120 Fontenay-sous-Bois",
    hours: "9h–22h",
    slug: "charmes",
    coords: [48.8500, 2.4840],
  },
  {
    id: "jean-mace",
    name: "Composteur Jean Macé",
    address: "9 Rue Jean Macé",
    city: "94120 Fontenay-sous-Bois",
    hours: "24h/24",
    slug: "composteur-jean-mace",
    coords: [48.8543, 2.4767],
  },
];

const MAP_CENTER: [number, number] = [48.878, 2.428];
const MAP_ZOOM = 12;

interface KoinpostMapProps {
  onLocationClick: (locationId: string) => void;
}

export default function KoinpostMap({ onLocationClick }: KoinpostMapProps) {
  const { lang } = useLang();
  const t = translations[lang].leKoinpost;

  return (
    <div className="koinpost-map-wrapper">
      <MapContainer
        center={MAP_CENTER}
        zoom={MAP_ZOOM}
        className="koinpost-leaflet-map"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
        />
        {partners.map((partner) => (
          <CircleMarker
            key={partner.id}
            center={partner.coords}
            radius={7}
            pathOptions={{
              color: "#111",
              fillColor: "#111",
              fillOpacity: 1,
              weight: 0,
            }}
          >
            <Popup className="koinpost-popup">
              <div className="popup-name">{partner.name}</div>
              <div className="popup-address">
                {partner.address}<br />{partner.city}
              </div>
              <div className="popup-hours">{partner.hours}</div>
              <div className="popup-actions">
                <button
                  className="popup-btn popup-btn--photos"
                  onClick={() => onLocationClick(partner.id)}
                >
                  {t.viewPhotos}
                </button>
                <a
                  href={`https://www.lekoinpost.com/jardins/${partner.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-btn popup-btn--site"
                >
                  {t.viewOnSite} ↗
                </a>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      <div className="koinpost-partners">
        <h4 className="partners-heading">{t.partnersHeading}</h4>
        <div className="partners-list">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-row">
              <div className="partner-info">
                <span className="partner-name">{partner.name}</span>
                <span className="partner-address">
                  {partner.address}, {partner.city}
                </span>
                <span className="partner-hours">
                  {t.hoursLabel}: {partner.hours}
                </span>
              </div>
              <div className="partner-actions">
                <button
                  className="partner-btn partner-btn--photos"
                  onClick={() => onLocationClick(partner.id)}
                >
                  {t.viewPhotos}
                </button>
                <a
                  href={`https://www.lekoinpost.com/jardins/${partner.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-btn partner-btn--site"
                >
                  {t.viewOnSite} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
