export type TpVideoSubtitles = {
  text: string;
  start_time: number;
  end_time: number;
};

export type TpSound = {
  id: number;
  name: string;
  type_name: string;
  file: string;
};

export type TpSoundItem = {
  sound: TpSound;
  start_time: number;
};

export type TpVoiceover = {
  name: string;
  file: string;
};

export type TpVoiceoverItem = {
  voiceover: TpVoiceover;
  start_time: string;
};

export type TpStage = {
  id: number;
  stage_number: number;
  area: string;
  completed: boolean;
  is_active: boolean;
  is_locked: boolean;
};

export type TpExercise = {
  id: number;
  title: string;
  is_locked: boolean;
  order: number;
  reps: number;
  time_to_complete_mins: number;
  facebuilding_zone: string;
  facebuilding_zone_main: string;
  exercise_video_reps: number;
  description: string;
  short_description: string;
  video_duration: unknown; //unknown data type
  cover_image: string;
  preview: string;
  video: string;
  video_subtitles: TpVideoSubtitles[];
  sounds: TpSoundItem[];
  voiceovers: TpVoiceoverItem[];
};

export type TpExercises = TpStage & {
  exercises: TpExercise[];
};

export type TpProgress = {
  personal_progress: number;
  minutes_training: number;
  exercises_done: number;
  stages_completed: number;
};

export type TpCompleteStage = {
  completed_stage_number: number;
};
