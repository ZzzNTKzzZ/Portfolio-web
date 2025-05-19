import config from "../config";

import Home from "../pages/Home/Home"
import Portfolio from "../pages/Portfolio/Portfolio";
const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.portfolio, component: Portfolio}
]

export default publicRoutes

