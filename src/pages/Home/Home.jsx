import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = ({ admData }) => {
  return (
    <section>
      {admData[0].loged !== true && (
        <NavLink to="/">Faça o login clicando aqui</NavLink>
      )}
      {admData[0].loged === true && <h1>HOME</h1>}
    </section>
  );
};

export default Home;
