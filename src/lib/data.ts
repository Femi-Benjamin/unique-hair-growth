export interface ProductItem {
  id: number;
  name: string;
  price: number; // numeric price in NGN
  priceDisplay: string;
  category: "Oils" | "Treatments" | "Serums" | "Shampoos" | "Styling" | "Sprays" | "Bundles";
  description: string;
  detailedDescription?: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  image: string;
  rating: number;
  reviews: number;
  isBestseller?: boolean;
  isNew?: boolean;
  size: string;
  hairTypes: string[]; // e.g. "4A-4C", "3A-3C", "Transitioning", "Locs", "Damaged"
}

export const products: ProductItem[] = [
  {
    id: 1,
    name: "Chebe & Rosemary Scalp Growth Elixir",
    price: 8500,
    priceDisplay: "₦8,500",
    category: "Oils",
    description: "Cold-pressed Chadian Chebe extract and wild rosemary oil to stimulate dormant follicles.",
    detailedDescription: "Our flagship growth formula harnesses the ancient Chadian ritual of Chebe powder, blended seamlessly with antioxidant-rich cold-pressed Jamaican Black Castor oil, Rosemary leaf essential oil, and Virgin Coconut oil. Clinically tested to reduce shedding by 78% in 4 weeks.",
    benefits: ["Awakens dormant follicles", "Reduces shedding by 78%", "Soothes dry itchy scalp", "Locks in deep moisture"],
    ingredients: ["Raw African Chebe Powder", "Organic Rosemary Oil", "Cold-Pressed Black Castor Oil", "Golden Jojoba Oil", "Vitamin E (Tocopherol)", "Peppermint Leaf Oil"],
    howToUse: "Part hair into 4 sections. Apply 3-5 drops directly along the scalp. Massage gently in circular motions for 3-5 minutes. Use 3-4 times weekly or as a warm pre-poo oil treatment.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 248,
    isBestseller: true,
    size: "100ml / 3.4 fl oz",
    hairTypes: ["4A-4C Coily", "3A-3C Curly", "Transitioning", "Protective Styles", "Locs"]
  },
  {
    id: 2,
    name: "Raw Shea & Baobab Deep Moisture Masque",
    price: 9800,
    priceDisplay: "₦9,800",
    category: "Treatments",
    description: "Intensive repair butter masque for brittle, high-porosity and color-treated curls.",
    detailedDescription: "Infused with raw Ghanaian Shea Butter, cold-pressed Senegalese Baobab oil, and hydrolysed wheat proteins, this ultra-rich conditioning butter melts into cuticles to restore elasticity, prevent split ends, and deliver mirror-like gloss.",
    benefits: ["Restores protein-moisture balance", "Mends damaged split ends", "Eliminates frizz instantly", "Detangles effortlessly"],
    ingredients: ["Unrefined Nilotica Shea Butter", "Cold-Pressed Baobab Seed Oil", "Hydrolyzed Silk Protein", "Aloe Vera Leaf Juice", "Raw Honey Extract", "Pro-Vitamin B5"],
    howToUse: "After shampooing, apply generously from roots to ends. Detangle with a wide-tooth comb. Cover with a plastic cap and apply moderate heat for 20 minutes (or leave for 30 minutes without heat). Rinse with cool water.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 184,
    isBestseller: true,
    size: "350g / 12.3 oz",
    hairTypes: ["High Porosity", "4A-4C Coily", "Color Treated", "Chemically Damaged"]
  },
  {
    id: 3,
    name: "Botanical Tea Tree & Neem Scalp Serum",
    price: 7200,
    priceDisplay: "₦7,200",
    category: "Serums",
    description: "Soothes flake buildup, controls sebum, and eliminates stubborn dandruff naturally.",
    detailedDescription: "A gentle water-light anti-inflammatory serum formulated with organic Neem oil, Tea Tree extract, Willow Bark salicylic acid, and soothing Chamomile water. Purifies the scalp microbiome without stripping essential natural oils.",
    benefits: ["Eliminates dandruff & flakes", "Calms immediate scalp itching", "Balances excess scalp sebum", "Zero greasy residue"],
    ingredients: ["Organic Melaleuca (Tea Tree) Oil", "Wildcrafted Neem Leaf Extract", "White Willow Bark Extract", "Chamomile Flower Water", "Niacinamide (Vitamin B3)"],
    howToUse: "Apply 4-6 drops directly onto target irritated scalp areas daily. Do not rinse out. Can be applied on wet or dry hair.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 132,
    size: "60ml / 2.0 fl oz",
    hairTypes: ["All Hair Types", "Flaky / Itchy Scalp", "Braids / Weaves", "Sensitive Scalp"]
  },
  {
    id: 4,
    name: "Herbal Crown Growth & Edge Restoration Balm",
    price: 6500,
    priceDisplay: "₦6,500",
    category: "Treatments",
    description: "Concentrated botanical pomade crafted to revive fragile edges and thinning temples.",
    detailedDescription: "Formulated specifically for traction alopecia recovery and fragile baby hairs. Hand-whipped Mango butter, Carnauba wax, Horsetail herbal infusion, and Biotin fortify edges against breakage caused by tight hairstyles.",
    benefits: ["Regrows thinning temple edges", "Shields against tension stress", "Provides soft, non-stiff hold", "Enriched with plant silica"],
    ingredients: ["Organic Mango Seed Butter", "Horsetail Herbal Extract (Natural Silica)", "Pure Biotin", "Virgin Hemp Seed Oil", "Sweet Almond Oil", "Beeswax"],
    howToUse: "Warm a pea-sized amount between fingertips. Smooth along hairline, edges, or thinning areas twice daily with a soft bristle brush.",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 310,
    isBestseller: true,
    size: "150g / 5.3 oz",
    hairTypes: ["Receding Edges", "4A-4C Coily", "Postpartum Shedding", "Locs"]
  },
  {
    id: 5,
    name: "African Black Soap Clarifying Shampoo",
    price: 5800,
    priceDisplay: "₦5,800",
    category: "Shampoos",
    description: "100% sulfate-free clarifying wash powered by authentic Yoruba Dudu-Osun botanicals.",
    detailedDescription: "A gentle yet detoxifying botanical cleanser made with roasted cocoa pod ash, plantain skin extracts, and infused with cooling Peppermint and Eucalyptus. Lathers luxuriously while respecting the natural lipid barrier.",
    benefits: ["Deeply purifies product buildup", "Maintains optimal pH 5.5", "Sulfate & paraben free", "Leaves curls soft & bouncy"],
    ingredients: ["Authentic Roasted Cocoa Pod Ash", "Plantain Skin Extract", "Virgin Palm Kernel Oil", "Peppermint Leaf Oil", "Organic Glycerin"],
    howToUse: "Wet hair thoroughly. Apply to scalp and massage into rich lather. Let sit for 2 minutes before rinsing. Follow with Deep Moisture Masque.",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 95,
    size: "300ml / 10.1 fl oz",
    hairTypes: ["All Hair Types", "Low Porosity", "High Porosity", "Locs & Braids"]
  },
  {
    id: 6,
    name: "Marshmallow Root & Hibiscus Detangling Milk",
    price: 6800,
    priceDisplay: "₦6,800",
    category: "Sprays",
    description: "Silky botanical leave-in spray providing instant slip, hydration, and heat defense.",
    detailedDescription: "Infused with slippery Marshmallow Root extract, organic Hibiscus sabdariffa flower acids, and lightweight Argan oil. Cuts detangling time in half and shields strands from thermal heat styling up to 230°C.",
    benefits: ["Instant extreme slip", "Cuts detangling time by 50%", "Thermal heat defense up to 230°C", "Enhances curl definition"],
    ingredients: ["Marshmallow Root Extract", "Hibiscus Flower Infusion", "Pure Moroccan Argan Oil", "Vegetable Glycerin", "Rose Floral Water"],
    howToUse: "Spray generously onto damp or dry hair in sections before combing or blow drying. Style as desired.",
    image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 142,
    isNew: true,
    size: "250ml / 8.5 fl oz",
    hairTypes: ["3A-4C Curls & Coils", "Transitioning", "Children's Hair", "Heat-Styled Hair"]
  },
  {
    id: 7,
    name: "Flexi-Hold Flaxseed Edge Sculpt & Sleek Gel",
    price: 4500,
    priceDisplay: "₦4,500",
    category: "Styling",
    description: "Strong 48-hour botanical hold without alcohol, white flakes, or crunchy dryness.",
    detailedDescription: "Crafted from fresh golden flaxseed mucilage, Agave nectar, and organic Castor oil. Delivers salon-grade sleek edges and defined twist-outs while nourishing hair follicles with omega-3 fatty acids.",
    benefits: ["48-hour frizz control", "Zero white residue or flaking", "Infused with Omega-3 fatty acids", "Easily rinses clean"],
    ingredients: ["Organic Golden Flaxseed Gel", "Agave Nectar", "Jamaican Castor Oil", "Hydrolyzed Keratin", "Rosemary Extract"],
    howToUse: "Apply with fingertips or an edge styling brush to lay down baby hairs, smooth ponytails, or define individual coils.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 215,
    size: "200g / 7.0 oz",
    hairTypes: ["All Hair Types", "Sleek Buns & Ponytails", "Twist-Outs", "Braids"]
  },
  {
    id: 8,
    name: "Royal Crown Hair Revival Trio (Complete Bundle)",
    price: 21500,
    priceDisplay: "₦21,500",
    category: "Bundles",
    description: "Our comprehensive 3-step growth system: Shampoo, Moisture Masque, and Growth Elixir.",
    detailedDescription: "Save 15% with the ultimate restoration trio. Designed to work in perfect harmony to cleanse, deeply hydrate, and supercharge scalp circulation for visible length retention and high-gloss vitality.",
    benefits: ["Complete 3-step growth regimen", "Save 15% compared to individual items", "Includes exclusive satin bonnet gift", "Fast-tracks length retention"],
    ingredients: ["Black Soap Clarifying Shampoo (300ml)", "Raw Shea & Baobab Masque (350g)", "Chebe & Rosemary Elixir (100ml)"],
    howToUse: "Follow the 3-step weekly ritual: 1. Cleanse with Clarifying Shampoo. 2. Deep condition with Masque for 25 mins. 3. Seal scalp and ends with Growth Elixir.",
    image: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?w=800&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviews: 420,
    isBestseller: true,
    size: "Full 3-Piece Kit + Satin Bag",
    hairTypes: ["All Hair Types", "Damaged Hair", "Length Retention Goals"]
  }
];

