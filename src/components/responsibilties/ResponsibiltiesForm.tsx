import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import ListItem from "../list-item/ListItem";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import {
  addResponsibility,
  deleteResponsibility,
  moveResponsibility,
  updateResponsibilities,
} from "@/store/slices/DataSlice";
import { ChangeEvent } from "react";

const ResponsibiltiesForm = () => {
  const dispatch = useAppDispatch();
  const responsibilties = useAppSelector(
    state => state.resumeData.responsibilties
  );
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e)
      dispatch(
        updateResponsibilities({
          index: Number(e.target.name),
          value: e.target.value,
        })
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
          <Typography variant="h6">Responsibilties</Typography>
          <IconButton onClick={() => dispatch(addResponsibility())}>
            <AddCircleRoundedIcon color="primary" fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      {responsibilties.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          onMove={moveResponsibility}
          onDelete={deleteResponsibility}
          isFirst={!index}
          isLast={responsibilties.length - 1 === index}
        >
          <Grid item xs={12} sx={{ m: 0, p: 0 }}>
            <TextField
              fullWidth
              label="Responsibility"
              value={item}
              sx={{ background: "#ffffff" }}
              multiline
              minRows={2}
              maxRows={4}
              name={String(index)}
              onChange={handleChange}
            />
          </Grid>
        </ListItem>
      ))}
    </>
  );
};
export default ResponsibiltiesForm;
