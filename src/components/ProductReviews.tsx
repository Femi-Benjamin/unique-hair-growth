import { useState, useMemo, useId } from "react";
import { ProductItem } from "@/lib/data";
import { ProductReview, getReviewsForProduct, saveReviewForProduct, voteHelpfulReview } from "@/lib/reviewsData";
import { Star, ThumbsUp, CheckCircle2, MessageSquarePlus, ShieldCheck, Sparkles, Filter, Search, X, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollAnimation";

interface ProductReviewsProps {
  product: ProductItem;
}

export const ProductReviews = ({ product }: ProductReviewsProps) => {
  const [reviews, setReviews] = useState<ProductReview[]>(() => getReviewsForProduct(product.id));
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [votedReviews, setVotedReviews] = useState<Record<string, boolean>>({});

  // Filtering & Sorting State
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | "all">("all");
  const [selectedHairTypeFilter, setSelectedHairTypeFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"recent" | "highest" | "helpful">("recent");

  // New Review Form State
  const [formRating, setFormRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [authorName, setAuthorName] = useState("");
  const [location, setLocation] = useState("");
  const [hairType, setHairType] = useState("4A-4C Coily");
  const [porosity, setPorosity] = useState("Medium Porosity");
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [recommended, setRecommended] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filterId = useId();

  // Calculate Metrics
  const totalReviewsCount = reviews.length;
  const averageRating = useMemo(() => {
    if (totalReviewsCount === 0) return product.rating;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return Number((sum / totalReviewsCount).toFixed(1));
  }, [reviews, totalReviewsCount, product.rating]);

  const ratingDistribution = useMemo(() => {
    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((r) => {
      if (counts[r.rating] !== undefined) {
        counts[r.rating]++;
      }
    });
    return [5, 4, 3, 2, 1].map((stars) => ({
      stars,
      count: counts[stars],
      percentage: totalReviewsCount > 0 ? Math.round((counts[stars] / totalReviewsCount) * 100) : 0,
    }));
  }, [reviews, totalReviewsCount]);

  const recommendationRate = useMemo(() => {
    if (totalReviewsCount === 0) return 98;
    const recCount = reviews.filter((r) => r.recommended !== false).length;
    return Math.round((recCount / totalReviewsCount) * 100);
  }, [reviews, totalReviewsCount]);

  // Unique hair types present in reviews for filter options
  const availableHairTypes = useMemo(() => {
    const types = new Set<string>();
    reviews.forEach((r) => {
      if (r.hairType) types.add(r.hairType);
    });
    return Array.from(types);
  }, [reviews]);

  // Filtered & Sorted Reviews
  const displayedReviews = useMemo(() => {
    let list = [...reviews];

    if (selectedRatingFilter !== "all") {
      list = list.filter((r) => r.rating === selectedRatingFilter);
    }

    if (selectedHairTypeFilter !== "all") {
      list = list.filter((r) => r.hairType === selectedHairTypeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.comment.toLowerCase().includes(q) ||
          r.author.toLowerCase().includes(q) ||
          r.hairType?.toLowerCase().includes(q)
      );
    }

    if (sortBy === "recent") {
      // already in chronological or ID order
    } else if (sortBy === "highest") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "helpful") {
      list.sort((a, b) => b.helpfulCount - a.helpfulCount);
    }

    return list;
  }, [reviews, selectedRatingFilter, selectedHairTypeFilter, searchQuery, sortBy]);

  const handleVoteHelpful = (reviewId: string) => {
    if (votedReviews[reviewId]) {
      toast.info("You have already voted on this review.");
      return;
    }
    const updated = voteHelpfulReview(product.id, reviewId);
    setReviews(updated);
    setVotedReviews((prev) => ({ ...prev, [reviewId]: true }));
    toast.success("Thank you for your feedback!");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewTitle.trim() || !reviewComment.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newReview: ProductReview = {
        id: `rev-${Date.now()}`,
        productId: product.id,
        author: authorName.trim(),
        location: location.trim() || "Nigeria",
        rating: formRating,
        date: "Today",
        title: reviewTitle.trim(),
        comment: reviewComment.trim(),
        verified: true,
        hairType,
        porosity,
        recommended,
        helpfulCount: 0,
      };

      const updated = saveReviewForProduct(product.id, newReview);
      setReviews(updated);
      setIsSubmitting(false);
      setIsWriteModalOpen(false);

      // Reset form
      setAuthorName("");
      setLocation("");
      setReviewTitle("");
      setReviewComment("");
      setFormRating(5);
      toast.success("Your review has been verified and published!");
    }, 600);
  };

  const getRatingDescriptor = (stars: number) => {
    switch (stars) {
      case 5:
        return "Life-changing / Highly Recommended";
      case 4:
        return "Great Botanical Efficacy";
      case 3:
        return "Good / Satisfactory";
      case 2:
        return "Fair / Average Results";
      case 1:
        return "Did not meet expectations";
      default:
        return "";
    }
  };

  return (
    <section id="customer-reviews" className="py-12 border-t border-border mt-12">
      <ScrollReveal direction="up" className="space-y-10">
        
        {/* Header Title and Write Review CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent-foreground mb-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Verified Customer Social Proof</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Customer Ratings & Reviews
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Real results and unfiltered feedback from natural hair queens across Nigeria and worldwide.
            </p>
          </div>

          <Button
            onClick={() => setIsWriteModalOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2.5 font-semibold text-xs sm:text-sm shadow-glow flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Write a Review
          </Button>
        </div>

        {/* Rating Breakdown & Social Proof Highlights Bento */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Aggregate Score Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm flex flex-col justify-between text-center sm:text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Overall Formulation Score
              </span>
              <div className="flex items-baseline justify-center sm:justify-start gap-3">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-primary">
                  {averageRating}
                </span>
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-0.5 text-accent">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(averageRating)
                            ? "fill-accent text-accent"
                            : "text-muted/40"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Based on {totalReviewsCount} verified reviews
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent/15 text-accent flex-shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {recommendationRate}% of customers
                  </p>
                  <p className="text-xs text-muted-foreground">
                    recommend this botanical formula
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> 100% Verified Buyers
              </span>
              <span>Trichologist Tested</span>
            </div>
          </div>

          {/* Center Distribution Progress Bars */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm flex flex-col justify-center space-y-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Rating Breakdown
              </span>
              {selectedRatingFilter !== "all" && (
                <button
                  onClick={() => setSelectedRatingFilter("all")}
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Clear star filter
                </button>
              )}
            </div>

            {ratingDistribution.map((item) => (
              <button
                key={item.stars}
                onClick={() =>
                  setSelectedRatingFilter(selectedRatingFilter === item.stars ? "all" : item.stars)
                }
                className={`w-full flex items-center gap-3 p-1.5 rounded-xl text-left transition-colors ${
                  selectedRatingFilter === item.stars
                    ? "bg-secondary/60 ring-1 ring-primary/40"
                    : "hover:bg-secondary/30"
                }`}
              >
                <div className="flex items-center gap-1 w-14 flex-shrink-0 text-xs font-medium text-foreground">
                  <span>{item.stars}</span>
                  <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                </div>

                <div className="flex-1 h-2.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-500 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <div className="w-12 text-right text-xs font-semibold text-muted-foreground">
                  {item.percentage}%
                </div>
              </button>
            ))}
          </div>

          {/* Right Highlights & Social Guarantees */}
          <div className="lg:col-span-3 p-6 sm:p-7 rounded-3xl bg-secondary/40 border border-border shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h3 className="font-serif text-base font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Regimen Guarantee
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All reviews are collected from customers who purchased authentic Unique Hair Treatment formulas.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-border/60 text-xs text-foreground font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Zero artificial silicones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Clinically tested for 4A-4C curls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Handcrafted fresh in small batches</span>
              </div>
            </div>
          </div>

        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-card border border-border flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              placeholder="Search reviews by keyword (e.g. edges, moisture, shedding)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10 text-xs rounded-xl bg-background border-border"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filters & Sorting */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Hair Type Filter */}
            {availableHairTypes.length > 0 && (
              <div className="flex items-center gap-1.5">
                <label htmlFor={`${filterId}-hair-type`} className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Hair:
                </label>
                <select
                  id={`${filterId}-hair-type`}
                  value={selectedHairTypeFilter}
                  onChange={(e) => setSelectedHairTypeFilter(e.target.value)}
                  className="h-10 px-3 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="all">All Hair Types</option>
                  {availableHairTypes.map((ht) => (
                    <option key={ht} value={ht}>
                      {ht}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Sort Select */}
            <div className="flex items-center gap-1.5">
              <label htmlFor={`${filterId}-sort-by`} className="text-xs text-muted-foreground font-medium">Sort:</label>
              <select
                id={`${filterId}-sort-by`}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "highest" | "helpful")}
                className="h-10 px-3 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="recent">Most Recent</option>
                <option value="highest">Highest Rating</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
          </div>

        </div>

        {/* Active Filter Chips */}
        {(selectedRatingFilter !== "all" || selectedHairTypeFilter !== "all" || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-muted-foreground font-medium">Active filters:</span>
            {selectedRatingFilter !== "all" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-foreground font-medium border border-border">
                {selectedRatingFilter} Stars
                <button onClick={() => setSelectedRatingFilter("all")} className="hover:text-primary">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedHairTypeFilter !== "all" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-foreground font-medium border border-border">
                Hair: {selectedHairTypeFilter}
                <button onClick={() => setSelectedHairTypeFilter("all")} className="hover:text-primary">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-foreground font-medium border border-border">
                "{searchQuery}"
                <button onClick={() => setSearchQuery("")} className="hover:text-primary">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setSelectedRatingFilter("all");
                setSelectedHairTypeFilter("all");
                setSearchQuery("");
              }}
              className="text-primary hover:underline font-semibold ml-2"
            >
              Reset all
            </button>
          </div>
        )}

        {/* Review Cards List */}
        <div className="space-y-4">
          {displayedReviews.length === 0 ? (
            <div className="p-12 rounded-3xl bg-card border border-border text-center space-y-3">
              <p className="text-base font-bold text-foreground">No matching reviews found</p>
              <p className="text-xs text-muted-foreground">
                Try loosening your filters or search keywords to see all customer experiences.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedRatingFilter("all");
                  setSelectedHairTypeFilter("all");
                  setSearchQuery("");
                }}
                className="rounded-full text-xs"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            displayedReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm hover:border-primary/30 transition-smooth space-y-4"
              >
                {/* Header: Author, Rating, Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center border border-primary/20 flex-shrink-0">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-foreground">{review.author}</span>
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider">
                            <CheckCircle2 className="w-3 h-3 text-primary" /> Verified Buyer
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-muted-foreground">{review.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                    <div className="flex items-center gap-0.5 text-accent">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3.5 h-3.5 ${
                            star <= review.rating ? "fill-accent text-accent" : "text-muted/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-[11px]">{review.date}</span>
                  </div>
                </div>

                {/* Hair Type & Porosity Badges */}
                {(review.hairType || review.porosity) && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {review.hairType && (
                      <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-secondary text-primary font-semibold">
                        Hair Type: {review.hairType}
                      </span>
                    )}
                    {review.porosity && (
                      <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-secondary/70 text-muted-foreground font-medium">
                        Porosity: {review.porosity}
                      </span>
                    )}
                    {review.recommended && (
                      <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-accent/15 text-accent-foreground font-semibold flex items-center gap-1">
                        ✓ Recommends Product
                      </span>
                    )}
                  </div>
                )}

                {/* Title & Comment */}
                <div className="space-y-2">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-foreground">
                    {review.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    {review.comment}
                  </p>
                </div>

                {/* Footer: Helpful Button */}
                <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                  <button
                    onClick={() => handleVoteHelpful(review.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-medium ${
                      votedReviews[review.id]
                        ? "bg-primary/10 border-primary text-primary"
                        : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Helpful ({review.helpfulCount})</span>
                  </button>

                  <span className="text-[11px] text-muted-foreground italic">
                    Certified Organic Regimen
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

      </ScrollReveal>

      {/* Write a Review Modal Form */}
      <AnimatePresence>
        {isWriteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-card w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border shadow-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Write a Product Review
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Reviewing: <span className="font-semibold text-primary">{product.name}</span>
                  </p>
                </div>
                <button
                  onClick={() => setIsWriteModalOpen(false)}
                  className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Interactive Star Picker */}
                <div className="space-y-1.5 text-center sm:text-left">
                  <label className="text-xs font-semibold text-foreground block">
                    Overall Satisfaction *
                  </label>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const activeValue = hoverRating ?? formRating;
                      return (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          onClick={() => setFormRating(star)}
                          className="p-1 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= activeValue
                                ? "fill-accent text-accent"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        </button>
                      );
                    })}
                    <span className="text-xs font-bold text-accent ml-2">
                      {getRatingDescriptor(hoverRating ?? formRating)}
                    </span>
                  </div>
                </div>

                {/* Reviewer Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Your Full Name *</label>
                    <Input
                      required
                      placeholder="e.g. Zainab Adeleke"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="bg-background h-10 text-xs rounded-xl border-border"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">City / Location</label>
                    <Input
                      placeholder="e.g. Lagos, Nigeria"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-background h-10 text-xs rounded-xl border-border"
                    />
                  </div>
                </div>

                {/* Hair Profile Details */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Your Hair Pattern</label>
                    <select
                      value={hairType}
                      onChange={(e) => setHairType(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="4C Coily">4C Coily (Tight Coils)</option>
                      <option value="4A-4B Kinky">4A / 4B Coily-Kinky</option>
                      <option value="3B-3C Curly">3B / 3C Springy Curls</option>
                      <option value="Locs / Sisterlocks">Locs & Sisterlocks</option>
                      <option value="Transitioning / Relaxed">Transitioning / Relaxed</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Porosity Profile</label>
                    <select
                      value={porosity}
                      onChange={(e) => setPorosity(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="High Porosity">High Porosity (Absorbs quickly)</option>
                      <option value="Medium Porosity">Medium Porosity (Balanced)</option>
                      <option value="Low Porosity">Low Porosity (Needs warmth)</option>
                      <option value="Sensitive Scalp">Sensitive / Flaky Scalp</option>
                    </select>
                  </div>
                </div>

                {/* Review Headline & Body */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Review Headline *</label>
                  <Input
                    required
                    placeholder="e.g. My curls stayed hydrated for 5 straight days!"
                    value={reviewTitle}
                    onChange={(e) => setReviewTitle(e.target.value)}
                    className="bg-background h-10 text-xs rounded-xl border-border"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Your Experience & Feedback *</label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Share how this formulation performed for your scalp, hair texture, slip, moisture retention, or growth..."
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="bg-background resize-none text-xs rounded-xl p-3 border-border leading-relaxed"
                  />
                </div>

                {/* Recommendation Checkbox */}
                <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-foreground select-none">
                  <input
                    type="checkbox"
                    checked={recommended}
                    onChange={(e) => setRecommended(e.target.checked)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary"
                  />
                  <span>I recommend this botanical formulation to others</span>
                </label>

                {/* Submit & Cancel Buttons */}
                <div className="pt-4 border-t border-border flex items-center justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="rounded-full text-xs px-5"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 font-semibold text-xs shadow-glow"
                  >
                    {isSubmitting ? "Submitting Review..." : "Publish Review"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
