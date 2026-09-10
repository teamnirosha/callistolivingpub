export interface GalleryItem {
  id: string;
  title: string;
  category: "Living Rooms" | "Primary Suites" | "Kitchens & Dining" | "Bespoke Joinery" | "Interior Details" | "Commercial & Ateliers";
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
  "Interior Details",
  "Commercial & Ateliers",
] as const;

const REAL_TITLES = [
  "Contemporary Residence Living Room",
  "Master Bedroom Suite",
  "Custom Oak Joinery",
  "Luxury Kitchen & Marble Island",
  "Modern Living Space",
  "Spatial Interior Foyer",
  "Linen Suite & Bedroom Design",
  "Lighting & Interior Detail",
  "Penthouse Lounge & Dining",
  "Private Estate Interior",
];

const LOCATIONS = ["Mumbai", "Pune", "Delhi NCR", "Bangalore", "Goa", "Alibaug", "Hyderabad"];

// Map all 61 images from /Gallary/
export const GALLERY_ITEMS: GalleryItem[] = Array.from({ length: 61 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0");
  const cat = CATEGORIES[i % CATEGORIES.length] as GalleryItem["category"];
  const title = REAL_TITLES[i % REAL_TITLES.length] || "Interior Design";
  const location = LOCATIONS[i % LOCATIONS.length] || "Mumbai";

  return {
    id: `gallery-${num}`,
    title: `${title}`,
    category: cat,
    image: `/Gallary/interior_design_${num}.jpeg`,
    location: location,
    year: "2024",
    description: "Bespoke interior design crafted with premium natural materials, artisan woodworking, and tailored spatial proportions.",
  };
});

// Curated top 4 horizontal architectural interior shots for main page showcase
export const HOMEPAGE_GALLERY_ITEMS: GalleryItem[] = [
  GALLERY_ITEMS[0]!,  // interior_design_001.jpeg
  GALLERY_ITEMS[2]!,  // interior_design_003.jpeg
  GALLERY_ITEMS[3]!,  // interior_design_004.jpeg
  GALLERY_ITEMS[7]!,  // interior_design_008.jpeg
];
