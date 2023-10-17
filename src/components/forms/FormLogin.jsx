import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";
import Grid from "@mui/material/Grid";
import Loader from "../Loaders/Loader";
import Message from "../Messages/Message";
import Typography from '@mui/material/Typography'
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const style_inputs = {
  border: "thin solid #dedede",
  borderRadius: "0.25rem",
  padding: "0.75rem",
  marginBottom: "1rem",
  outline: "none",
  display: "block",
  width: "100 %",
  fontSize: "1rem",
  lineHeight: 1,
  backgroundColor: "transparent",
  resize: "none",
};

const style_form = {
  marginBottom: "1rem",
};

const style_button = {
  border: "thin solid #444",
  borderRadius: "0.25rem",
  padding: "0.5rem 1rem",
  margin: "0 0.5rem 0 0",
  display: "inline - block",
  backgroundColor: " #eee",
  color: "#444",
  fontWeight: "bold",
  fontSize: "1rem",
  lineHeight: 1,
  textTransform: "none",
  textDecoration: "none",
  textAlign: "center",
  verticalAlign: "middle",
  cursor: "pointer",
};

const style_errors = {
  fontWeight: "bold",
  color: "#dc3545",
};

const initialForm = {
  username: "",
  password: "",
};

function validationForm(form) {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

  if (!form.username.trim()) {
    errors.username = "El campo Email es requerido.";
  } else if (!regexName.test(form.username.trim())) {
    errors.username = "Inserte un Email valido.";
  }

  if (!form.password.trim()) {
    errors.password = "Ingrese su contraseña";
  }
  return errors;
}

const FormLogin = ({uri, title}) => {

  const {
    resBody,
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm,uri,0);

  const {isLogged,login}=useUser()

  const navigate = useNavigate()

  useEffect(() => {
    console.log("first")
    if(response){
      login(resBody.jwt)
    }

    if(isLogged){
      navigate('/admin')
    }
    return () => {
      console.log("bye")
    }
  }, [response,isLogged])
  


  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <Typography variant="h2" color="initial">{title}</Typography>
      <form onSubmit={handleSubmit} style={style_form}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.username}
          required
          style={style_inputs}
        />
        {errors.username && <p style={style_errors}>{errors.username}</p>}

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          required
          style={style_inputs}
        />
        {errors.password && <p style={style_errors}>{errors.password}</p>}

        <input type="submit" value="Enviar" style={style_button} />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos fueron enviados" bgColor="#198754" />
      )}
    </Grid>
  );
};

FormLogin.propTypes = {
  uri:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired
};

export default FormLogin;
