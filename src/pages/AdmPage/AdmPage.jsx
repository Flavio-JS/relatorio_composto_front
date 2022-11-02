import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import axios from "axios";
import "./AdmPage.css";

export const AdmPage = ({ admData, url }) => {
  let [admName, setAdmName] = useState("");
  let [admSenha, setAdmSenha] = useState("");
  let [admCpf, setAdmCpf] = useState("");

  let [showAddAdm, setShowAddAdm] = useState(false);
  let [showModifyAdm, setShowModifyAdm] = useState(false);

  const cadastrarAdm = async () => {
    if (admName !== "" && admSenha !== "" && admCpf.length === 11) {
      try {
        await axios.post(`${url}/addAdm`, {
          admCpf,
          admName,
          admSenha,
        });

        alert("Cadastrou !");

        setAdmName("");
        setAdmSenha("");
        setAdmCpf("");
      } catch (error) {
        alert("Houve um erro !");
        console.log(error);
      }
    } else {
      alert("Preencha todos os campos corretamente");
    }
  };

  const modificarAdm = async () => {
    try {
      if (admName !== "" && admSenha !== "") {
        await axios.put(`${url}/modifyAdm`, {
          admCpf: admData[0].adm_cpf,
          admName,
          admSenha,
        });
        alert("Modificou Nome e Senha");
        setAdmName("");
        setAdmSenha("");
      } else if (admName !== "" && admSenha === "") {
        await axios.put(`${url}/modifyAdm`, {
          admCpf: admData[0].adm_cpf,
          admName,
        });
        alert("Modificou Nome");
        setAdmName("");
        setAdmSenha("");
      } else if (admName === "" && admSenha !== "") {
        await axios.put(`${url}/modifyAdm`, {
          admCpf: admData[0].adm_cpf,

          admSenha,
        });
        alert("Modificou Senha");
        setAdmName("");
        setAdmSenha("");
      }
    } catch (error) {
      alert("Houve um erro");
      console.log(error);
    }
  };
  return (
    <>
      <section className="adm__section">
        {admData[0].loged !== true && (
          <NavLink to="/">Faça o login clicando aqui</NavLink>
        )}
        {admData[0].loged === true && (
          <>
            <div className="adm__navbar">
              <b
                onClick={() => {
                  setShowModifyAdm(false);
                  setShowAddAdm(true);
                }}
              >
                Adicionar ADM
              </b>

              <b
                onClick={() => {
                  setShowAddAdm(false);
                  setShowModifyAdm(true);
                }}
              >
                Modificar ADM
              </b>
            </div>
            {showAddAdm && (
              <>
                <div className="adm_newAdm">
                  <h1>Cadastrar novo ADM</h1>
                  <div className="card">
                    <label className="input">
                      <input
                        className="input__field"
                        type="text"
                        name="admCpf"
                        placeholder=" "
                        maxLength={11}
                        value={admCpf}
                        onChange={(e) => setAdmCpf(e.target.value)}
                      />
                      <span className="input__label">CPF</span>
                    </label>
                    <label className="input">
                      <input
                        className="input__field"
                        type="text"
                        name="admNome"
                        placeholder=" "
                        value={admName}
                        onChange={(e) => setAdmName(e.target.value)}
                      />
                      <span className="input__label">Nome</span>
                    </label>
                    <label className="input">
                      <input
                        className="input__field"
                        type="password"
                        name="loginPassword"
                        value={admSenha}
                        placeholder=" "
                        onChange={(e) => setAdmSenha(e.target.value)}
                      />
                      <span className="input__label">Senha</span>
                    </label>
                  </div>
                  <Button txt={"Cadastrar"} fn={cadastrarAdm}></Button>
                </div>
              </>
            )}
            {showModifyAdm && (
              <>
                <div className="adm_newAdm">
                  <h1>Modificar ADM</h1>

                  <div className="card">
                    <label className="input">
                      <input
                        className="input__field"
                        type="text"
                        name="admNome"
                        placeholder=" "
                        value={admName}
                        onChange={(e) => setAdmName(e.target.value)}
                      />
                      <span className="input__label">Novo Nome</span>
                    </label>
                    <label className="input">
                      <input
                        className="input__field"
                        type="password"
                        name="loginPassword"
                        value={admSenha}
                        placeholder=" "
                        onChange={(e) => setAdmSenha(e.target.value)}
                      />
                      <span className="input__label">Nova Senha</span>
                    </label>
                  </div>
                  <Button txt={"Modificar"} fn={modificarAdm}></Button>
                </div>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
};
