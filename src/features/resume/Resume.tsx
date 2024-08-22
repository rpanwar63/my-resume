import { RESUME_INITIAL_DATA } from "@/constants/resumeInitialData";
import styles from "./Resume.module.scss";
const Resume = () => {
  return (
    <div className={styles.resume_wrapper}>
      <div className={styles.about_section}>
        {RESUME_INITIAL_DATA.about.designation}
      </div>
    </div>
  );
};
export default Resume;
