// src/Auth/AuthModal.jsx
import { Box, Modal } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open, activeForm, switchForm }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {activeForm === "login" ? <LoginForm handleClose={handleClose} /> : <RegisterForm handleClose={handleClose} />}
          {activeForm === "login" ? (
            <p className="mt-4">
              Don't have an Account?{" "}
              <span
                onClick={() => switchForm("register")} // Switch to register form
                className="text-blue-400 cursor-pointer"
              >
                Register
              </span>
            </p>
          ) : (
            <p className="mt-4">
              Already have an Account?{" "}
              <span
                onClick={() => switchForm("login")} // Switch to login form
                className="text-blue-400 cursor-pointer"
              >
                Log In
              </span>
            </p>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;