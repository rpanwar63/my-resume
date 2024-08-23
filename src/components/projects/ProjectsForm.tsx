import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import ListItem from "../list-item/ListItem";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { ChangeEvent } from "react";
import {
  addProject,
  deleteProject,
  moveProjects,
  updateProject,
} from "@/store/slices/DataSlice";

const ProjectsForm = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(state => state.resumeData.projects);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
    index: number
  ) => {
    if (e) {
      dispatch(
        updateProject({
          key: e.target.name as any,
          value: e.target.value,
          index,
        })
      );
    }
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Projects</Typography>
          <IconButton onClick={() => dispatch(addProject())}>
            <AddCircleRoundedIcon color="primary" fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      {projects.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          onMove={moveProjects}
          onDelete={deleteProject}
          isFirst={!index}
          isLast={projects.length - 1 === index}
        >
          <Grid item xs={12} lg={6} sx={{ m: 0, p: 0 }}>
            <TextField
              fullWidth
              label="Name"
              name="title"
              value={item.title}
              onChange={e => handleChange(e, index)}
              sx={{ background: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ m: 0, p: 0 }}>
            <TextField
              fullWidth
              label="Link"
              name="link"
              value={item.link}
              onChange={e => handleChange(e, index)}
              sx={{ background: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12} sx={{ m: 0, p: 0 }}>
            <TextField
              fullWidth
              label="Tech Stack"
              name="stack"
              value={item.stack}
              onChange={e => handleChange(e, index)}
              sx={{ background: "#ffffff" }}
            />
          </Grid>
        </ListItem>
      ))}
    </>
  );
};
export default ProjectsForm;
