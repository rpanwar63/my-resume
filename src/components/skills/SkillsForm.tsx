import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import ListItem from "../list-item/ListItem";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { ChangeEvent } from "react";
import {
  addSkill,
  deleteSkill,
  moveSkill,
  updateSkill,
} from "@/store/slices/DataSlice";

const SkillsForm = () => {
  const dispatch = useAppDispatch();
  const skills = useAppSelector(state => state.resumeData.skills);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e)
      dispatch(
        updateSkill({ index: Number(e.target.name), value: e.target.value })
      );
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
          <Typography variant="h6">Skills</Typography>
          <IconButton onClick={() => dispatch(addSkill())}>
            <AddCircleRoundedIcon color="primary" fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      {skills.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          onMove={moveSkill}
          isFirst={!index}
          isLast={skills.length - 1 === index}
          onDelete={deleteSkill}
        >
          <Grid item xs={12} sx={{ m: 0, p: 0 }}>
            <TextField
              fullWidth
              label="Skill"
              name={String(index)}
              value={item}
              sx={{ background: "#ffffff" }}
              onChange={handleChange}
            />
          </Grid>
        </ListItem>
      ))}
    </>
  );
};
export default SkillsForm;
