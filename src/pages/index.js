import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Cards from "./components/Cards";
import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import Header from "./components/Header";

export default function Home() {
  const matches = useMediaQuery("(min-width:1100px)");
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {/* <header>
        <div>
          <div className="headerContainer1">
            <h1>Gardini.dev</h1>
          </div>
        </div>
        <div className="headerContainer2">
          <a target="blank" href="https://www.google.com">
            <h3>My Work</h3>
          </a>
          <a target="_blank" href="https://www.google.com">
            <h3>About</h3>
          </a>
          <a target="_blank" href="https://www.google.com">
            <h3>Blog</h3>
          </a>
        </div>
      </header> */}
      <Grid2 container spacing={2} className="introduction">
        <Grid2
          size={{ xs: 12, md: 5 }}
          className="textContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" color="gray" sx={{}} className="Typography">
            Hi, my name is Gabriel Gardini
          </Typography>
          <Typography
            fontSize={matches ? 96 : 76}
            variant="h1"
            fontWeight={900}
            className="Typography"
          >
            I make dreams come true.
          </Typography>
          <Typography
            variant="body1"
            color="gray"
            className="Typography"
            dangerouslySetInnerHTML={{
              __html: `I am a frontend developer and content creator passionate about turning ideas into engaging digital experiences.`,
            }}
          ></Typography>

          <button>Start growing</button>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="imageContainer"
        >
          <img
            src="/photo.png"
            alt="Picture of the author"
            // width={562}
            // height={474}
            width={matches ? 618 : 309}
            height={matches ? 521 : 261}
          />
        </Grid2>
      </Grid2>
      <Cards />
      <Grid2 container spacing={2} className="introduction2">
        <Grid2
          size={{ xs: 12, md: 5 }}
          className="textContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <Typography
          id={"project"}
            fontSize={matches ? 60 : 50}
            variant="h1"
            fontWeight={900}
            className="Typography"
          >
            Tell me about your project
          </Typography>
          <Typography
          marginTop={6}
            variant="body1"
            color="gray"
            className="Typography"
            dangerouslySetInnerHTML={{
              __html: `After the inquiry, I will reply within 2-3 working days, with an approximate quote for the project or with questions for more details. After that, we can have an intro call to discuss your project and see if it's a match.`,
            }}
          ></Typography>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input placeholder="Your name" style={{ marginRight: 10 }}></input>
            <input placeholder="Your Email"></input>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              placeholder="Project type"
              style={{ marginRight: 10 }}
            ></input>
            <input placeholder="Your budget"></input>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <input
              style={{ height: 100 }}
              placeholder="Project details"
            ></input>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",

            }}
          >
            <button style={{backgroundColor:"rgb(241 251 155)"}}>Get in touch</button>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}
