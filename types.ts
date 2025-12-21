
export enum View {
  HOME = 'home',
  STORY = 'story',
  CHARACTERS = 'characters',
  QUIZ = 'quiz'
}

/* Added Website type and SiteInfo interface for Hub component */
export type Website = 'aura' | 'pulse' | 'root' | 'nexus';

export interface SiteInfo {
  id: Website;
  name: string;
  tagline: string;
  description: string;
  theme: string;
}

export interface StoryOption {
  text: string;
  type: 'A' | 'B' | 'C';
  immediateEnding?: number;
}

export interface StoryQuestion {
  palace: string;
  star: string;
  title: string;
  image?: string;
  description: string;
  options: StoryOption[];
}

export interface StoryEnding {
  id: number;
  name: string;
  type: string;
  description: string;
  meaning: string;
}

export interface QuizOption {
  text: string;
  attributes: {
    Pioneer?: number;
    Leader?: number;
    Supporter?: number;
    Cooperator?: number;
  };
}

export interface QuizQuestion {
  title: string;
  question: string;
  image?: string;
  options: QuizOption[];
}

export interface Character {
  name: string;
  title: string;
  type: string;
  image: string;
  description: string;
}
