import config from "../config";

import Home from "../pages/Home/Home"
import DragDropSwap from "../components/common/DragDropSwap";

const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.portfolio, component: DragDropSwap }
]

export default publicRoutes

