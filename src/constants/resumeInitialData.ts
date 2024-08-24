import { ResumeDataProps } from "@/types/resume-data";

export const RESUME_INITIAL_DATA: ResumeDataProps = {
  about: {
    name: "Rishabh Panwar",
    location: "",
    phone: "",
    email: "rishabh.rp.rp@gmail.com",
    designation: "JavaScipt Developer",
    summary:
      "Innovative and results-driven JavaScript/ReactJS developer with over 4 years of experience in building dynamic, high-performance web applications. Proficient in leveraging modern frameworks and libraries to create responsive and user-centric solutions. Adept at collaborating with cross-functional teams to deliver projects on time and within scope. Strong problem-solving skills with a passion for writing clean, maintainable code and staying updated with the latest industry trends and technologies. Committed to enhancing user experiences through intuitive and efficient design.",
  },
  experience: {
    total: "4+ years",
    history: [
      {
        company: "NeoSoft Technologies",
        duration: "May, 2022 - Now",
        designation: "Software Developer",
        link: "https://www.neosofttech.com/",
      },
      {
        company: "Synclusive Innovation",
        duration: "Oct, 2019 - Oct, 2021",
        designation: "Software Developer",
        link: "https://synclusiveinno.com/",
      },
    ],
  },
  projects: [
    {
      title: "Sotheby's Motorsport",
      link: "https://sothebysmotorsport.com/",
      stack: "Next.js | ReactJS",
    },
    {
      title: "Dupont Registry",
      link: "https://www.dupontregistry.com/",
      stack: "Next.js | ReactJS",
    },
  ],
  responsibilties: [
    "Lead front-end developement, provided constructive feedback in code reviews.",
    "Developed and maintained responsive web applications using JavaScript Frameworks.",
    "Created modular React components to ensure a consistent and scalable codebase.",
    "Translated wireframes and mockups into high-quality, interactive user interfaces.",
    "Collaborated with other developers and stakeholders to achieve project goals.",
  ],
  skills: [
    "HTML5",
    "CSS3 / SASS / Material UI",
    "JavaScript / TypeScript",
    "ReactJS / Next.js",
    "REST APIs / Redux",
    "Git",
  ],
};