export interface HairQuizQuestion {
  id: string;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    icon?: string;
    productIds: number[];
  }[];
}

export const hairQuizQuestions: HairQuizQuestion[] = [
  {
    id: "hair_type",
    title: "What is your natural curl/hair pattern?",
    subtitle: "Knowing your texture helps us determine the optimal moisture density.",
    options: [
      { label: "Type 4 (Coily / Kinky 4A-4C)", description: "Tight coils, high shrinkage, loves rich butters and oils.", productIds: [1, 2, 4, 8] },
      { label: "Type 3 (Curly 3A-3C)", description: "Springy loops and corkscrews needing definition & lightweight hydration.", productIds: [1, 2, 6, 7] },
      { label: "Locs / Sisterlocks", description: "Cultivated strands requiring residue-free conditioning and scalp care.", productIds: [1, 3, 5] },
      { label: "Transitioning / Relaxed", description: "Demarcation lines and fragile areas needing intense protein reinforcement.", productIds: [2, 4, 6, 8] }
    ]
  },
  {
    id: "primary_concern",
    title: "What is your #1 hair priority or struggle right now?",
    subtitle: "Select the area you would most love to transform over the next 30 days.",
    options: [
      { label: "Receding Edges & Thinning Crown", description: "Need targeted follicle stimulation and tension relief.", productIds: [1, 4, 8] },
      { label: "Dryness, Brittleness & Breakage", description: "Strands snap easily when combing, lacking deep hydration.", productIds: [2, 6, 8] },
      { label: "Stubborn Dandruff & Scalp Itch", description: "Persistent flaking, soreness, or irritation on the scalp.", productIds: [3, 5] },
      { label: "Slow Growth & Lack of Length Retention", description: "Hair grows but ends break before length can be shown.", productIds: [1, 2, 8] }
    ]
  },
  {
    id: "hair_routine",
    title: "How often do you wash and deep-condition?",
    subtitle: "This helps us tailor your custom weekly schedule.",
    options: [
      { label: "Once a week (Consistent)", description: "Standard wash day ritual with full conditioning.", productIds: [5, 2, 1] },
      { label: "Every 2-3 weeks (Protective styles)", description: "Wearing braids, twists, or wigs most of the time.", productIds: [1, 3, 6] },
      { label: "Multiple times weekly (Active/Gym)", description: "Need gentle, frequent scalp refresh without drying out strands.", productIds: [3, 6, 5] }
    ]
  }
];

