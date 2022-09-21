import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
  sendPasswordReset,
} from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Paper, TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Image, Row, Col, Modal } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export default function Login() {
  const back = window.location.origin + "/log-in-girl.svg";

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    minHeight: "100vh",
    fontFamily: "Poppins",
  }));
  const [email, setEmail] = useState("");
  const [remail, setREmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [log, setLog] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowLog = () => setLog(true);
  const handleCloseLog = () => setLog(false);
  const [reg, setReg] = useState(false);
  const [Regemail, setRegEmail] = useState("");
  const [Regpassword, setRegPassword] = useState("");
  const [Regname, setRegName] = useState("");
  const handleShowSignup = () => setReg(true);
  const handleCloseSignup = () => setReg(false);
  const register = () => {
    if (!Regname) alert("Please enter name");
    registerWithEmailAndPassword(Regname, Regemail, Regpassword);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/JS");
  }, [user, loading]);
  return (
    <>
      {/* Register mail */}
      <Modal show={reg} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#6d00b2" }}>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            label="E-mail Address"
            id="outlined-basic"
            variant="standard"
            type="text"
            value={Regemail}
            onChange={(event) => {
              setRegEmail(event.target.value);
            }}
          />
          <Row>
            <Col>
              {" "}
              <TextField
                id="fullname"
                value={Regname}
                onChange={(e) => setRegName(e.target.value)}
                label="Fullname"
                variant="standard"
                type="text"
                sx={{ marginTop: 2 }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <TextField
                id="password"
                value={Regpassword}
                onChange={(e) => setRegPassword(e.target.value)}
                label="Password"
                variant="standard"
                type="password"
                sx={{ marginTop: 2 }}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" color="error" onClick={handleCloseSignup}>
            Close
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={register}
            sx={{ marginLeft: 1 }}
          >
            Signup
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Reset mail */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#6d00b2" }}>Recovery Mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            id="E-mail "
            value={remail}
            onChange={(e) => setREmail(e.target.value)}
            label="E-mail Address"
            variant="outlined"
            type="text"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => sendPasswordReset(email)}
            sx={{ marginLeft: 1 }}
          >
            Reset email{" "}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Login */}
      <Modal show={log} onHide={handleCloseLog}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#0000b2" }}>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            label="E-mail Address"
            id="outlined-basic"
            variant="standard"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Row>
            <Col>
              {" "}
              <TextField
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="standard"
                type="password"
                sx={{ marginTop: 2 }}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => logInWithEmailAndPassword(email, password)}
            sx={{}}
          >
            <ExitToAppSharpIcon />
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{ marginLeft: 1 }}
            onClick={signInWithGoogle}
          >
            <GoogleIcon />
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Page OverView In MUI */}
      <Row>
        <Col>
          {" "}
          <Grid item xs={6}>
            <Item
              sx={{
                background: "radial-gradient(circle,#202047 0,#020917 100%)",
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <Image src={back} />
            </Item>
          </Grid>
        </Col>
        <Col>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleShowLog}
              sx={{ marginTop: 3, padding: "5em" }}
            >
              Click Me LOGIN
            </Button>
            <Box sx={{ marginTop: 1, marginLeft: 1 }}>
              <Row>
                <Col>
                  <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={handleShow}
                  >
                    Forgot Password
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Typography variant="p" component="p">
                    Don't have an account?
                    <Link
                      component="button"
                      variant="body2"
                      underline="none"
                      onClick={handleShowSignup}
                    >
                      Register
                    </Link>
                    now
                  </Typography>
                </Col>
              </Row>
            </Box>
          </Grid>
        </Col>
      </Row>
    </>
  );
}
