import { Grid, IconButton } from "@mui/material";
import { ReactNode } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/store/hooks";
type Props = {
  index: number;
  onMove: ActionCreatorWithPayload<{
    direction: "UP" | "DOWN";
    index: number;
  }>;
  onDelete: ActionCreatorWithPayload<number>;
  children: ReactNode;
  isFirst: boolean;
  isLast: boolean;
};
const ListItem = ({
  children,
  onMove,
  index,
  isFirst,
  isLast,
  onDelete,
}: Props) => {
  const dispatch = useAppDispatch();
  const handleMove = (direction: "UP" | "DOWN") => {
    dispatch(onMove({ direction, index }));
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        m: 0,
        mt: 2,
        border: "2px solid",
        width: "unset",
        borderColor: "rgba(25, 118, 208, 0.5)",
        borderRadius: 2,
        background: "rgba(25, 118, 208, 0.1)",
        p: 2,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          m: 0,
          mt: -2,
          p: 0,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {!isFirst && (
          <IconButton onClick={() => handleMove("UP")}>
            <ArrowUpwardRoundedIcon color="primary" />
          </IconButton>
        )}
        {!isLast && (
          <IconButton onClick={() => handleMove("DOWN")}>
            <ArrowDownwardRoundedIcon color="primary" />
          </IconButton>
        )}
        <IconButton onClick={() => dispatch(onDelete(index))}>
          <DeleteOutlinedIcon color="error" />
        </IconButton>
      </Grid>
      {children}
    </Grid>
  );
};
export default ListItem;
