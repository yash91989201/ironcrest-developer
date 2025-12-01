
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  category: string;
  client?: string;
  completionDate?: string;
  budget?: string;
  description?: string;
  challenge?: string; // Detailed Challenges
  solution?: string;  // Detailed Solutions / Approach
  materials?: string[];
  architect?: string;
  size?: string;
  features?: string[];
  gallery?: string[];
  sustainability?: string;
  awards?: string[];
  scope?: string; // Scope of Work
  
  // New Detailed Fields
  objectives?: string[];
  techSpecs?: { label: string; value: string }[];
  projectTimeline?: { phase: string; date: string; desc: string }[];
  outcomes?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}
