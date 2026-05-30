import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./KoinpostMap.css";

interface Location {
  id: string;
  name: string;
  partner: string;
  x: number;
  y: number;
}

interface KoinpostMapProps {
  onLocationClick: (locationId: string) => void;
}

const locations: Location[] = [
  {
    id: "fontenay",
    name: "Fontenay-sous-Bois",
    partner: "Ville de Fontenay-sous-Bois",
    x: 35,
    y: 45,
  },
  {
    id: "grand-paris",
    name: "Grand Paris",
    partner: "Métropole du Grand Paris",
    x: 65,
    y: 55,
  },
];

export default function KoinpostMap({ onLocationClick }: KoinpostMapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="koinpost-map-container">
      <div className="map-wrapper">
        <img
          src="../../public/images/france_map.webp"
          alt="Map of France"
          width="50%"
        />
        <svg
          style={{ position: "absolute", top: "0", left: "0" }}
          className="map-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Markers */}
          {locations.map((location) => (
            <g key={location.id}>
              <motion.circle
                cx={location.x}
                cy={location.y}
                r="2"
                fill="#000"
                className="map-marker"
                whileHover={{ r: 5 }}
                onClick={() => onLocationClick(location.id)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                style={{ cursor: "pointer" }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Location labels with hover info */}
      <div className="map-labels">
        {locations.map((location) => (
          <motion.div
            key={location.id}
            className="map-label"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
            }}
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <AnimatePresence>
              {hoveredLocation === location.id && (
                <motion.div
                  className="location-tooltip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="tooltip-name">{location.name}</div>
                  <div className="tooltip-partner">{location.partner}</div>
                  <div className="tooltip-hint">Click to view photos</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="map-footer">
        <p>
          Hover over markers to see locations and partners. Click to view
          photos.
        </p>
      </div>
    </div>
  );
}
