export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  mediaType: "image" | "video";
  mediaSrc?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type Insight = {
  id: string;
  title: string;
  summary: string;
};

