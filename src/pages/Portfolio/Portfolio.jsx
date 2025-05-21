import { useState } from "react";

import UserForm from "../../components/common/UserForm";
import PortfolioBox from "../../components/common/PortfolioBox";
function Portfolio() {
    const [infoUser, setInfoUser] = useState();

    return (
        <div>
            <h2>Portfolio</h2>

            {/* <UserForm onSubmit={(submit) => {
                setInfoUser(submit)
            }}/> */}
            <PortfolioBox name={"port 1"} img={""}></PortfolioBox>


            {infoUser ? "true" : "false"}
        </div>
    )
}

export default Portfolio