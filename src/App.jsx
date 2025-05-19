import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import publicRoutes from "./routes/routes";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
