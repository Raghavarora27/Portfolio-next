import React from "react";
import raghav from "../assets/raghav.jpg";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typical from "react-typical";
import Link from "next/link";

const HomePage = () => {
  return (
    <div
      style={{
        height: "78vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
      className="homepage"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <h1>
          Hi, I am <span className="name">RAGHAV ARORA</span>
        </h1>
        <span className="typewriter">
          {/* #383898 */}
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              " Frontend Developer",
              1000,
              " Designer",
              1000,
              " Programmer",
              1000,
              " Coder",
              1000,
            ]}
          />
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link href="/Contact">
            <Button
              variant="outlined"
              size="medium"
              // style={{ marginRight: "4rem", marginLeft: "3rem" }}
            >
              Hire me
            </Button>
          </Link>
          <Button variant="contained" size="medium">
            <a
              href=""
              target="_new"
            >
              Resume
            </a>
          </Button>
        </span>
      </div>
      <div className="image">
        <Image src={raghav} height={300} width={300} />
      </div>
    </div>
  );
};

export default HomePage;
