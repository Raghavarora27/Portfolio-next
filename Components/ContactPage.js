import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import SendIcon from "@mui/icons-material/Send";
import  Image  from "next/Image";
import contact from "../assets/contact.jpeg";

const ContactPage = () => {
  return (
    <div
      style={{
        height: "78vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="contactHeading">
        <Box className="Heading">
          <h1>Contact Me</h1>
          <div>Lets keep in Touch</div>
          <StarBorderPurple500Icon style={{ color: "black" }} />
          <StarBorderPurple500Icon style={{ color: "black" }} />
          <StarBorderPurple500Icon style={{ color: "purple" }} />
          <StarBorderPurple500Icon style={{ color: "purple" }} />
          <StarBorderPurple500Icon style={{ color: "blue" }} />
          <StarBorderPurple500Icon style={{ color: "blue" }} />
        </Box>
        <Box className="Contact">
          <Box className="left">

            <h1 style={{ textAlign: "center" ,boxShadow: "0px 0px 10px 5px",width:"80%",margin:"auto",marginTop:"2rem"}}>Get In Touch 📧</h1>
            <h2 style={{ color: "#101D24",fontStyle:"italic",marginLeft:"1rem" }}>Send Your Email Here !</h2>
            <Image src={contact} fullWidth height={530} />
          </Box>
          <Box className="right">
            <div>
              <TextField
                label="Name"
                fullWidth
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#D3D8EB",
                  borderRadius: "5%",
                }}
              />
            </div>
            <div>
              <TextField
                label="Email"
                fullWidth
                style={{ marginTop: "1rem", backgroundColor: "#D3D8EB" }}
              />
            </div>

            <div>
              <TextField
                label="Message"
                multiline
                maxRows={4}
                fullWidth
                style={{ marginTop: "1rem", backgroundColor: "#D3D8EB" }}
                inputProps={{
                  style: {
                    height: "5rem",
                  },
                }}
              />
            </div>

            <div>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                fullWidth
                style={{
                  marginTop: "2rem",
                  backgroundColor: "#1F2235",
                  height: "3rem",
                  borderRadius: "10%",
                }}
                onClick={
                  ()=>alert("Thank You for Contacting !!")
                }
              >
                Send
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ContactPage;
