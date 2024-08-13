import React, { useState } from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import Dashboard from "./components/Dashboard";
import TopBar from "./components/TopBar";
import AddWidgetModal from "./components/AddWidgetModal";
import AddCategory from "./components/AddCategory";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(
    "CSPM Executive Dashboard"
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddWidget = (categoryName) => {
    setCurrentCategory(categoryName);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <TopBar
        onSearch={handleSearch}
        onAddWidget={() => handleAddWidget(currentCategory)}
      />
      <AddCategory />
      <Dashboard searchTerm={searchTerm} onAddWidget={handleAddWidget} />
      <AddWidgetModal
        open={modalOpen}
        onClose={handleModalClose}
        categoryName={currentCategory}
      />
    </Container>
  );
}

export default App;
