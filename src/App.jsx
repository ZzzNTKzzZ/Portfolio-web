import { BrowserRouter, Route, Routes } from "react-router-dom";

import publicRoutes from "./routes/routes";
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
