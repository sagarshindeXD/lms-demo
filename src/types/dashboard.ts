import { Course } from './index';

export interface DashboardStats {
  enrolledCourses: number;
  completedCourses: number;
  inProgressCourses: number;
  learningHours: number;
}

export interface EnrolledCourse extends Course {
  progress: number;
  nextLesson: string;
  lastAccessed: string;
}

export interface ActivityItem {
  id: number;
  type: 'completed' | 'enrolled' | 'certificate' | 'progress';
  title: string;
  course: string;
  time: string;
}

export interface DashboardData {
  stats: DashboardStats;
  enrolledCourses: EnrolledCourse[];
  recentActivities: ActivityItem[];
  recommendedCourses: Course[];
}