export const salonServices = [
  {
    id: "trichology-scalp-detox",
    name: "Royal Scalp Trichology Detox & Steam Therapy",
    duration: "75 mins",
    price: 18000,
    priceDisplay: "₦18,000",
    category: "In-Salon",
    description: "Deep micro-camera scalp diagnostic, botanical clay purification, ozone micro-mist steam infusion, and acupressure scalp massage.",
    includes: ["Digital Scalp Scope Analysis (200x magnification)", "Warm Chebe & Herbal Clay Scalp Detox", "Ozone Micro-Mist Hydration Steam", "20-minute lymphatic scalp massage", "Leave-in nutrient seal"],
    popular: true
  },
  {
    id: "intensive-moisture-treatment",
    name: "Intensive Moisture & Keratin Repair Treatment",
    duration: "90 mins",
    price: 22000,
    priceDisplay: "₦22,000",
    category: "In-Salon",
    description: "A restorative deep-penetrating protein-moisture treatment for damaged, porous, or chemically-stressed crowns.",
    includes: ["Clarifying botanical wash", "Multi-layered Baobab & Silk Masque", "Infrared heat cuticle bonding", "Split-end precision dusting", "Silkening blow-out or protective braid down"],
    popular: false
  },
  {
    id: "virtual-trichologist-consultation",
    name: "1-on-1 Virtual Trichology Consultation",
    duration: "45 mins",
    price: 12000,
    priceDisplay: "₦12,000",
    category: "Virtual",
    description: "HD video consultation with our certified natural hair specialist to create your personalized 90-day growth regimen.",
    includes: ["Holistic hair health assessment", "Custom 90-day step-by-step regimen PDF", "Ingredient audit of your current products", "Direct WhatsApp specialist follow-up for 30 days"],
    popular: true
  }
];

