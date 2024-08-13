import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const TopBar = ({ onSearch, onAddWidget }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          onChange={onSearch}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          style={{ marginRight: 16 }}
        />
        <IconButton color="inherit" onClick={onAddWidget}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
