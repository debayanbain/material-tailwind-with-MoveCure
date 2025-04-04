export interface Therapist {
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

export const therapists: Therapist[] = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Sports Rehabilitation Specialist",
    bio: "With over 12 years of experience working with professional athletes, Dr. Johnson specializes in sports-related injuries and performance optimization.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurological Rehabilitation Expert",
    bio: "Dr. Chen brings a wealth of knowledge in neurological rehabilitation, helping patients recover from stroke, TBI, and other neurological conditions.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatric Physiotherapist",
    bio: "Specializing in pediatric care, Dr. Rodriguez creates child-friendly treatment plans that focus on developmental milestones and early intervention.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
