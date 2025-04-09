export interface Testimonial {
  name: string;
  type: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ravi Patel",
    type: "Sports Injury Patient",
    content: "After my knee injury, I thought my running days were over. The team at MoveCure not only helped me recover but made me stronger than before. I'm now back to competing at my best!",
    image: "/images/user.png",
    rating: 5
  },
  {
    name: "Arindam Chatterjee",
    type: "Chronic Back Pain",
    content: "I've lived with chronic back pain for years and tried everything. The personalized approach at MoveCure has made a world of difference. For the first time in a decade, I can enjoy playing with my kids without pain.",
    image: "/images/user.png",
    rating: 5
  },
  {
    name: "Sourav Mukherjee",
    type: "Post-surgery Rehabilitation",
    content: "After my hip replacement, I was worried about regaining my independence. The physiotherapists at MoveCure guided me through every step of recovery with patience and expertise. I couldn't be happier with my progress!",
    image: "/images/user.png",
    rating: 4.5
  },
  {
    name: "Anirban Ghosh",
    type: "Sports Recovery",
    content: "As a professional athlete, I need the best care possible. MoveCure has an incredible team that understands the demands of high-level sports. They've helped me recover from multiple injuries and stay at the top of my game.",
    image: "/images/user.png",
    rating: 5
  },
  {
    name: "Saptarshi Dasgupta",
    type: "Neck Pain Treatment",
    content: "Years of office work left me with severe neck pain. After just a few sessions at MoveCure, I noticed significant improvement. Their combination of manual therapy and exercises was exactly what I needed.",
    image: "/images/user.png",
    rating: 4.5
  },
  {
    name: "Partha Dutta",
    type: "Stroke Recovery",
    content: "Following my stroke, I was unsure if I'd ever regain full mobility. The neurological rehabilitation team at MoveCure was exceptional. Their expertise and encouragement helped me achieve what I thought was impossible.",
    image: "/images/user.png",
    rating: 5
  }
];
