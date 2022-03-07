import { Box, Container, Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";


export default function Footer() {
  return (
    <footer>
      <Box color="white" style={{ backgroundColor: "#24263B", height: "11vh" }}>
        <Container maxWidth="lg">
          <Box
            textAlign="center"
            pt={{ xs: 2, sm: 5 }}
            pb={{ xs: 5, sm: 0 }}
            sx={{ pt: "10px", pb: "10px" }}
            display="flex"
            flexDirection="column"
          >
            <div>
              <Link
                href="https://github.com/Raghavarora27"
                target="_blank"
                marginRight={2}
              >
                <GitHubIcon 
                style={{ fontSize: 30 }}/>
              </Link>
              <Link
                href="https://www.linkedin.com/in/raghav-arora-2209a3184/"
                target="_blank"
                marginRight={2}
                
              >
                <LinkedInIcon style={{ fontSize: 30 }}/>
              </Link>
              <Link
                href="mailto:aroraraghav008@gmail.com"
                target="_blank"
                marginRight={2}
              >
                <EmailIcon style={{ fontSize: 30 }}/>
              </Link>
              
              <Link
                href="tel:7011698878"
                target="_blank"
                marginRight={2}
              >
                <PhoneIcon style={{ fontSize: 30 }}/>
              </Link>
            </div>
            <div style={{marginTop:"0.2rem"}}>Made with 🤍 by Raghav Arora &reg; {new Date().getFullYear()}</div>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
