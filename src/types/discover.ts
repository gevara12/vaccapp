import { TpExercise } from 'src/types/stage';

export type TpEfficient = {
  order: number;
  name: string;
  value: number;
  image: string;
};

export type TpCourse = {
  id: number;
  title: string;
  new: boolean;
  days: number;
  active: boolean;
  area: string;
  favourite: boolean;
  description: string;
  image: string;
  completed_days: number;
  locked: boolean;
  sort: unknown;
  is_promo: boolean;
  promo_image: unknown;
  is_promo_viewed: boolean;
  muscle_image: string;
  efficiencies: TpEfficient[];
  new_image: string;
  random_number_for_challenges_users: number | null;
  is_course_locked: boolean;
  focus_image: string;
  transparent_image: string;
  course_difficulty: unknown;
  second_description?: string;
  subscription_type: string;
  problem_zone: {
    name: string;
  };
  quick_help_order: unknown;
};

export type TpAllCourses = {
  quick_help: [];
  challenges: TpCourse[];
  focus: TpCourse[];
};

export type TpBlock = {
  id: number;
  block_number: number;
  title: string;
  description: unknown;
  exercises: TpExercise[];
};

export type TpDayCourse = {
  id: number;
  day_number: number;
  time_to_complete: number;
  image: string;
  completed: boolean;
  course_image: string;
  blocks: TpBlock[];
};

export type TpCourseListData = {
  id: number;
  title: string;
  data: TpExercise[];
};

export type TpCompleteDay = {
  day_id: number;
  date: string;
  course_id: number;
};
