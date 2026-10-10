export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  year: string;
  bio: string;
  photoUrl: string;
  asciiArt?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  skills: string[];
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  isConfirmed: boolean;
  registrationUrl?: string;
  image?: string;
  category: 'Hackathon' | 'Workshop' | 'Coding Contest' | 'Tech Talk';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  caption: string;
}
