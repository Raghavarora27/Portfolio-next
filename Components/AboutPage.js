import { Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import react from "../assets/react.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import MUI from "../assets/MUI.png";
import JAVA from "../assets/JAVA.png";
import nextjs from "../public/favicon.ico";
import Firebase from "../assets/Firebase.png";
import Insta from "../assets/Insta.PNG";
import Insta1 from "../assets/Insta1.PNG";
import wordHunt from "../assets/WordHunt.PNG";
import Portfolio from "../assets/portfolio.PNG";
import Movies from "../assets/Movies.PNG";
import Movies1 from "../assets/Movies1.PNG";
import Leetcode from "../assets/Leetcode.png";
import Sorting from "../assets/Sorting.PNG";
import gfg from "../assets/gfg.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import Hackerrank from "../assets/Hackerrank.png";
import Jira from "../assets/Jira.PNG";
import Camera from "../assets/Camera.PNG";
import Excel from "../assets/Excel.PNG";
import Image from "next/Image";
import JavascriptIcon from "@mui/icons-material/Javascript";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SlideshowIcon from "@mui/icons-material/Slideshow";

const AboutPage = () => {
  return (
    <div className="main">
      <div className="skillProfile">
        <div className="skill">
          <h1 style={{ textAlign: "center" }}>SKILLS</h1>
          <hr />
          <div
            style={{
              margin: "5px",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Reactjs</span>
              <Image src={react} width={30} height={30} />
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Material Ui</span>
              <Image src={MUI} width={30} height={30} />
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Html</span>
              <Image src={HTML} width={30} height={30} />
            </Button>
            <Button
              variant="outlined"
              endIcon={<GitHubIcon />}
              style={{ marginBottom: "8px" }}
            >
              <span style={{ marginRight: "5px" }}>Git/github</span>
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>CSS</span>
              <Image src={CSS} width={30} height={30} />
            </Button>
            <Button
              variant="outlined"
              endIcon={<JavascriptIcon style={{ fontSize: 30 }} />}
              style={{ marginBottom: "8px" }}
            >
              <span style={{ marginRight: "5px" }}>Javascript</span>
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Nextjs</span>
              <Image src={nextjs} width={30} height={30} />
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Firebase</span>
              <Image src={Firebase} width={30} height={30} />
            </Button>

            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>BootStrap</span>
              <Image src={bootstrap} width={30} height={30} />
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Algorithms</span>
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Java</span>
              <Image src={JAVA} width={30} height={30} />
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Data Structures</span>
            </Button>
            <Button variant="outlined" style={{ marginBottom: "8px" }}>
              <span style={{ marginRight: "5px" }}>Tailwind CSS</span>
              <Image src={tailwind} width={30} height={30} />
            </Button>
          </div>
        </div>
        <div className="profile">
          <h1 style={{ textAlign: "center" }}>PROFILES</h1>
          <hr />
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                color: "#1976D2",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  maxWidth: "20px",
                  border: "none",
                }}
              >
                <Link href="https://leetcode.com/Raghav_27/">
                  <Image src={Leetcode} height={50} width={50} />
                </Link>
              </Button>

              <Button
                variant="outlined"
                style={{
                  minWidth: "20px",
                  border: "none",
                }}
              >
                <Link href="https://auth.geeksforgeeks.org/user/aroraraghav008/profile">
                  <Image src={gfg} height={50} width={50} />
                </Link>
              </Button>

              <Button
                variant="outlined"
                style={{
                  minWidth: "20px",
                  border: "none",
                }}
              >
                <Link href="https://www.hackerrank.com/aroraraghav008">
                  <Image src={Hackerrank} height={50} width={50} />
                </Link>
              </Button>
              <Button
                variant="outlined"
                style={{
                  minWidth: "20px",
                  border: "none",
                }}
              >
                <Link href="https://github.com/Raghavarora27" target="_new">
                  <GitHubIcon style={{ fontSize: 35, color: "white" }} />
                </Link>
              </Button>
              <Button
                variant="outlined"
                style={{
                  minWidth: "20px",
                  border: "none",
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/raghav-arora-2209a3184/"
                  target="_new"
                >
                  <LinkedInIcon style={{ fontSize: 35, color: "white" }} />
                </Link>
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              ------------------------------------
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "1.4rem",
                color: "#1976D2",
                marginTop: "0.2rem",
                marginLeft: "1rem",
              }}
            >
              <Link href="tel:7011698878">
                <PhoneIcon style={{ fontSize: 35 }} />
              </Link>
              <span style={{ marginLeft: "1rem", color: "white" }}>
                +91 7011698878
              </span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "1.2rem",
                color: "#FFFFFF",
                marginLeft: "1rem",
              }}
            >
              <Link href="mailto:officialraghav20@gmail.com">
                <EmailIcon style={{ fontSize: 35 }} />
              </Link>
              <span style={{ marginLeft: "1rem" }}>
                officialraghav20@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutProject">
        <div className="about">
          <h3>
            <Link color="inherit" margin={2} fontSize={23} borderColor="green">
              ABOUT
            </Link>
          </h3>
          <div className="text">
            Hi! This is Raghav Arora. I&apos;m currently pursuing my B.Tech Degree
            (Pre-Final Year) in Information Technology from GGSIPU. I&apos;m an
            aspiring Frontend developer who loves to learn and create new things
            and a result-oriented professional willing to work as a software
            engineer in a globally reputed company.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <Button
              variant="contained"
              style={{ marginBottom: "8px" }}
              className="download"
            >
              <a href="https://drive.google.com/file/d/1-1aiiUcLVC8BS_mUBXaGCdAad9WqcRUH/view?usp=sharing" target="_new">
                {" "}
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="project">
          <h3>
            <Link color="inherit" margin={2} fontSize={23} borderColor="green">
              PROJECTS
            </Link>
          </h3>

          <div className="projectBox">
            <Box
              sx={{
                width: 250,
                height: 200,
                borderRadius: 3,
                backgroundColor: "#0F1115",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "15px",
              }}
            >
              <Image
                src={Insta}
                className="projectImage"
                height={160}
                width={250}
              />
              <Box
                sx={{
                  backgroundColor: "#0A0B0E",
                  borderColor: "blue",
                  height: "2.3rem",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    minWidth: "170px",
                    backgroundColor: "#701F7F",
                  }}
                >
                  Instagram Reels
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://github.com/Raghavarora27/Reels-next"
                    target="_new"
                  >
                    <GitHubIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://reels-next-weld.vercel.app/"
                    target="_new"
                  >
                    <SlideshowIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: 250,
                height: 200,
                borderRadius: 3,
                backgroundColor: "#0F1115",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "15px",
              }}
            >
              <Image
                src={Movies1}
                className="projectImage"
                height={160}
                width={250}
              />
              <Box
                sx={{
                  backgroundColor: "#0A0B0E",
                  borderColor: "blue",
                  height: "2.3rem",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    minWidth: "170px",
                    backgroundColor: "#701F7F",
                  }}
                >
                  Movies App
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://github.com/Raghavarora27/Movies-App"
                    target="_new"
                  >
                    <GitHubIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://movies-api-project.netlify.app/"
                    target="_new"
                  >
                    <SlideshowIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: 250,
                height: 200,
                borderRadius: 3,
                backgroundColor: "#0F1115",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "15px",
              }}
            >
              <Image
                src={wordHunt}
                className="projectImage"
                height={160}
                width={250}
              />
              <Box
                sx={{
                  backgroundColor: "#0A0B0E",
                  borderColor: "blue",
                  height: "2.3rem",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    minWidth: "170px",
                    backgroundColor: "#701F7F",
                  }}
                >
                  Word Hunt
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://github.com/Raghavarora27/Word-Hunt"
                    target="_new"
                  >
                    <GitHubIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link href="https://hunt-word.netlify.app/" target="_new">
                    <SlideshowIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: 250,
                height: 200,
                borderRadius: 3,
                backgroundColor: "#0F1115",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "15px",
              }}
            >
              <Image
                src={Sorting}
                className="projectImage"
                height={160}
                width={250}
              />
              <Box
                sx={{
                  backgroundColor: "#0A0B0E",
                  borderColor: "blue",
                  height: "2.3rem",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    minWidth: "175px",
                    backgroundColor: "#701F7F",
                    fontSize: "0.8rem",
                  }}
                >
                  Sorting Visualizer
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://github.com/Raghavarora27/Sorting_Visualizer"
                    target="_new"
                  >
                    <GitHubIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://raghavarora27.github.io/Sorting_Visualizer/"
                    target="_new"
                  >
                    <SlideshowIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: 250,
                height: 200,
                borderRadius: 3,
                backgroundColor: "#0F1115",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "15px",
              }}
            >
              <Image
                src={Jira}
                className="projectImage"
                height={160}
                width={250}
              />
              <Box
                sx={{
                  backgroundColor: "#0A0B0E",
                  borderColor: "blue",
                  height: "2.3rem",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    minWidth: "170px",
                    backgroundColor: "#701F7F",
                  }}
                >
                  Jira Clone
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://github.com/Raghavarora27/Jira-Ticket-Clone"
                    target="_new"
                  >
                    <GitHubIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://raghavarora27.github.io/Jira-Ticket-Clone/"
                    target="_new"
                  >
                    <SlideshowIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: 250,
                height: 200,
                borderRadius: 3,
                backgroundColor: "#0F1115",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "15px",
              }}
            >
              <Image
                src={Excel}
                className="projectImage"
                height={160}
                width={250}
              />
              <Box
                sx={{
                  backgroundColor: "#0A0B0E",
                  borderColor: "blue",
                  height: "2.3rem",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    minWidth: "170px",
                    backgroundColor: "#701F7F",
                  }}
                >
                  Excel Clone
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://github.com/Raghavarora27/Excel-Clone"
                    target="_new"
                  >
                    <GitHubIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://raghavarora27.github.io/Excel-Clone/"
                    target="_new"
                  >
                    <SlideshowIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: 250,
                height: 200,
                borderRadius: 3,
                backgroundColor: "#0F1115",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "15px",
              }}
            >
              <Image
                src={Camera}
                className="projectImage"
                height={160}
                width={250}
              />
              <Box
                sx={{
                  backgroundColor: "#0A0B0E",
                  borderColor: "blue",
                  height: "2.3rem",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    minWidth: "170px",
                    backgroundColor: "#701F7F",
                  }}
                >
                  Camera App
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://github.com/Raghavarora27/Camera-App"
                    target="_new"
                  >
                    <GitHubIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://raghavarora27.github.io/Camera-App/"
                    target="_new"
                  >
                    <SlideshowIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: 250,
                height: 200,
                borderRadius: 3,
                backgroundColor: "#0F1115",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                margin: "15px",
              }}
            >
              <Image
                src={Portfolio}
                className="projectImage"
                height={160}
                width={250}
              />
              <Box
                sx={{
                  backgroundColor: "#0A0B0E",
                  borderColor: "blue",
                  height: "2.3rem",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    minWidth: "170px",
                    backgroundColor: "#701F7F",
                  }}
                >
                  Portfolio
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://github.com/Raghavarora27/Reels-next"
                    target="_new"
                  >
                    <GitHubIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  style={{
                    minWidth: "30px",
                    border: "none",
                  }}
                >
                  <Link
                    href="https://reels-next-weld.vercel.app/"
                    target="_new"
                  >
                    <SlideshowIcon
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    />
                  </Link>
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
