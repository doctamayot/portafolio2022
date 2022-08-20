import { FC } from "react";

import { Zoom } from "react-slideshow-image";

import styles from "./ProductSlideshow.module.scss";
import "react-slideshow-image/dist/styles.css";
import { Box, Typography } from "@mui/material";
import { ITecnology } from "../../interfaces";

interface Props {
  tecnologies: ITecnology[];
}

const zoomOutProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,
};

export const ProductSlideshow: FC<Props> = ({ tecnologies }) => {
  function capitalizarPrimeraLetra(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Box
      sx={{
        width: { sm: "600px", xs: 400, md: "400px", lg: "480px" },

        margin: "00px auto",
      }}
    >
      <Zoom {...zoomOutProperties}>
        {tecnologies.map((i, index) => (
          <div className={styles["each-slide"]} key={index}>
            <div
              style={{
                backgroundImage: `url(/static/images/${i.images}`,
                backgroundSize: "contain",
              }}
            >
              <Typography
                sx={{
                  marginTop: { xs: "160px", sm: "200px" },
                  backgroundColor: "#fff",
                  padding: "5px",
                  fontFamily: "Poppins",
                  color: "#000",
                }}
              >
                {capitalizarPrimeraLetra(i.clase)}
              </Typography>
            </div>
          </div>
        ))}
      </Zoom>
    </Box>
  );
};
