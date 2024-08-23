import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateAbout } from "@/store/slices/DataSlice";
import { Grid, TextField } from "@mui/material";
import { ChangeEvent } from "react";

const AboutForm = () => {
  const dispatch = useAppDispatch();
  const about = useAppSelector(state => state.resumeData.about);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e) {
      dispatch(
        updateAbout({ key: e.target.name as any, value: e.target.value })
      );
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={about.name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Designation"
          name="designation"
          value={about.designation}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={about.phone}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={about.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={about.location}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          minRows={6}
          maxRows={8}
          label="Summary"
          name="summary"
          value={about.summary}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};
export default AboutForm;