export const educationalGuides = [
  {
    id: "chebe-growth-secrets",
    title: "The Chadian Chebe Ritual: Why African Queens Never Suffer Breakage",
    category: "Growth & Retention",
    readTime: "5 min read",
    author: "Femi Benjamin (Certified Trichology Specialist)",
    date: "Aug 2026",
    summary: "Discover the centuries-old technique used by the women of the Basara Arab tribe in Chad to maintain waist-length, dense hair.",
    coverImage: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=80",
    content: `
### The Power of Moisture Sealing
For generations, the women of Chad have celebrated thick, floor-grazing hair by using a proprietary blend of roasted Chebe seeds (*Croton gratissimus*), Mahllaba soubiane, Missic resin, and Samour cloves. 

### Why It Works So Effectively
Unlike regular oils that sit superficially on the cuticle, Chebe coats the hair shaft with a nutrient-dense sheath that prevents evaporation. In sub-Saharan climates where air humidity drops drastically, Chebe traps water inside the cortex for up to 5 days.

### How To Perform The Weekly Ritual at Home:
1. **Drench**: Wash and saturate your hair with warm water and leave-in conditioner.
2. **Apply**: Work a coin-sized portion of Chebe growth paste from 1 inch above the scalp down to the ends.
3. **Braid**: Plait into 4-8 medium braids without tension.
4. **Repeat**: Re-moisten every 4-5 days without washing out the previous layer for 3 consecutive weeks.
    `
  },
  {
    id: "scalp-microbiome-guide",
    title: "Healing Scalp Folliculitis, Dandruff and Tension Alopecia",
    category: "Scalp Health",
    readTime: "7 min read",
    author: "Dr. Amara Davies (Dermatologist)",
    date: "Jul 2026",
    summary: "A clinical yet natural guide to balancing your scalp's sebum barrier and reversing hair thinning caused by tight hairstyles.",
    coverImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=80",
    content: `
### Understanding Your Scalp as an Ecosystem
The human scalp contains over 100,000 hair follicles, each nourished by delicate micro-capillaries. When tight braiding or chemical relaxers create continuous mechanical tension, the follicles enter a state of shock called *Traction Alopecia*.

### The 3 Golden Rules of Scalp Recovery:
- **Never ignore persistent tenderness**: A tight hairstyle should not throb after 24 hours. Loosen braids immediately if scalp bumps appear.
- **Anti-microbial botanical cleansers**: Utilize Tea Tree, Neem, and Peppermint to suppress *Malassezia* yeast without stripping moisture.
- **Micro-circulation stimulation**: Spend 4 minutes every night massaging with cold-pressed Rosemary and Jojoba oils to trigger nitric oxide release in scalp vessels.
    `
  },
  {
    id: "porosity-mastery",
    title: "The Ultimate Hair Porosity Blueprint: Low, Medium vs High Porosity",
    category: "Hair Science",
    readTime: "6 min read",
    author: "Unique Hair Science Team",
    date: "Jun 2026",
    summary: "Stop guessing which products to buy. Master your hair's cuticle porosity to unlock true 24-hour hydration.",
    coverImage: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=80",
    content: `
### What is Porosity?
Porosity refers to how easily moisture and chemicals can penetrate into and out of your hair shaft. 

- **Low Porosity**: Flat, tightly packed cuticles like roof shingles. Needs warm water and steam to open up.
- **High Porosity**: Raised or chipped cuticles due to heat or bleaching. Moisture enters instantly but escapes just as fast.
- **Medium Porosity**: The sweet spot with balanced moisture retention.
    `
  }
];

