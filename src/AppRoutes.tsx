import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import { Candidates } from "./pages/candidates";
import { Ranking } from "./pages/ranking";

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Candidates />} />
          <Route path='/ranking' element={<Ranking />} />
        </Routes>
      </BrowserRouter>
    )
  }