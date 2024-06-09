import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import Add from "./pages/Add";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
