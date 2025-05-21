import { Link } from "react-router-dom";
import style from "../../styles/components/PortfolioBox.module.css";
import config from "../../config";

export default function PortfolioBox({ name, img }) {
    return (
        <Link to={`${config.routes.getPortfolioBox(name)}`} className={style.box}>
            <img src={img} alt="Image" className={style.img} />
            <div className={style.name}>{name}</div>
        </Link>
    );
}
