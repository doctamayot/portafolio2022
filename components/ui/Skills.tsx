import { styled } from "@mui/material/styles";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { ProductSlideshow } from "./ProductSlideShow";

export const Skills = () => {
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
        width: { lg: "80%" },
        backgroundColor: "#f9f9f9",
        flexGrow: 1,
        margin: { md: "150px auto", lg: "100px auto" },
      }}
    >
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={6} xl={4} mb={6}>
          <Item>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontFamily: "Luckiest Guy",
                color: "#000",
              }}
            >
              Tengo skills de Desarrollador Frontend y Backend
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Poppins",
                color: "#636060",
                marginTop: "40px",
              }}
            >
              La mayoria de mis proyectos en producción has sido como Freelance,
              pero tambien trabaje con una empresa mexicana en modo remoto como
              desarrolador FullStack
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} xl={5}>
          <Item>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Poppins",
                color: "#636060",
                marginTop: "0px",
              }}
            >
              Mi Stack:
            </Typography>
            <ProductSlideshow />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
