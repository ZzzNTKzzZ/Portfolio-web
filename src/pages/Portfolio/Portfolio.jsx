import { useState } from "react";
import UserForm from "../../components/common/UserForm";

function Portfolio() {
    const [infoUser, setInfoUser] = useState();

    return (
        <div>
            <h2>User form</h2>
            <UserForm onSubmit={(submit) => {
                setInfoUser(submit)
            }}/>

            {infoUser ? "true" : "false"}
        </div>
    )
}

export default Portfolio