import { Button, Grid2, Typography } from "@mui/material";
import Image from "next/image";

const Cards = () => {
  return (
    <>
      <div id="work" style={{ backgroundColor: "#f9f5f2" }}>
        <div className="cardsTitle">
          <Typography
            textAlign={"center"}
            fontFamily={"Archivo"}
            fontWeight={800}
            variant="body1"
            fontSize={56}
          >
            What can I do for you
          </Typography>
        </div>
        <Grid2 container spacing={1} className="cardsContainer">
          <Grid2 size={{ xs: 12, sm: 3 }} className="card">
            <Image
              src="/video.png"
              width={138}
              height={101}
              alt="card image"
            ></Image>
            <h1>Social Media Partnerships</h1>
            <p>
              I can help promote your brand or product through my social media
              platforms, reaching an engaged and targeted audience.
            </p>
            <p>
              From content creation to strategic posting, I work to deliver
              impactful campaigns tailored to your brand’s goals. Whether you’re
              launching a new product or building awareness, I’m here to help
              your business grow.
            </p>
            <h3>Lets collaborate →</h3>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 3 }} className="card">
            <Image
              src="/quadro.png"
              width={120}
              height={120}
              alt="card image"
            ></Image>
            <h1>Web & Mobile UX/UI Development</h1>
            <p>I can design your mobiule app, website or eCommerce store.</p>
            <p>
              For web & mobile apps, I work in Figma and handoff to your
              developer. In the case of personal or small business websites, I
              can also provide the development in Webflow or Framer.
            </p>
            <h3>              Lets collaborate →
            </h3>
          </Grid2>{" "}
          <Grid2 size={{ xs: 12, sm: 3 }} className="card">
            <Image
              src="/graph.png"
              width={138}
              height={101}
              alt="card image"
            ></Image>
            <h1>Social Media Growth Strategies</h1>
            <p>
              I can help your brand grow its social media presence by
              implementing advanced growth strategies tailored to your target
              audience.
            </p>
            <p>
              Through audience analysis, competitive benchmarking, and algorithm
              insights, I ensure your content reaches the right people at the
              right time.
            </p>
            <h3
            >
              Lets collaborate →
            </h3>
          </Grid2>
        </Grid2>
      </div>
    </>
  );
};
export default Cards;
