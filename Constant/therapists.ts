export interface Therapist {
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

export const therapists: Therapist[] = [
  {
    name: "Dr. Sayan Saha(PT)",
    specialty: "All Physiotherapy Specialist",
    bio: "With over 12 years of experience working with professional, Dr. Sayan Saha specializes in sports-related injuries and performance optimization.",
    image: "/images/Doctor.jpg"
  },
  {
    name: "Dr. Rahul Jana(PT)",
    specialty: "All Physiotherapy Specialist",
    bio: "With more than 12 years of hands-on experience, Dr. Rahul Jana has worked extensively with athletes and individuals recovering from injuries. He’s passionate about helping people regain strength, mobility, and confidence through personalized physiotherapy programs.",
    image: "/images/Doctor.jpg"
  },
  {
    name: "Dr. Prakash Sen(PT)",
    specialty: "All Physiotherapy Specialist",
    bio: "Bringing over a decade of clinical experience, Dr. Prakash Sen is known for his expertise in sports injury rehabilitation and physical performance enhancement. His patient-focused approach and deep understanding of body mechanics help clients recover faster and stay active longer.",
    image: "/images/Doctor.jpg"
  },
];
