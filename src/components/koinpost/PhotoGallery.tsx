import { motion } from "motion/react";
import "./PhotoGallery.css";

interface PhotoItem {
  id: string;
  locationId: string;
  src: string;
  alt: string;
  caption: string;
}

interface PhotoGalleryProps {
  activeLocationId: string | null;
}

const photos: PhotoItem[] = [
  {
    id: "fontenay-1",
    locationId: "fontenay",
    src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop",
    alt: "Koinpost in Fontenay-sous-Bois",
    caption: "Koinpost Installation - Fontenay-sous-Bois",
  },
  {
    id: "fontenay-2",
    locationId: "fontenay",
    src: "https://images.unsplash.com/photo-1542145990-1257f904a5ba?w=400&h=300&fit=crop",
    alt: "Community composting in Fontenay",
    caption: "Community Participation - Fontenay-sous-Bois",
  },
  {
    id: "grand-paris-1",
    locationId: "grand-paris",
    src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop",
    alt: "Koinpost in Grand Paris",
    caption: "Koinpost Installation - Grand Paris Métropole",
  },
  {
    id: "grand-paris-2",
    locationId: "grand-paris",
    src: "https://images.unsplash.com/photo-1542145990-1257f904a5ba?w=400&h=300&fit=crop",
    alt: "Environmental project in Grand Paris",
    caption: "Ecosystem Development - Grand Paris Métropole",
  },
];

export default function PhotoGallery({ activeLocationId }: PhotoGalleryProps) {
  const displayPhotos = activeLocationId
    ? photos.filter((p) => p.locationId === activeLocationId)
    : photos;

  return (
    <div className="photo-gallery-container">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gallery-title"
      >
        {activeLocationId ? "Location Gallery" : "All Locations"}
      </motion.h3>

      <div className="photo-gallery">
        {displayPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="photo-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="photo-image-wrapper">
              <img src={photo.src} alt={photo.alt} className="photo-image" />
            </div>
            <p className="photo-caption">{photo.caption}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
