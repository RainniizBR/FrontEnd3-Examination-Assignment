import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientDetailPage from "./pages/ClientDetailPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/client-detail/:id" element={<ClientDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
