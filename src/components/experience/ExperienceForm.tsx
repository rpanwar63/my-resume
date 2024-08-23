import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import ListItem from "../list-item/ListItem";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { ChangeEvent } from "react";
import {
  addWorkHistory,
  deleteWorkHistory,
  moveWorkHistory,
  updateTotalExperience,
  updateWorkHistory,
} from "@/store/slices/DataSlice";

const ExperienceForm = () => {
  const dispatch = useAppDispatch();
  const experience = useAppSelector(state => state.resumeData.experience);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
    index: number
  ) => {
    if (e) {
      dispatch(
        updateWorkHistory({
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
        <Grid item xs={12} md={6}>
          <TextField
            label="Experience"
            value={experience.total}
            onChange={e => {
              dispatch(updateTotalExperience(e.target.value));
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Work History</Typography>
          <IconButton onClick={() => dispatch(addWorkHistory())}>
            <AddCircleRoundedIcon color="primary" fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      {experience.history.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          onMove={moveWorkHistory}
          onDelete={deleteWorkHistory}
          isFirst={!index}
          isLast={experience.history.length - 1 === index}
        >
          <Grid item xs={12} lg={6} sx={{ m: 0, p: 0 }}>
            <TextField
              fullWidth
              label="Company"
              name="company"
              value={item.company}
              onChange={e => handleChange(e, index)}
              sx={{ background: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ m: 0, p: 0 }}>
            <TextField
              fullWidth
              label="Designation"
              name="designation"
              value={item.designation}
              onChange={e => handleChange(e, index)}
              sx={{ background: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ m: 0, p: 0 }}>
            <TextField
              fullWidth
              label="Duration"
              name="duration"
              value={item.duration}
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
        </ListItem>
      ))}
    </>
  );
};
export default ExperienceForm;