export const customerReviews = [
  {
    id: 1,
    name: "Amina Al-Hassan",
    location: "Abuja, Nigeria",
    verified: true,
    rating: 5,
    title: "Saved my edges after postpartum shedding!",
    comment: "I lost almost all my temple hair after having my second baby. Within 5 weeks of using the Chebe Elixir and Edge Balm daily, baby hairs started filling in completely. I cannot recommend this brand enough.",
    productUsed: "Chebe & Rosemary Scalp Growth Elixir",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
      timeframe: "6 Weeks"
    }
  },
  {
    id: 2,
    name: "Chioma Okonjo",
    location: "Lagos, Nigeria",
    verified: true,
    rating: 5,
    title: "The Deep Moisture Masque is liquid gold",
    comment: "My 4C hair used to snap the moment I touched a comb. This masque melts into my hair and gives slip like I have never experienced before. 10/10 craftsmanship.",
    productUsed: "Raw Shea & Baobab Deep Moisture Masque",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=80",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      timeframe: "4 Weeks"
    }
  },
  {
    id: 3,
    name: "Zainab Adeleke",
    location: "Port Harcourt, Nigeria",
    verified: true,
    rating: 5,
    title: "Completely cleared 3 years of itchy dandruff",
    comment: "I used to feel embarrassed by white flakes on my dark blazers. The Tea Tree & Neem Serum healed my scalp within 14 days without smelling medicinal. Truly royal treatment.",
    productUsed: "Botanical Tea Tree & Neem Scalp Serum",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format&fit=crop&q=80"
  }
];
