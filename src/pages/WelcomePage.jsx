import React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import AppFrame from "../components/frames/AppFrame";
import NavBarHome from "../components/navbars/NavBarHome";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormLogin from "../components/forms/FormLogin";
import { URI_BACKEND } from "../utils/urls";
import FormRegister from "../components/forms/FormRegister";
import Parallax from "../components/componentsLuis/Parallax";
import Section from "../components/componentsLuis/Section";
import "../../public/styles/navbarhome.css"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#1c2630",
  border: "2px solid #000",

  p: 4,
};

const WelcomePage = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppFrame>
      {/* <NavBarHome handleOpen={handleOpen} className = "nav-bar-home" /> */}

      <Container maxWidth="md">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormLogin uri={URI_BACKEND("auth/login")} title="Lgin" />
          </Box>
        </Modal>
      </Container>
      <Parallax />
      <Section 
      posicion = "izquierda"
      texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel voluptates, iusto dolorum 
      at ut incidunt nostrum, accusantium, tenetur exercitationem recusandae rem laudantium dolorem harum odit qui sunt. 
      Exercitationem, consectetur!"
      ></Section>
      <Section></Section>
      <Section></Section>
    </AppFrame>
  );
};

export default WelcomePage;
