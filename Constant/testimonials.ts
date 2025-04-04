export interface Testimonial {
  name: string;
  type: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Emma Wilson",
    type: "Sports Injury Patient",
    content: "After my knee injury, I thought my running days were over. The team at MoveCure not only helped me recover but made me stronger than before. I'm now back to competing at my best!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    name: "David Thompson",
    type: "Chronic Back Pain",
    content: "I've lived with chronic back pain for years and tried everything. The personalized approach at MoveCure has made a world of difference. For the first time in a decade, I can enjoy playing with my kids without pain.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    name: "Sophia Lee",
    type: "Post-surgery Rehabilitation",
    content: "After my hip replacement, I was worried about regaining my independence. The physiotherapists at MoveCure guided me through every step of recovery with patience and expertise. I couldn't be happier with my progress!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5
  },
  {
    name: "James Wilson",
    type: "Sports Recovery",
    content: "As a professional athlete, I need the best care possible. MoveCure has an incredible team that understands the demands of high-level sports. They've helped me recover from multiple injuries and stay at the top of my game.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    name: "Maria Garcia",
    type: "Neck Pain Treatment",
    content: "Years of office work left me with severe neck pain. After just a few sessions at MoveCure, I noticed significant improvement. Their combination of manual therapy and exercises was exactly what I needed.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5
  },
  {
    name: "Robert Johnson",
    type: "Stroke Recovery",
    content: "Following my stroke, I was unsure if I'd ever regain full mobility. The neurological rehabilitation team at MoveCure was exceptional. Their expertise and encouragement helped me achieve what I thought was impossible.",
    image: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 5
  }
];
