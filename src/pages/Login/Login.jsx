import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Button } from "../../components/Button/Button";

export const Login = ({ setAdmData, url, admData }) => {
  let [loginCpf, setLoginCpf] = useState("");
  let [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    if (loginCpf === "" || loginCpf.length !== 11 || loginPassword === "") {
      alert("Preencha os campos corretamente");
    } else {
      try {
        const resultadoLogin = await axios.post(`${url}/admLogin`, {
          cpf: loginCpf,
          loginPassword,
        });

        setAdmData(resultadoLogin.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="login__section">
      {admData[0].loged !== true && (
        <>
          <h1>
            <b>LOGIN ADM</b>
          </h1>
          {admData[0].loged === "notRegistered" && (
            <h1>Usuário não encontrado</h1>
          )}
          {admData[0].loged === "wrongPassword" && <h1>Senha incorreta</h1>}
          <div className="card">
            <label className="input">
              <input
                className="input__field"
                type="text"
                name="loginCpf"
                placeholder=" "
                maxLength="11"
                value={loginCpf}
                onChange={(e) => setLoginCpf(e.target.value)}
              />
              <span className="input__label">CPF</span>
            </label>
            <label className="input">
              <input
                className="input__field"
                type="password"
                name="loginPassword"
                value={loginPassword}
                placeholder=" "
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <span className="input__label">Senha</span>
            </label>
          </div>
          <Button txt={"Login"} fn={login}></Button>
        </>
      )}
      {admData[0].loged === true && (
        <>
          <div>
            <h1>Está logado</h1>
          </div>
        </>
      )}
    </section>
  );
};

export default Login;
