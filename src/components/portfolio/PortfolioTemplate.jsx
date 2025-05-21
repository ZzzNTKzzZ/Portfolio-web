import { useParams } from "react-router-dom";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function PortfolioTemplate() {
  const { id } = useParams();
  const info  = {
    name: "Jane Smith",
    age: 27,
    description:
      "I'm a full-stack developer who loves building responsive and scalable web applications. Experienced with React, Node.js, and cloud technologies.",
  };
  return (
    <div>
      <Header />
      <Body info={info}/>
      <Footer />
    </div>
  );
}

export default PortfolioTemplate;
