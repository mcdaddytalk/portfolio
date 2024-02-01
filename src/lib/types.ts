import { links, projectsData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectProps = (typeof projectsData)[number];

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
  
export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type Theme = 'light' | 'dark';

export type ThemeContextProviderProps = {
    children: React.ReactNode;
}

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}   

  /*
  add company?
  possition?
  */
export type Experience = {
  index: string;
  title: string;
  location: string;
  date: string;
  icon: React.ReactNode;
  description: string;
}

export type ExperienceProps = {
  theme: Theme;
  inView: boolean;
  experience: Experience
}

export type ContactFormEmailProps = {
  message: string;
  sender: string;
}