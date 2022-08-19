import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import NextLink from "next/link";
import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

export const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ backgroundColor: "#000", mt: "50px" }} id="contacto">
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6}>
          <Item
            sx={{
              backgroundColor: "transparent",
              border: "1ps solid white",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              color="#fff"
              sx={{
                fontFamily: "Luckiest Guy",
                marginTop: "-5px",
                fontSize: "30px",
              }}
            >
              Hugo Tamayo | Web Developer ©
            </Typography>
          </Item>
        </Grid>
        <Grid item md={6}>
          <Item
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <Typography
              variant="h6"
              component="span"
              color="#fff"
              sx={{ fontFamily: "Luckiest Guy" }}
            >
              <a
                href="https://github.com/doctamayot/"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub sx={{ marginRight: "20px", fontSize: "90px" }} />
              </a>

              <a
                href="https://www.linkedin.com/in/hugo-tamayo-8126b791/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedIn sx={{ marginRight: "20px", fontSize: "90px" }} />
              </a>
              <a
                href="https://www.facebook.com/hugo.tamayo/"
                rel="noreferrer"
                target="_blank"
              >
                <Facebook sx={{ marginRight: "20px", fontSize: "90px" }} />
              </a>
              <a
                href="https://twitter.com/doctamayot"
                rel="noreferrer"
                target="_blank"
              >
                <Twitter sx={{ marginRight: "20px", fontSize: "90px" }} />
              </a>
              <a
                href="https://www.instagram.com/doctamayot/"
                rel="noreferrer"
                target="_blank"
              >
                <Instagram sx={{ marginRight: "0px", fontSize: "90px" }} />
              </a>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
