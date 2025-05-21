import config from "../config";

import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import EditorZone from "../components/common/EditorZone/EditorZone";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.portfolio, component: Portfolio },
  { path: config.routes.editPortfolioId, component:  EditorZone}
];

export default publicRoutes;
