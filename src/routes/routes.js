import config from "../config";

import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import DragDropSwap from "../components/common/DragDropSwap";
import PortfolioTemplate from "../components/portfolio/PortfolioTemplate";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.portfolio, component: Portfolio },
  { path: config.routes.editPortfolio, component: DragDropSwap },
  { path: config.routes.editPortfolioId, component: PortfolioTemplate }
];

export default publicRoutes;
