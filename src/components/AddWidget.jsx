import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../redux/widgetsSlice";

const AddWidget = ({ categoryName }) => {
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
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
      />
      <button onClick={handleAddWidget}>Add Widget</button>
    </div>
  );
};

export default AddWidget;
