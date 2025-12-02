// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
// import testimonialImage from "@/assets/testimonial-woman.jpg";

// const testimonials = [
//   {
//     name: "Thandi M.",
//     rating: 5,
//     text: "My hair has never been healthier! The growth oil worked wonders for my receding hairline. After just 3 weeks, I can see new growth. Highly recommend!",
//     image: testimonialImage,
//   },
//   {
//     name: "Nomsa K.",
//     rating: 5,
//     text: "I struggled with dandruff for years. The anti-dandruff serum cleared it completely in 2 weeks. Plus it's all natural - no harsh chemicals!",
//     image: "/placeholder.svg",
//   },
//   {
//     name: "Zanele P.",
//     rating: 5,
//     text: "The deep conditioning treatment is amazing! My hair was so damaged and dry, but now it's soft, shiny, and manageable. True royalty treatment indeed!",
//     image: "/placeholder.svg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
//             What Our Customers Say
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Real results from real people who've experienced the royal treatment
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <Card
//               key={index}
//               className="bg-card border-border/50 hover:border-primary/50 transition-smooth"
//             >
//               <CardContent className="p-6">
//                 <div className="flex items-center gap-4 mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-foreground">
//                       {testimonial.name}
//                     </h4>
//                     <div className="flex gap-1 mt-1">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="h-4 w-4 fill-gold text-gold" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-muted-foreground leading-relaxed">
//                   "{testimonial.text}"
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Before/After Gallery Teaser */}
//         <div className="mt-16 text-center">
//           <h3 className="font-display text-2xl font-bold text-foreground mb-8">
//             See The Results
//           </h3>
//           <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="relative aspect-square bg-secondary/50 rounded-lg overflow-hidden group"
//               >
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-sm text-muted-foreground">
//                     Before & After {i}
//                   </span>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4">
//                   <span className="text-sm font-semibold text-primary">
//                     View Transformation
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";

const testimonialImage =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop";

const testimonials = [
  {
    name: "Thandi M.",
    rating: 5,
    text: "My hair has never been healthier! The growth oil worked wonders for my receding hairline. After just 3 weeks, I can see new growth. Highly recommend!",
    image: testimonialImage,
  },
  {
    name: "Nomsa K.",
    rating: 5,
    text: "I struggled with dandruff for years. The anti-dandruff serum cleared it completely in 2 weeks. Plus it's all natural - no harsh chemicals!",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
  },
  {
    name: "Zanele P.",
    rating: 5,
    text: "The deep conditioning treatment is amazing! My hair was so damaged and dry, but now it's soft, shiny, and manageable. True royalty treatment indeed!",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
  },
];

const Testimonials = () => {
  const [activeImage, setActiveImage] = React.useState<number | null>(null);

  const beforeAfterImages = [
    {
      before:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
      after:
        "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&h=400&fit=crop",
    },
    {
      before:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      after:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    },
    {
      before:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      after:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real people who've experienced the royal treatment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before/After Gallery Teaser */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">
            See The Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {beforeAfterImages.map((images, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setActiveImage(activeImage === i ? null : i)}
              >
                <img
                  src={activeImage === i ? images.after : images.before}
                  alt={`${
                    activeImage === i ? "After" : "Before"
                  } transformation ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                  <span className="text-sm font-semibold text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {activeImage === i ? "View Before" : "View Transformation"}
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 text-charcoal text-xs font-bold px-3 py-1 rounded-full">
                  {activeImage === i ? "After" : "Before"} - Week {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
