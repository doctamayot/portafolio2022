import { FC } from "react";
import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import { Zoom } from "react-slideshow-image";

import styles from "./ProductSlideshow.module.scss";
import "react-slideshow-image/dist/styles.css";
import { Box } from "@mui/material";

export const ProductSlideshow: FC = () => {
  const slideImages = [
    {
      url: "static/images/reactjs.png",
      caption: "Slide 1",
    },
    {
      url: "static/images/nodejs.webp",
      caption: "Slide 2",
    },
    {
      url: "static/images/nextjs.png",
      caption: "Slide 3",
    },
    {
      url: "static/images/express.webp",
      caption: "Slide 3",
    },
    {
      url: "static/images/mongo.png",
      caption: "Slide 3",
    },
  ];
  return (
    <Box
      sx={{
        width: { sm: "600px", xs: 400, md: "400px", lg: "480px" },

        margin: "00px auto",
      }}
    >
      <Zoom duration={1000} scale={0.4} arrows={false}>
        {slideImages.map((i, index) => (
          <div className={styles["each-slide"]} key={index}>
            <div
              style={{
                backgroundImage: `url(${i.url}`,
                backgroundSize: "contain",
              }}
            >
              {/* <span>{i.caption}</span> */}
            </div>
          </div>
        ))}
      </Zoom>
    </Box>
  );
};
