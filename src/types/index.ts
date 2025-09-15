// Course types
export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: string;
  rating: number;
  students: number;
  price: number;
  image: string;
  description?: string;
  progress?: number;
  lastAccessed?: string;
  nextLesson?: string;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'instructor' | 'admin';
}

// Review types
export interface Review {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
}

// Activity types
export type ActivityType = 'completed' | 'enrolled' | 'certificate' | 'progress';

export interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  course: string;
  time: string;
}

// Theme types
export interface ThemeConfig {
  config: {
    initialColorMode: 'light' | 'dark';
    useSystemColorMode: boolean;
  };
  colors: {
    brand: {
      [key: string]: string;
    };
  };
  fonts: {
    heading: string;
    body: string;
  };
}
