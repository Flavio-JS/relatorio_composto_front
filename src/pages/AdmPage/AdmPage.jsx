import { NavLink } from "react-router-dom";
import "./AdmPage.css";

export const AdmPage = ({ admData }) => {
  return (
    <>
      <section className="adm-page__section">
        {admData[0].loged !== true && (
          <NavLink to="/">Faça o login clicando aqui</NavLink>
        )}
        {admData[0].loged === true && (
          <>
            <h1>AdmPage</h1>
            <h2>bleble</h2>
          </>
        )}
      </section>
    </>
  );
};
