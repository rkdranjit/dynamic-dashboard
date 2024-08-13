import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addWidget } from "../redux/widgetsSlice";
import "./AddWidgetModal.css"; // Add custom CSS for modal styling

const AddWidgetModal = ({ open, onClose, categoryName }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ categoryName, widget: newWidget }));
    setWidgetName("");
    setWidgetText("");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-box">
        <TextField
          label="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          fullWidth
          multiline
          rows={4}
          style={{ marginTop: 16 }}
        />
        <Button
          variant="contained"
          onClick={handleAddWidget}
          style={{ marginTop: 16 }}
        >
          Add Widget
        </Button>
      </Box>
    </Modal>
  );
};

export default AddWidgetModal;
