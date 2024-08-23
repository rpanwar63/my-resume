import { RESUME_INITIAL_DATA } from "@/constants/resumeInitialData";
import {
  ExperienceHistoryProps,
  ProjectProps,
  ResumeAboutUpdateKeys,
  ResumeProjectUpdateKeys,
  ResumeWorkHistoryUpdateKeys,
} from "@/types/resume-data";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState: RESUME_INITIAL_DATA,
  reducers: {
    updateAbout: (
      state,
      action: PayloadAction<{ key: ResumeAboutUpdateKeys; value: string }>
    ) => {
      state.about[action.payload.key] = action.payload.value;
    },
    updateSkill: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.skills[action.payload.index] = action.payload.value;
    },
    updateResponsibilities: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.responsibilties[action.payload.index] = action.payload.value;
    },
    updateTotalExperience: (state, action: PayloadAction<string>) => {
      state.experience.total = action.payload;
    },
    updateWorkHistory: (
      state,
      action: PayloadAction<{
        index: number;
        key: ResumeWorkHistoryUpdateKeys;
        value: string;
      }>
    ) => {
      state.experience.history[action.payload.index][action.payload.key] =
        action.payload.value;
    },
    updateProject: (
      state,
      action: PayloadAction<{
        index: number;
        key: ResumeProjectUpdateKeys;
        value: string;
      }>
    ) => {
      state.projects[action.payload.index][action.payload.key] =
        action.payload.value;
    },
    moveWorkHistory: (
      state,
      action: PayloadAction<{ direction: "UP" | "DOWN"; index: number }>
    ) => {
      const updatedWorkHistory = [...state.experience.history];
      if (action.payload.direction === "UP" && !!action.payload.index) {
        const temp = updatedWorkHistory[action.payload.index];
        updatedWorkHistory[action.payload.index] =
          updatedWorkHistory[action.payload.index - 1];
        updatedWorkHistory[action.payload.index - 1] = temp;
        state.experience.history = updatedWorkHistory;
        return;
      }
      if (
        action.payload.direction === "DOWN" &&
        action.payload.index < state.experience.history.length - 1
      ) {
        const temp = updatedWorkHistory[action.payload.index];
        updatedWorkHistory[action.payload.index] =
          updatedWorkHistory[action.payload.index + 1];
        updatedWorkHistory[action.payload.index + 1] = temp;
        state.experience.history = updatedWorkHistory;
        return;
      }
    },
    moveProjects: (
      state,
      action: PayloadAction<{ direction: "UP" | "DOWN"; index: number }>
    ) => {
      const updatedProjects = [...state.projects];
      if (action.payload.direction === "UP" && !!action.payload.index) {
        const temp = updatedProjects[action.payload.index];
        updatedProjects[action.payload.index] =
          updatedProjects[action.payload.index - 1];
        updatedProjects[action.payload.index - 1] = temp;
        state.projects = updatedProjects;
        return;
      }
      if (
        action.payload.direction === "DOWN" &&
        action.payload.index < state.projects.length - 1
      ) {
        const temp = updatedProjects[action.payload.index];
        updatedProjects[action.payload.index] =
          updatedProjects[action.payload.index + 1];
        updatedProjects[action.payload.index + 1] = temp;
        state.projects = updatedProjects;
        return;
      }
    },
    moveSkill: (
      state,
      action: PayloadAction<{ direction: "UP" | "DOWN"; index: number }>
    ) => {
      const updatedSkills = [...state.skills];
      if (action.payload.direction === "UP" && !!action.payload.index) {
        const temp = updatedSkills[action.payload.index];
        updatedSkills[action.payload.index] =
          updatedSkills[action.payload.index - 1];
        updatedSkills[action.payload.index - 1] = temp;
        state.skills = updatedSkills;
        return;
      }
      if (
        action.payload.direction === "DOWN" &&
        action.payload.index < state.skills.length - 1
      ) {
        const temp = updatedSkills[action.payload.index];
        updatedSkills[action.payload.index] =
          updatedSkills[action.payload.index + 1];
        updatedSkills[action.payload.index + 1] = temp;
        state.skills = updatedSkills;
        return;
      }
    },
    moveResponsibility: (
      state,
      action: PayloadAction<{ direction: "UP" | "DOWN"; index: number }>
    ) => {
      const updatedResponsibilities = [...state.responsibilties];
      if (action.payload.direction === "UP" && !!action.payload.index) {
        const temp = updatedResponsibilities[action.payload.index];
        updatedResponsibilities[action.payload.index] =
          updatedResponsibilities[action.payload.index - 1];
        updatedResponsibilities[action.payload.index - 1] = temp;
        state.responsibilties = updatedResponsibilities;
        return;
      }
      if (
        action.payload.direction === "DOWN" &&
        action.payload.index < state.responsibilties.length - 1
      ) {
        const temp = updatedResponsibilities[action.payload.index];
        updatedResponsibilities[action.payload.index] =
          updatedResponsibilities[action.payload.index + 1];
        updatedResponsibilities[action.payload.index + 1] = temp;
        state.responsibilties = updatedResponsibilities;
        return;
      }
    },
    deleteWorkHistory: (state, action: PayloadAction<number>) => {
      const updatedList = [...state.experience.history];
      updatedList.splice(action.payload, 1);
      state.experience.history = updatedList;
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      const updatedList = [...state.projects];
      updatedList.splice(action.payload, 1);
      state.projects = updatedList;
    },
    deleteResponsibility: (state, action: PayloadAction<number>) => {
      const updatedList = [...state.responsibilties];
      updatedList.splice(action.payload, 1);
      state.responsibilties = updatedList;
    },
    deleteSkill: (state, action: PayloadAction<number>) => {
      const updatedList = [...state.skills];
      updatedList.splice(action.payload, 1);
      state.skills = updatedList;
    },
    addWorkHistory: state => {
      const newItem: ExperienceHistoryProps = {
        company: "",
        designation: "",
        duration: "",
        link: "",
      };
      state.experience.history = [newItem, ...state.experience.history];
    },
    addProject: state => {
      const newItem: ProjectProps = {
        link: "",
        stack: "",
        title: "",
      };
      state.projects = [newItem, ...state.projects];
    },
    addResponsibility: state => {
      state.responsibilties = ["", ...state.responsibilties];
    },
    addSkill: state => {
      state.skills = ["", ...state.skills];
    },
  },
  selectors: {
    resumeData: data => data,
  },
});
export const {
  updateAbout,
  updateProject,
  updateResponsibilities,
  updateSkill,
  updateTotalExperience,
  updateWorkHistory,
  moveWorkHistory,
  moveProjects,
  moveResponsibility,
  moveSkill,
  addProject,
  addResponsibility,
  addSkill,
  addWorkHistory,
  deleteProject,
  deleteResponsibility,
  deleteSkill,
  deleteWorkHistory,
} = resumeDataSlice.actions;
export const { resumeData } = resumeDataSlice.selectors;
