export type AboutProps = {
  name: string;
  location: string;
  phone: string;
  email: string;
  designation: string;
  summary: string;
};
type ExperienceProps = {
  total: string;
  history: ExperienceHistoryProps[];
};
export type ExperienceHistoryProps = {
  company: string;
  duration: string;
  designation: string;
  link: string;
};
export type ProjectProps = {
  title: string;
  link: string;
  stack: string;
};
type ResponsibiltiesProps = string[];
type SkillsProps = string[];

export type ResumeDataProps = {
  about: AboutProps;
  experience: ExperienceProps;
  projects: ProjectProps[];
  responsibilties: ResponsibiltiesProps;
  skills: SkillsProps;
};
export type ResumeAboutUpdateKeys =
  | "name"
  | "location"
  | "phone"
  | "email"
  | "designation"
  | "summary";
export type ResumeWorkHistoryUpdateKeys =
  | "company"
  | "duration"
  | "designation"
  | "link";
export type ResumeProjectUpdateKeys = "title" | "link" | "stack";
