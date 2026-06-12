export interface TeachingPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Elite' | 'All Levels';
  audience: string;
  highlights: string[];
}

export interface IntakeSubmission {
  name: string;
  email: string;
  phone: string;
  experience: 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';
  goal: string;
  notes?: string;
}
