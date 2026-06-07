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
    id: "terre-terre-1",
    locationId: "terre-terre",
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    alt: "Terre Terre garden Aubervilliers",
    caption: "Terre Terre — Aubervilliers",
  },
  {
    id: "petits-pains-1",
    locationId: "petits-pains",
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop",
    alt: "Compost Petits Pains Montreuil",
    caption: "Compost Petits Pains — Montreuil",
  },
  {
    id: "charmes-1",
    locationId: "charmes",
    src: "https://images.unsplash.com/photo-1542601906897-ecd5d1a3cdad?w=400&h=300&fit=crop",
    alt: "Charmes garden Fontenay-sous-Bois",
    caption: "Charmes — Fontenay-sous-Bois",
  },
  {
    id: "jean-mace-1",
    locationId: "jean-mace",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    alt: "Composteur Jean Macé Fontenay-sous-Bois",
    caption: "Composteur Jean Macé — Fontenay-sous-Bois",
  },
];

export default function PhotoGallery({ activeLocationId }: PhotoGalleryProps) {
  const displayPhotos = activeLocationId
    ? photos.filter((p) => p.locationId === activeLocationId)
    : photos;

  if (!displayPhotos.length) return null;

  return (
    <div className="photo-gallery-container">
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
