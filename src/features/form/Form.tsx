import Toolbar from "@/components/toolbar/Toolbar";
import styles from "./Form.module.scss";
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AboutForm from "@/components/about/AboutForm";
import ExperienceForm from "@/components/experience/ExperienceForm";
import ProjectsForm from "@/components/projects/ProjectsForm";
import ResponsibiltiesForm from "@/components/responsibilties/ResponsibiltiesForm";
import SkillsForm from "@/components/skills/SkillsForm";
const Form = () => {
  return (
    <div className={styles.container}>
      <Toolbar />
      <div className={styles.form_wrapper}>
        <Paper sx={{ m: 2, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h5" color="primary">
              Resume Editor
            </Typography>
            <IconButton>
              <InfoOutlinedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          <div className={styles.scrollable_form}>
            <AboutForm />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <ExperienceForm />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <ProjectsForm />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <ResponsibiltiesForm />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <SkillsForm />
          </div>
        </Paper>
      </div>
    </div>
  );
};
export default Form;
