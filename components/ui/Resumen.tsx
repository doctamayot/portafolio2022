import Image from "next/image";
import { Download } from "@mui/icons-material";
import { Box, Button, Chip, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import foto from "../../assets/about.jpg";
import NextLink from "next/link";

export const Resumen = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: { xs: "0px", sm: "20px", md: "200px", lg: "320px" },
      }}
      id="resumen"
    >
      <Grid container spacing={5}>
        <Grid item sm>
          <Item
            sx={{
              backgroundColor: "transparent",
            }}
          ></Item>
        </Grid>

        <Grid item xs={12} md={5}>
          <Item
            sx={{
              backgroundColor: "transparent",
              marginTop: {
                xs: "420px",
                sm: "0px",
                md: "80px",
                lg: "80px",
              },
              padding: { xs: "0px", sm: "0px", md: "0px" },
            }}
          >
            <Image src={foto} alt="Hugo tamayo" width={650} height={650} />
          </Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item
            sx={{
              backgroundColor: "transparent",
              marginTop: { xs: "-40px", sm: "0px", md: "0px" },
              textAlign: "center",
              padding: { xs: "10px", sm: "10px", md: "0px", xl: "80px" },
            }}
          >
            <Chip
              label="Acerca de mi"
              sx={{
                color: "#0c0c0c",

                fontFamily: "Poppins",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                color: "#0c0c0c",
                fontSize: { xs: "30px", md: "30px", lg: "40px" },
                fontFamily: "Luckiest Guy",
                textAlign: "center",
                // marginTop: { xl: "200px" },
              }}
              mt={2}
            >
              Desarrollador Web FullStack, Stack- MERN, residente en Bogotá,
              Colombia
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#0c0c0c",
                fontSize: { xs: "20px", md: "18px", lg: "20px" },
                fontFamily: "Poppins",
                fontWeight: "100",
                opacity: 0.7,
                padding: "20px",
                textAlign: { md: "start" },
              }}
              mt={2}
            >
              Soy desarrollador web, y soy muy apasionado y dedicado a mi
              trabajo; Con 4 años de experiencia como desarrollador web
              profesional, he adquirido las habilidades y conocimientos
              necesarios para que tu proyecto sea un éxito. Disfruto cada paso
              del proceso de desarrollo, desde la discusión y la colaboración.
              <br />
              Soy Ingeniero Industrial de profesion pero hace mas de 5 años
              empece a estudiar Desarrollo Web.
            </Typography>
            <Button
              variant="contained"
              startIcon={<Download />}
              sx={{
                padding: "10px 20px",
                marginTop: "10px",
                backgroundColor: "black",
                color: "#fff",
              }}
            >
              <a
                href="/static/images/cv.pdf"
                target="_blank"
                download="HugoTamayo"
              >
                Descargar CV
              </a>
            </Button>
          </Item>
        </Grid>

        <Grid item sm>
          <Item
            sx={{
              backgroundColor: "transparent",
            }}
          ></Item>
        </Grid>
      </Grid>
    </Box>
  );
};
