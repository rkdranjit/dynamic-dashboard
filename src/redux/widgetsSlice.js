import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data/widgets.json";

export const widgetsSlice = createSlice({
  name: "widgets",
  initialState: initialData,
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find((c) => c.name === categoryName);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find((c) => c.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
    addCategory: (state, action) => {
      const { name, widgets } = action.payload;
      state.categories.push({ id: Date.now(), name, widgets });
    },
    removeCategory: (state, action) => {
      const categoryName = action.payload;
      state.categories = state.categories.filter(
        (c) => c.name !== categoryName
      );
    },
  },
});

export const { addWidget, removeWidget, addCategory, removeCategory } =
  widgetsSlice.actions;

export default widgetsSlice.reducer;
