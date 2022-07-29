import { Box, Grid, Typography, Paper } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ backgroundColor: "#000", mt: "50px" }}>
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
              }}
            >
              Hugo Tamayo ©
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
              <Facebook sx={{ marginRight: "20px" }} />
              <Twitter sx={{ marginRight: "20px" }} />
              <Instagram sx={{ marginRight: "0px" }} />
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
