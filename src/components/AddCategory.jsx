import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCategory } from "../redux/widgetsSlice";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    if (categoryName) {
      dispatch(addCategory({ name: categoryName, widgets: [] }));
      setCategoryName("");
    }
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      style={{ marginBottom: 16 }}
    >
      <Grid item>
        <TextField
          label="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleAddCategory}>
          Add Category
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddCategory;
