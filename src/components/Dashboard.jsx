import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeWidget } from "../redux/widgetsSlice";
import "./Dashboard.css"; // Add custom CSS for styling

const Dashboard = ({ searchTerm, onAddWidget }) => {
  const categories = useSelector((state) => state.widgets.categories);
  const dispatch = useDispatch();

  const handleRemoveWidget = (categoryName, widgetId) => {
    dispatch(removeWidget({ categoryName, widgetId }));
  };

  return (
    <Grid container spacing={3}>
      {categories.map((category) => (
        <Grid item xs={12} key={category.name}>
          <Typography variant="h6" className="category-title">
            {category.name}
          </Typography>
          <Grid container spacing={2}>
            {category.widgets
              .filter((widget) =>
                widget.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((widget) => (
                <Grid item xs={4} key={widget.id}>
                  <Card className="widget-card">
                    <CardContent>
                      <Typography variant="subtitle1">{widget.name}</Typography>
                      <Typography variant="body2">{widget.text}</Typography>
                    </CardContent>
                    <IconButton
                      className="delete-button"
                      onClick={() =>
                        handleRemoveWidget(category.name, widget.id)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Card>
                </Grid>
              ))}
            <Grid item xs={4}>
              <Card
                className="add-widget-card"
                onClick={() => onAddWidget(category.name)}
              >
                <CardContent>
                  <Typography variant="subtitle1" className="add-widget-text">
                    + Add Widget
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
