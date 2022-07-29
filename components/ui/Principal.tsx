import React from "react";

import { styled } from "@mui/material/styles";
import { Visibility } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";

import foto from "../../assets/principal.png";

export const Principal = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ flexGrow: 1, mt: "0px" }}>
      <Grid container spacing={5}>
        <Grid item sm>
          <Item
            sx={{
              backgroundColor: "transparent",
            }}
          ></Item>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Item
            sx={{
              height: { xs: "10px", sm: 500 },
              backgroundColor: "transparent",
              marginTop: {
                xs: "-0px",
                sm: "40px",
                md: "70px",
                lg: "150px",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#ECF0F1",
                fontSize: { xs: "30px", md: "40px", lg: "50px" },
                fontFamily: "Bungee Shade",
                fontWeight: "bold",
              }}
              mt={8}
            >
              HUGO TAMAYO ROJAS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#ECF0F1",
                fontSize: { xs: "30px", md: "40px" },
                fontFamily: "Luckiest Guy",
              }}
              mt={2}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Full Stack Developer")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Stack:  React & Node ")
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#ECF0F1",
                fontSize: { xs: "15px", md: "20px" },
                fontFamily: "Poppins",
              }}
              mt={2}
            >
              Bogotá, Colombia
            </Typography>
            <Button
              variant="outlined"
              startIcon={<Visibility />}
              sx={{ padding: "10px 20px", marginTop: "10px" }}
            >
              Portafolio
            </Button>
          </Item>
        </Grid>

        <Grid item xs>
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
