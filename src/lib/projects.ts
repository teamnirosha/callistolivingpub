export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  image: string;
  intro: string;
  rooms: string[];
  galleryImages: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "the-obsidian-residence",
    title: "The Obsidian Residence",
    category: "Bespoke Residential Interior",
    location: "Alibaug, India",
    year: "2025",
    area: "6,400 sq.ft.",
    image: "/Gallary/interior_design_001.jpeg",
    intro:
      "A bespoke residential interior sculpted with rich basalt marble, warm indirect lighting, and artisanal smoked walnut millwork. Every space is tailored for tranquil living and refined luxury.",
    rooms: ["Entrance Foyer", "Living Lounge", "Dining Atelier", "Modular Kitchen", "Master Suite", "Private Terrace"],
    galleryImages: [
      "/Gallary/interior_design_001.jpeg",
      "/Gallary/interior_design_002.jpeg",
      "/Gallary/interior_design_003.jpeg",
      "/Gallary/interior_design_004.jpeg",
    ],
  },
  {
    slug: "modern-minimal-residence",
    title: "Modern Minimal Residence",
    category: "Contemporary Interior Design",
    location: "Copenhagen, Denmark",
    year: "2024",
    area: "2,900 sq.ft.",
    image: "/Gallary/interior_design_005.jpeg",
    intro:
      "Restraint as luxury. Natural oak joinery, bespoke lime plaster finishes, and curated contemporary furniture held in harmony across an open interior layout.",
    rooms: ["Formal Living", "Dining Salon", "Chef's Kitchen", "Primary Bedroom", "Guest Suite", "Reading Corner"],
    galleryImages: [
      "/Gallary/interior_design_005.jpeg",
      "/Gallary/interior_design_006.jpeg",
      "/Gallary/interior_design_007.jpeg",
      "/Gallary/interior_design_008.jpeg",
    ],
  },
  {
    slug: "contemporary-villa",
    title: "Contemporary Villa Sanctuary",
    category: "Luxury Villa Interior",
    location: "Marbella, Spain",
    year: "2025",
    area: "8,100 sq.ft.",
    image: "/Gallary/interior_design_010.jpeg",
    intro:
      "Book-matched Italian marble, champagne brass detailing, and custom interior styling that transforms every room into a timeless living experience.",
    rooms: ["Grand Foyer", "Open Living", "Formal Dining", "Island Kitchen", "Master Sanctuary", "Entertainment Lounge"],
    galleryImages: [
      "/Gallary/interior_design_009.jpeg",
      "/Gallary/interior_design_010.jpeg",
      "/Gallary/interior_design_011.jpeg",
      "/Gallary/interior_design_012.jpeg",
    ],
  },
  {
    slug: "luxury-apartment",
    title: "Skyline Penthouse Residence",
    category: "Penthouse Interior Design",
    location: "Mumbai, India",
    year: "2024",
    area: "3,250 sq.ft.",
    image: "/Gallary/interior_design_015.jpeg",
    intro:
      "A high-floor penthouse interior tuned around skyline vistas, bespoke Italian furnishings, and layered atmospheric lighting.",
    rooms: ["Sky Living Room", "Dining Suite", "Gourmet Kitchen", "Master Suite", "Walk-in Wardrobe", "Balcony Lounge"],
    galleryImages: [
      "/Gallary/interior_design_013.jpeg",
      "/Gallary/interior_design_014.jpeg",
      "/Gallary/interior_design_015.jpeg",
      "/Gallary/interior_design_016.jpeg",
    ],
  },
];

export const getProject = (slug: string) => {
  // Support legacy slugs for backward compatibility
  if (slug === "the-black-house") return PROJECTS[0];
  return PROJECTS.find((p) => p.slug === slug);
};
