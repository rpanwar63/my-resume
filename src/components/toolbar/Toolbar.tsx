import { Button, IconButton, Paper } from "@mui/material";
import { styles } from "./ToolbarStyles";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleFlipView } from "@/store/slices/StylesSlice";
import SwitchLeftRoundedIcon from "@mui/icons-material/SwitchLeftRounded";
import SwitchRightRoundedIcon from "@mui/icons-material/SwitchRightRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
const Toolbar = () => {
  const dispatch = useAppDispatch();
  const viewFlipped = useAppSelector(state => state.styles.viewFlipped);
  const handleFlip = () => {
    dispatch(toggleFlipView());
  };
  const download = async () => {
    window.print();
  };
  return (
    <div style={{ padding: "10px" }}>
      <Paper sx={styles.toolbar_wrapper}>
        <IconButton onClick={handleFlip}>
          {viewFlipped ? (
            <SwitchRightRoundedIcon color="primary" fontSize="large" />
          ) : (
            <SwitchLeftRoundedIcon color="primary" fontSize="large" />
          )}
        </IconButton>
        <Button
          variant="contained"
          sx={styles.toolbar_export_button}
          onClick={download}
        >
          <FileDownloadRoundedIcon />
          &nbsp;PDF Export
        </Button>
      </Paper>
    </div>
  );
};
export default Toolbar;
