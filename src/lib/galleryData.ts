export interface GalleryItem {
  id: string;
  title: string;
  category: "Living Rooms" | "Primary Suites" | "Kitchens & Dining" | "Bespoke Joinery" | "Interior Details" | "Commercial & Ateliers";
  image: string;
  location: string;
  year: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-001",
    title: "Bespoke Mandir Prayer Shrine",
    category: "Interior Details",
    image: "/Gallary/interior_design_001.jpeg",
    location: "Pune",
    year: "2025",
    description: "Handcrafted wooden prayer shrine with frosted devotional glass panels and artisan bell motifs."
  },
  {
    id: "gallery-002",
    title: "Geometric Teal & White Master Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_002.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Contemporary multi-panel sliding wardrobe with contrasting deep teal and matte white finish."
  },
  {
    id: "gallery-003",
    title: "Minimalist Master Suite Platform Bed",
    category: "Primary Suites",
    image: "/Gallary/interior_design_003.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Integrated wooden headboard, floating bed base, and fluted vertical wooden room divider."
  },
  {
    id: "gallery-004",
    title: "Two-Tone Walnut & Gloss Tall Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_004.jpeg",
    location: "Hyderabad",
    year: "2025",
    description: "Floor-to-ceiling storage suite with high-gloss acrylic and warm walnut wood grain finishes."
  },
  {
    id: "gallery-005",
    title: "Artisan Jali Screen Partition Mandir",
    category: "Interior Details",
    image: "/Gallary/interior_design_005.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Custom laser-cut CNC floral trellis partition cabinet with integrated prayer altar."
  },
  {
    id: "gallery-006",
    title: "Contemporary Olive & Ivory Modular Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_006.jpeg",
    location: "Pune",
    year: "2025",
    description: "Two-tone modular kitchen featuring olive green lower cabinets, glossy cream overheads, and mosaic backsplash."
  },
  {
    id: "gallery-007",
    title: "Chevron Inlay Children's Bedroom Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_007.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Playful geometric chevron styling in ochre and marine teal with seamless white upper storage."
  },
  {
    id: "gallery-008",
    title: "Cobalt Blue & Quartz L-Shaped Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_008.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Modern gloss cobalt blue base cabinetry with white overhead storage and black polished granite countertop."
  },
  {
    id: "gallery-009",
    title: "Floor-to-Ceiling Matte White Storage Suite",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_009.jpeg",
    location: "Goa",
    year: "2025",
    description: "Architectural monolithic wardrobe with slim vertical hardware and integrated crown header."
  },
  {
    id: "gallery-010",
    title: "Modular Kitchen Corner Pantry Unit",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_010.jpeg",
    location: "Pune",
    year: "2025",
    description: "Custom pull-out wicker baskets, quartz prep counters, and gloss lacquered modular cabinetry."
  },
  {
    id: "gallery-011",
    title: "Primary Suite Vanity & Accent Wardrobe",
    category: "Primary Suites",
    image: "/Gallary/interior_design_011.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Built-in bedroom storage with turquoise and sunshine yellow banding, mirror, and integrated lighting."
  },
  {
    id: "gallery-012",
    title: "Illuminated Oval Vanity & Glass Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_012.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Luxury dressing suite featuring backlit fluted vanity mirror, bronze glass wardrobe, and accessory shelves."
  },
  {
    id: "gallery-013",
    title: "Sage Green Joinery with Half-Moon Mirror",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_013.jpeg",
    location: "Alibaug",
    year: "2025",
    description: "Custom fluted wood acoustic slats, backlit circular mirror, and illuminated glass display closet."
  },
  {
    id: "gallery-014",
    title: "Classic Luxury Island Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_014.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Marble-topped center island with velvet barstools, glass mullion cabinets, and brushed silver pendants."
  },
  {
    id: "gallery-015",
    title: "Spacious Beige Marble U-Shaped Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_015.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Expansive contemporary kitchen with seamless under-cabinet LED channel lighting and polished marble flooring."
  },
  {
    id: "gallery-016",
    title: "High-Gloss Monochrome Modular Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_016.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Sleek reflective gloss white and graphite cabinetry with integrated built-in appliances and picture window."
  },
  {
    id: "gallery-017",
    title: "Grand Chandelier Luxury Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_017.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Warm amber ambient lighting, central crystal chandelier, and travertine marble floor tiling."
  },
  {
    id: "gallery-018",
    title: "Contemporary Champagne Kitchen Suite",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_018.jpeg",
    location: "Hyderabad",
    year: "2025",
    description: "Wide-perspective view of illuminated glass cabinets, quartz countertops, and built-in refrigerator column."
  },
  {
    id: "gallery-019",
    title: "Sunlit Travertine U-Shaped Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_019.jpeg",
    location: "Goa",
    year: "2025",
    description: "Daylight-filled kitchen overlooking landscaped garden, with recessed strip lighting and seamless drawers."
  },
  {
    id: "gallery-020",
    title: "Warm Oak & Cream Contemporary Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_020.jpeg",
    location: "Pune",
    year: "2025",
    description: "Natural fluted oak upper cabinets, matte cream base units, and undermount perimeter ambient lighting."
  },
  {
    id: "gallery-021",
    title: "Sage Green Island Kitchen with Pendant Trio",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_021.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Fluted island breakfast counter, matte black conical pendant lamps, and integrated glass display units."
  },
  {
    id: "gallery-022",
    title: "Luxury Fluted Breakfast Bar & Lounge",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_022.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Warm slatted wood island with velvet upholstered stools, amber glass overheads, and gold pendants."
  },
  {
    id: "gallery-023",
    title: "Classic Sage Green Shaker Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_023.jpeg",
    location: "Alibaug",
    year: "2025",
    description: "Artisan cabinetry with antique brass hardware, marble veined backsplash, and gold gooseneck faucet."
  },
  {
    id: "gallery-024",
    title: "Curved Fluted Island & Warm Wood Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_024.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Sculptural curved timber island, globe glass pendant lights, and ambient display tower."
  },
  {
    id: "gallery-025",
    title: "Mint Green & Gold Luxury Kitchen Residence",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_025.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Grand kitchen design with rounded island display, curved bar seating, and brass glass-front cabinets."
  },
  {
    id: "gallery-026",
    title: "Minimalist Cream & Appliance Column Kitchen",
    category: "Kitchens & Dining",
    image: "/Gallary/interior_design_026.jpeg",
    location: "Pune",
    year: "2025",
    description: "Fluted accent panelling, built-in double ovens, open display shelving, and polished marble flooring."
  },
  {
    id: "gallery-027",
    title: "Natural Timber & Linen Wardrobe Suite",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_027.jpeg",
    location: "Goa",
    year: "2025",
    description: "Custom teak framing with linen-textured panel inserts and circular handcrafted door pulls."
  },
  {
    id: "gallery-028",
    title: "Heritage Carved Wood Bedroom Wardrobe",
    category: "Primary Suites",
    image: "/Gallary/interior_design_028.jpeg",
    location: "Pune",
    year: "2025",
    description: "Rich woodcraft with woven heritage textile inlays and integrated bedside platform."
  },
  {
    id: "gallery-029",
    title: "Contemporary Olive Dressing & Wardrobe Suite",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_029.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Fluted wall cladding with backlit crescent mirror, accessory vitrine, and bouclé vanity stool."
  },
  {
    id: "gallery-030",
    title: "Arched Fluted Wardrobe with Open Shelves",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_030.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Soft rose and cream arched wardrobe with central vertical display shelving."
  },
  {
    id: "gallery-031",
    title: "Integrated Study & Curved Wardrobe Unit",
    category: "Primary Suites",
    image: "/Gallary/interior_design_031.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Scandi-modern bedroom joinery featuring built-in work desk with recessed LED desk lighting."
  },
  {
    id: "gallery-032",
    title: "Minimalist Wardrobe with Oval Display Niches",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_032.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Architectural wardrobe with integrated rounded shelving niches and semicircular door handles."
  },
  {
    id: "gallery-033",
    title: "Bronze Tinted Glass Walk-In Closet",
    category: "Primary Suites",
    image: "/Gallary/interior_design_033.jpeg",
    location: "Alibaug",
    year: "2025",
    description: "Atmospheric luxury wardrobe with vertical lighting channels, leather vanity bench, and bronze aluminum frames."
  },
  {
    id: "gallery-034",
    title: "Pastel Blue Arched Children's Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_034.jpeg",
    location: "Pune",
    year: "2025",
    description: "Arched paneling with playful bunny hardware, illuminated display alcoves, and integrated drawers."
  },
  {
    id: "gallery-035",
    title: "Whimsical Bear Study & Bedroom Joinery",
    category: "Primary Suites",
    image: "/Gallary/interior_design_035.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Custom children's room with character wardrobe, illuminated study alcove, and fluted paneling."
  },
  {
    id: "gallery-036",
    title: "Walnut & Cream Wardrobe with Display Tower",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_036.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Rich woodgrain textures contrasted with curved cream panels and warm illuminated display cubbies."
  },
  {
    id: "gallery-037",
    title: "Minimalist Sculptural Cutout Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_037.jpeg",
    location: "Hyderabad",
    year: "2025",
    description: "Clean white cabinetry with organic curved solid wood cutout handle detailing."
  },
  {
    id: "gallery-038",
    title: "Master Bedroom U-Grooved Headboard Wardrobe",
    category: "Primary Suites",
    image: "/Gallary/interior_design_038.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Bespoke bedroom joinery with vertical U-routing, brass handle plates, and mirrored dressing wall."
  },
  {
    id: "gallery-039",
    title: "Arched Suite with Built-In Desk & Open Vitrine",
    category: "Primary Suites",
    image: "/Gallary/interior_design_039.jpeg",
    location: "Goa",
    year: "2025",
    description: "Integrated bedroom storage, backlit warm oak shelves, and dedicated vanity workspace."
  },
  {
    id: "gallery-040",
    title: "Pastel Grey Arched Wardrobe with Slatted Base",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_040.jpeg",
    location: "Pune",
    year: "2025",
    description: "Soft tone-on-tone arched door profile with fluted lower drawers and natural wooden pulls."
  },
  {
    id: "gallery-041",
    title: "Curved Profile High-Gloss Wardrobe Suite",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_041.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "High-sheen reflective wardrobe with rounded outer lighting trim and brushed brass hardware."
  },
  {
    id: "gallery-042",
    title: "Fluted Gold Inlay Master Bedroom Wardrobe",
    category: "Primary Suites",
    image: "/Gallary/interior_design_042.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Tall vertical fluting accented with metallic champagne gold inlays and extended pull handles."
  },
  {
    id: "gallery-043",
    title: "Neo-Classical Moulded Panel Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_043.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Refined architectural boiserie moldings with soft matte grey finish and solid brass pulls."
  },
  {
    id: "gallery-044",
    title: "Luxury Master Suite Wardrobe & Vanity",
    category: "Primary Suites",
    image: "/Gallary/interior_design_044.jpeg",
    location: "Alibaug",
    year: "2025",
    description: "Curved illuminated fluted panel, glowing oval mirror, dressing vanity, and glass-front closet."
  },
  {
    id: "gallery-045",
    title: "Sport Bedroom Wardrobe & Open Hanger Bay",
    category: "Primary Suites",
    image: "/Gallary/interior_design_045.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Custom children's bedroom suite with dynamic graphic motifs, low bench storage, and open hanging bay."
  },
  {
    id: "gallery-046",
    title: "Gloss & Slatted Wood Dressing Room Suite",
    category: "Primary Suites",
    image: "/Gallary/interior_design_046.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Warm backlighting, vanity drawers with gold pulls, fluted wood accents, and matching dressing stool."
  },
  {
    id: "gallery-047",
    title: "Emerald & Cream Arched Vanity Dressing Room",
    category: "Primary Suites",
    image: "/Gallary/interior_design_047.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Arched dual wardrobes with center dressing alcove, fluted green paneling, and oval vanity mirror."
  },
  {
    id: "gallery-048",
    title: "Slate Grey Contemporary Wardrobe with Vanity",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_048.jpeg",
    location: "Pune",
    year: "2025",
    description: "High-gloss grey doors with vertical fluted lighting strips, mirror cabinet, and low drawers."
  },
  {
    id: "gallery-049",
    title: "Champagne Wardrobe with Glass Vitrine & Mirror",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_049.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Integrated dressing table with illuminated mirror, bronze glass wardrobe, and soft ambient glow."
  },
  {
    id: "gallery-050",
    title: "Charcoal Fluted Wardrobe with Rose Gold Trim",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_050.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Dramatic dark fluting with rose gold handles, illuminated circular dressing mirror, and open display."
  },
  {
    id: "gallery-051",
    title: "Classical Mullion Glass Armoire Unit",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_051.jpeg",
    location: "Goa",
    year: "2025",
    description: "Grey traditional mullioned glass doors with cross-pattern woodwork and integrated soft lighting."
  },
  {
    id: "gallery-052",
    title: "Cane Weave & Walnut Wood Wardrobe Suite",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_052.jpeg",
    location: "Alibaug",
    year: "2025",
    description: "Handwoven natural rattan panel doors paired with rich walnut frame and arched display shelving."
  },
  {
    id: "gallery-053",
    title: "Bespoke Foyer Entryway Niche & Wardrobe",
    category: "Living Rooms",
    image: "/Gallary/interior_design_053.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Entry hall joinery featuring arched coat rack niche, marble bench, and classic taupe cabinetry."
  },
  {
    id: "gallery-054",
    title: "Illuminated Glass Vitrine Flanked Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_054.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Cream lacquer central doors flanked by vertical warm-lit fluted glass display cabinets."
  },
  {
    id: "gallery-055",
    title: "Grand Master Walk-In Dressing Room",
    category: "Primary Suites",
    image: "/Gallary/interior_design_055.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "All-white dressing suite with glass display wardrobes, marble jewelry island, and herringbone oak floors."
  },
  {
    id: "gallery-056",
    title: "Arched Beige Storage Wall with Ambient Niches",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_056.jpeg",
    location: "Pune",
    year: "2025",
    description: "Curved arched panels with warm amber illuminated book niches and fluted skirting."
  },
  {
    id: "gallery-057",
    title: "Bespoke Bedroom Suite with Glass Closet",
    category: "Primary Suites",
    image: "/Gallary/interior_design_057.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Integrated dressing table, backlit curved wall accent, and dark aluminum frame glass closet."
  },
  {
    id: "gallery-058",
    title: "Dark Bronze Arch Glass Walk-In Wardrobe",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_058.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Curved top arch profile with smoked glass doors and warm vertical perimeter strip illumination."
  },
  {
    id: "gallery-059",
    title: "Corner Glass Walk-In Closet with Amber Glow",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_059.jpeg",
    location: "Hyderabad",
    year: "2025",
    description: "Wrap-around glass closet system with concealed ceiling tracks and warm floating shelf lights."
  },
  {
    id: "gallery-060",
    title: "Illuminated Glass Display Wardrobe Suite",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_060.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Floor-to-ceiling glass doors with lighted garment racks, folded cloth cubbies, and lower shoe display."
  },
  {
    id: "gallery-061",
    title: "Champagne Gold Walk-In Dressing Gallery",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_061.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Bespoke gold frame vitrines with illuminated handbag display shelves and lower chest of drawers."
  },
  {
    id: "gallery-062",
    title: "Artisan Watch & Fine Jewelry Drawer Organizer",
    category: "Interior Details",
    image: "/Gallary/interior_design_062.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Handcrafted velvet-lined watch compartments, sunglass dividers, and gold drawer hardware."
  },
  {
    id: "gallery-063",
    title: "Bronze Anodized Multi-Bay Glass Closet",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_063.jpeg",
    location: "Goa",
    year: "2025",
    description: "Seamless glass front wardrobe with warm integrated shelf glow and full-length vanity mirror panel."
  },
  {
    id: "gallery-064",
    title: "Luxury Dressing Suite with Marble Accessory Island",
    category: "Primary Suites",
    image: "/Gallary/interior_design_064.jpeg",
    location: "Alibaug",
    year: "2025",
    description: "Panoramic view of walk-in wardrobe with glass front cabinets, illuminated shelving, and marble vanity island."
  },
  {
    id: "gallery-065",
    title: "Warm Beige Arched Wardrobe Installation",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_065.jpeg",
    location: "Pune",
    year: "2025",
    description: "Custom fluted baseboard, vertical brass hardware, and warm LED illuminated display recesses."
  },
  {
    id: "gallery-066",
    title: "Minimalist Black Frame Master Glass Closet",
    category: "Primary Suites",
    image: "/Gallary/interior_design_066.jpeg",
    location: "Delhi NCR",
    year: "2025",
    description: "Modern bedroom integration featuring dark glass doors, interior wardrobe lighting, and bedside table."
  },
  {
    id: "gallery-067",
    title: "Contemporary Cream Wardrobe with Glass Pillars",
    category: "Bespoke Joinery",
    image: "/Gallary/interior_design_067.jpeg",
    location: "Bangalore",
    year: "2025",
    description: "Warm lit glass display cabinets framing smooth cream wardrobe doors with vertical brass handles."
  }
];

// Curated top 4 architectural interior shots for main page showcase
export const HOMEPAGE_GALLERY_ITEMS: GalleryItem[] = [
  GALLERY_ITEMS[13]!, // #014 - Classic Luxury Island Kitchen
  GALLERY_ITEMS[43]!, // #044 - Luxury Master Suite Wardrobe & Vanity
  GALLERY_ITEMS[54]!, // #055 - Grand Master Walk-In Dressing Room
  GALLERY_ITEMS[23]!, // #024 - Curved Fluted Island & Warm Wood Kitchen
];
