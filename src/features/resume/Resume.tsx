import styles from "./Resume.module.scss";
import { useAppSelector } from "@/store/hooks";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import { Divider } from "@mui/material";
import Link from "next/link";
const Resume = () => {
  const RESUME_DATA = useAppSelector(state => state.resumeData);
  return (
    <div className={styles.resume_wrapper} id="resume-wrapper">
      <div className={styles.resume_container}>
        <section className={styles.about_section}>
          <p className={`${styles.name} ${styles.greenText}`}>
            {RESUME_DATA.about.name}
          </p>
          <p className={`${styles.designation} ${styles.yellowText}`}>
            {RESUME_DATA.about.designation}
          </p>
          <p className={`${styles.contact} ${styles.yellowText}`}>
            {RESUME_DATA.about.email}{" "}
            <Link
              href={`mailto:${RESUME_DATA.about.email}`}
              target="_blank"
              className={`${styles.link} ${styles.blueText}`}
            >
              <LinkRoundedIcon />
            </Link>{" "}
            | {RESUME_DATA.about.phone}{" "}
            <Link
              href={`tel:${RESUME_DATA.about.phone}`}
              target="_blank"
              className={`${styles.link} ${styles.blueText}`}
            >
              <LinkRoundedIcon />
            </Link>
          </p>
          <article className={`${styles.summary} ${styles.yellowText}`}>
            {RESUME_DATA.about.summary}
          </article>
        </section>
        <section className={styles.projects_wrapper}>
          <article className={styles.projects}>
            <p className={styles.heading}>
              EXPERIENCE: {RESUME_DATA.experience.total}
              {" || ["}
            </p>
            <div className={styles.tabbed}>
              {RESUME_DATA.experience.history.map((history, index) => (
                <div key={index}>
                  <p className={styles.yellowText}>{"{"}</p>
                  <div
                    className={`${styles.project} ${styles.tabbed}`}
                    key={index}
                  >
                    <div className={styles.title}>
                      <p className={styles.yellowText}>
                        <span className={styles.greenText}>company:</span>{" "}
                        {history.company}
                      </p>
                      {history.link && (
                        <Link
                          href={history.link}
                          target="_blank"
                          className={`${styles.link} ${styles.blueText}`}
                        >
                          <LinkRoundedIcon />
                        </Link>
                      )}
                      <p className={styles.yellowText}>,</p>
                    </div>
                    <div className={styles.title}>
                      <p className={styles.yellowText}>
                        <span className={styles.greenText}>designation:</span>{" "}
                        {history.designation},
                      </p>
                    </div>
                    <div className={styles.title}>
                      <p className={styles.yellowText}>
                        <span className={styles.greenText}>duration:</span>{" "}
                        {history.duration}
                      </p>
                    </div>
                  </div>
                  <p className={styles.yellowText}>{"},"}</p>
                </div>
              ))}
            </div>
            <p className={styles.heading}>{"]"}</p>
          </article>
          <article className={styles.projects}>
            <p className={styles.heading}>PROJECTS: {"["}</p>
            <div className={styles.tabbed}>
              {RESUME_DATA.projects.map((project, index) => (
                <div key={index}>
                  <p className={styles.yellowText}>{"{"}</p>
                  <div
                    className={`${styles.project} ${styles.tabbed}`}
                    key={index}
                  >
                    <div className={styles.title}>
                      <p className={styles.yellowText}>
                        <span className={styles.greenText}>name:</span>{" "}
                        {project.title}
                      </p>
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          className={`${styles.link} ${styles.blueText}`}
                        >
                          <LinkRoundedIcon />
                        </Link>
                      )}
                      <span className={styles.yellowText}>,</span>
                    </div>
                    {project.stack && (
                      <span
                        className={`${styles.tech_stack} ${styles.yellowText}`}
                      >
                        <span className={styles.greenText}>
                          technology: {"["}
                        </span>
                        <div className={styles.tabbed}>
                          {project.stack.split(",").map((item, index) => (
                            <p key={index} className={styles.yellowText}>
                              {item},
                            </p>
                          ))}
                        </div>
                        <span className={styles.greenText}>{"]"}</span>
                      </span>
                    )}
                  </div>
                  <p className={styles.yellowText}>{"},"}</p>
                </div>
              ))}
            </div>
            <p className={styles.heading}>{"]"}</p>
          </article>
        </section>
        <Divider color="#373944" sx={{ margin: "20px 0px" }} />
        <section>
          <p className={styles.comment}>{"#"} ROLES / RESPONSIBILITIES</p>
          <ul className={styles.tabbed}>
            {RESUME_DATA.responsibilties.map((item, index) => (
              <li key={index} className={`${styles.responsibilties}`}>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <Divider color="#373944" sx={{ margin: "20px 0px" }} />
        <section>
          <p className={styles.comment}>{"#"} SKILLS</p>
          <ul className={styles.tabbed}>
            {RESUME_DATA.skills.map((item, index) => (
              <li key={index} className={`${styles.responsibilties}`}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
export default Resume;
