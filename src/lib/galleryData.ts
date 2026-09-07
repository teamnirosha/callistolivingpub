export interface GalleryItem {
  id: string;
  title: string;
  category: "Living Rooms" | "Primary Suites" | "Kitchens & Dining" | "Bespoke Joinery" | "Architectural Details" | "Commercial & Ateliers";
  image: string;
  location: string;
  year: string;
  description: string;
}

const CATEGORIES = [
  "Living Rooms",
  "Primary Suites",
  "Kitchens & Dining",
  "Bespoke Joinery",
  "Architectural Details",
  "Commercial & Ateliers",
] as const;

// Map all 61 images from /Gallary/
export const GALLERY_ITEMS: GalleryItem[] = Array.from({ length: 61 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0");
  const cat = CATEGORIES[i % CATEGORIES.length];
  
  const titles = [
    "Monolithic Living Atelier",
    "Primary Suite Sanctuary",
    "Smoked Walnut Joinery",
    "Travertine Culinary Island",
    "Sculptural Marble Lounge",
    "Minimal Architectural Courtyard",
    "Belgian Linen Bedroom Suite",
    "Linear Brass & Light Gallery",
    "White Oak Penthouse Salon",
    "Private Estate Dining Room",
  ];
  
  const locations = ["Mumbai", "Pune", "Delhi NCR", "Bangalore", "Goa", "Alibaug", "Hyderabad"];
  
  return {
    id: `gallery-${num}`,
    title: `${titles[i % titles.length]} No. ${num}`,
    category: cat,
    image: `/Gallary/interior_design_${num}.jpeg`,
    location: locations[i % locations.length],
    year: "2024–2025",
    description: "Bespoke interior architecture crafted with rare natural stone, artisan joinery, and tailored spatial proportions.",
  };
});

// Curated top 4 horizontal architectural interior shots for main page showcase
export const HOMEPAGE_GALLERY_ITEMS: GalleryItem[] = [
  GALLERY_ITEMS[0],  // interior_design_001.jpeg
  GALLERY_ITEMS[2],  // interior_design_003.jpeg
  GALLERY_ITEMS[3],  // interior_design_004.jpeg
  GALLERY_ITEMS[7],  // interior_design_008.jpeg
];
