export interface ProductReview {
  id: string;
  productId: number;
  author: string;
  location: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  hairType?: string;
  porosity?: string;
  recommended: boolean;
  helpfulCount: number;
  beforeAfterImage?: string;
}

export const initialProductReviews: ProductReview[] = [
  // Product 1: Chebe & Rosemary Scalp Growth Elixir
  {
    id: "rev-1-1",
    productId: 1,
    author: "Amina Al-Hassan",
    location: "Abuja, Nigeria",
    rating: 5,
    date: "August 18, 2026",
    title: "Remarkable recovery for my postpartum temple edges!",
    comment: "I lost so much hair along my hairline after weaning my second baby. Within 4 weeks of consistent night massages with this Chebe & Rosemary elixir, tiny dark baby hairs emerged. It doesn't leave greasy pillows either. Best investment for my 4C coils!",
    verified: true,
    hairType: "4C Coily",
    porosity: "High Porosity",
    recommended: true,
    helpfulCount: 38
  },
  {
    id: "rev-1-2",
    productId: 1,
    author: "Kelechi Eze",
    location: "Lagos, Nigeria",
    rating: 5,
    date: "July 29, 2026",
    title: "Shedding reduced drastically in just two wash days",
    comment: "I usually lose a fistful of hair during detangling sessions. Adding this as a warm pre-poo oil and scalp drop reduced my comb shedding by at least 70%. The natural herbal rosemary aroma is so refreshing and soothing.",
    verified: true,
    hairType: "4A/4B Kinky",
    porosity: "Medium Porosity",
    recommended: true,
    helpfulCount: 24
  },
  {
    id: "rev-1-3",
    productId: 1,
    author: "Dr. Bisi Oladipo",
    location: "London, UK",
    rating: 5,
    date: "July 12, 2026",
    title: "Real Chadian Chebe quality — noticeable length retention",
    comment: "I've tried many commercial 'chebe' oils that were mostly mineral oil fillers. Unique Hair's formula is authentic, potent, and deeply nourishing. My hair feels thicker from root to tip.",
    verified: true,
    hairType: "4B Coily",
    porosity: "Low Porosity",
    recommended: true,
    helpfulCount: 19
  },
  {
    id: "rev-1-4",
    productId: 1,
    author: "Fatima Mohammed",
    location: "Kano, Nigeria",
    rating: 4,
    date: "June 25, 2026",
    title: "Very nourishing, pleasant herbal scent",
    comment: "A little goes a very long way! I massage 4 drops on my scalp every other evening. Hair retains moisture much longer when locked under my satin bonnet.",
    verified: true,
    hairType: "3C/4A Curls",
    porosity: "Medium Porosity",
    recommended: true,
    helpfulCount: 11
  },

  // Product 2: Raw Shea & Baobab Deep Moisture Masque
  {
    id: "rev-2-1",
    productId: 2,
    author: "Chioma Okonjo",
    location: "Lagos, Nigeria",
    rating: 5,
    date: "August 24, 2026",
    title: "Absolute liquid gold for thirsty, brittle curls",
    comment: "My 4C hair used to snap the moment I touched a comb. This masque melts into my cuticles with heat steam and provides slip like I have never experienced before. 10/10 craftsmanship!",
    verified: true,
    hairType: "4C Coily",
    porosity: "High Porosity",
    recommended: true,
    helpfulCount: 45
  },
  {
    id: "rev-2-2",
    productId: 2,
    author: "Yewande Adeleke",
    location: "Ibadan, Nigeria",
    rating: 5,
    date: "August 05, 2026",
    title: "Repaired my bleached and heat-damaged curls",
    comment: "After coloring my hair golden blonde last Christmas, my curls lost elasticity. Just 3 sessions under a steamer with this Baobab masque revived my curl pattern completely.",
    verified: true,
    hairType: "3C Curls",
    porosity: "High Porosity (Color-Treated)",
    recommended: true,
    helpfulCount: 29
  },
  {
    id: "rev-2-3",
    productId: 2,
    author: "Grace Bassey",
    location: "Calabar, Nigeria",
    rating: 5,
    date: "July 18, 2026",
    title: "Smells divine and detangles effortlessly",
    comment: "The unrefined Nilotica Shea is so smooth and doesn't leave heavy buildup. Wash day takes 30 minutes less time now.",
    verified: true,
    hairType: "4A Curls",
    porosity: "Medium Porosity",
    recommended: true,
    helpfulCount: 16
  },

  // Product 3: Botanical Tea Tree & Neem Scalp Serum
  {
    id: "rev-3-1",
    productId: 3,
    author: "Zainab Adeleke",
    location: "Port Harcourt, Nigeria",
    rating: 5,
    date: "August 15, 2026",
    title: "Completely cleared 3 years of stubborn dandruff",
    comment: "I used to feel embarrassed by white flakes on my dark blazers at work. The Tea Tree & Neem Serum healed my flaky scalp within 14 days without smelling medicinal. Truly royal treatment!",
    verified: true,
    hairType: "Locs / Sisterlocks",
    porosity: "Sensitive Scalp",
    recommended: true,
    helpfulCount: 33
  },
  {
    id: "rev-3-2",
    productId: 3,
    author: "Emeka Obi",
    location: "Enugu, Nigeria",
    rating: 5,
    date: "July 30, 2026",
    title: "Instant cooling relief for braid itch",
    comment: "Whenever I get fresh knotless braids, my scalp usually flares up. A few drops along the parts calms the tightness and itching immediately. Non-greasy and dries clear.",
    verified: true,
    hairType: "Protective Styles",
    porosity: "Normal",
    recommended: true,
    helpfulCount: 21
  },

  // Product 4: Herbal Crown Growth & Edge Restoration Balm
  {
    id: "rev-4-1",
    productId: 4,
    author: "Folashade Williams",
    location: "Lekki, Lagos",
    rating: 5,
    date: "August 20, 2026",
    title: "Brought my edges back from tight wig friction",
    comment: "Wig glues and tight lace frontals damaged my edges for over a year. Using this balm with the soft brush twice daily has filled in the thin spots. My hairline is soft, protected, and thriving.",
    verified: true,
    hairType: "4B/4C Coily",
    porosity: "Medium Porosity",
    recommended: true,
    helpfulCount: 42
  },
  {
    id: "rev-4-2",
    productId: 4,
    author: "Ngozi Nwosu",
    location: "Asaba, Nigeria",
    rating: 5,
    date: "August 02, 2026",
    title: "Silky texture without white flaking or hardness",
    comment: "Unlike petroleum-based pomades, this herbal mango butter balm absorbs into the scalp and leaves hair nourished rather than suffocated. Will be ordering the 3-pack next!",
    verified: true,
    hairType: "4C Coily",
    porosity: "High Porosity",
    recommended: true,
    helpfulCount: 18
  },

  // Product 5: African Black Soap Clarifying Shampoo
  {
    id: "rev-5-1",
    productId: 5,
    author: "Halima Danjuma",
    location: "Kaduna, Nigeria",
    rating: 5,
    date: "August 10, 2026",
    title: "Squeaky clean scalp without stripping the hair dry",
    comment: "Most black soap shampoos leave natural hair feeling like straw. This one is formulated perfectly with palm kernel and peppermint. Lathers thick and rinses product buildup instantly.",
    verified: true,
    hairType: "Low Porosity 4A",
    porosity: "Low Porosity",
    recommended: true,
    helpfulCount: 26
  },
  {
    id: "rev-5-2",
    productId: 5,
    author: "Bukola Johnson",
    location: "Benin City, Nigeria",
    rating: 4,
    date: "July 22, 2026",
    title: "Refreshes locs effortlessly",
    comment: "I wash my sisterlocks every 2 weeks. It leaves zero white residue and keeps my scalp smelling minty and clean.",
    verified: true,
    hairType: "Locs",
    porosity: "All Hair Types",
    recommended: true,
    helpfulCount: 14
  },

  // Product 6: Marshmallow Root & Hibiscus Detangling Milk
  {
    id: "rev-6-1",
    productId: 6,
    author: "Dr. Maryanne Chukwu",
    location: "Warri, Nigeria",
    rating: 5,
    date: "August 22, 2026",
    title: "Cuts daughter's wash day tears completely!",
    comment: "My 6-year-old daughter has super dense 4C coils. Wash days used to be stressful. This Marshmallow root milk provides incredible slip — the wide-tooth comb glides right through with zero tears.",
    verified: true,
    hairType: "4C Dense Coily",
    porosity: "High Porosity",
    recommended: true,
    helpfulCount: 37
  },
  {
    id: "rev-6-2",
    productId: 6,
    author: "Tariere Briggs",
    location: "Yenagoa, Nigeria",
    rating: 5,
    date: "August 11, 2026",
    title: "Lightweight moisture that defines my twist outs",
    comment: "Does not weigh curls down. Leaves a light floral hibiscus scent and keeps hair soft for 4 straight days.",
    verified: true,
    hairType: "3C/4A Curls",
    porosity: "Medium Porosity",
    recommended: true,
    helpfulCount: 19
  },

  // Product 7: Flexi-Hold Flaxseed Edge Sculpt & Sleek Gel
  {
    id: "rev-7-1",
    productId: 7,
    author: "Simisola Balogun",
    location: "Ikeja, Lagos",
    rating: 5,
    date: "August 26, 2026",
    title: "Real 48-hour hold without single white flake",
    comment: "The ultimate edge control for Lagos humidity! Survives full workdays in the tropical heat without melting or flaking white. Rinses clean with just warm water.",
    verified: true,
    hairType: "4C Coily",
    porosity: "All Hair Types",
    recommended: true,
    helpfulCount: 31
  },
  {
    id: "rev-7-2",
    productId: 7,
    author: "Ezinne Kalu",
    location: "Owerri, Nigeria",
    rating: 4,
    date: "August 14, 2026",
    title: "Great slick back ponytails",
    comment: "Leaves high shine and keeps flyaways down without the crunch of alcohol gels. Highly recommend.",
    verified: true,
    hairType: "4A/4B",
    porosity: "Medium Porosity",
    recommended: true,
    helpfulCount: 15
  },

  // Product 8: Royal Crown Hair Revival Trio (Complete Bundle)
  {
    id: "rev-8-1",
    productId: 8,
    author: "Temitope Adebayo",
    location: "Victoria Island, Lagos",
    rating: 5,
    date: "August 28, 2026",
    title: "The complete transformation kit — worth every single naira!",
    comment: "Purchased the complete bundle 2 months ago. Following the 3-step system weekly has transformed my dry, brittle hair into lustrous, resilient curls with noticeable new length. Plus, the satin bonnet gift is premium quality!",
    verified: true,
    hairType: "4B/4C Coily",
    porosity: "High Porosity",
    recommended: true,
    helpfulCount: 52
  },
  {
    id: "rev-8-2",
    productId: 8,
    author: "Chidimma Nnamdi",
    location: "Abuja, Nigeria",
    rating: 5,
    date: "August 19, 2026",
    title: "Best natural hair investment of 2026",
    comment: "The synergy between the Black Soap shampoo, the Baobab masque, and the Chebe elixir is unmatched. My salon stylist even asked what I've been doing differently!",
    verified: true,
    hairType: "4A/4C Natural",
    porosity: "Medium Porosity",
    recommended: true,
    helpfulCount: 40
  },
  {
    id: "rev-8-3",
    productId: 8,
    author: "Khadija Sanusi",
    location: "Zaria, Nigeria",
    rating: 5,
    date: "August 04, 2026",
    title: "Visible thickness and zero breakage",
    comment: "Everything you need in one luxury package. The instructions are crystal clear and results start showing within 3 weeks.",
    verified: true,
    hairType: "Transitioning",
    porosity: "Low Porosity",
    recommended: true,
    helpfulCount: 27
  }
];

export const getReviewsForProduct = (productId: number): ProductReview[] => {
  try {
    const stored = localStorage.getItem(`uht_reviews_prod_${productId}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // fallback to initial
  }

  return initialProductReviews.filter((r) => r.productId === productId);
};

export const saveReviewForProduct = (productId: number, newReview: ProductReview): ProductReview[] => {
  const current = getReviewsForProduct(productId);
  const updated = [newReview, ...current];
  try {
    localStorage.setItem(`uht_reviews_prod_${productId}`, JSON.stringify(updated));
  } catch {
    // continue
  }
  return updated;
};

export const voteHelpfulReview = (productId: number, reviewId: string): ProductReview[] => {
  const current = getReviewsForProduct(productId);
  const updated = current.map((r) => {
    if (r.id === reviewId) {
      return { ...r, helpfulCount: r.helpfulCount + 1 };
    }
    return r;
  });
  try {
    localStorage.setItem(`uht_reviews_prod_${productId}`, JSON.stringify(updated));
  } catch {
    // continue
  }
  return updated;
};
