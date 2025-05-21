import { Link } from "react-router-dom"

import routes from "../../config/routes"
function Home() {
    return (
        <div>
            <h2>Homa page</h2>
            <Link to={routes.portfolio}>Portfolio</Link> <br />
            <Link to={routes.editPortfolio}>Drag</Link>
        </div>
    )
}

export default Home