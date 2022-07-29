import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Download } from "@mui/icons-material";
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Card,
} from "@mui/material";

export const Portafolio = () => {
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
        margin: {
          xs: "0px auto",
          sm: "20px auto",
          md: "50px auto",
          lg: "100px auto",
        },
        backgroundColor: "#f9f9f9",
        padding: { lg: "40px" },
        width: { lg: "80%" },
      }}
      id="resumen"
    >
      <Box sx={{ paddingTop: "30px" }}>
        <Typography
          variant="h5"
          sx={{
            backgroundColor: "rgba(0,0,0,.05)",
            color: "#333",
            fontSize: { xs: "14px", lg: "25px" },
            padding: "10px",
            margin: "0 auto",
            fontFamily: "Poppins",
            width: "30%",
            textAlign: "center",
          }}
        >
          Portafolio
        </Typography>
        <Typography
          variant="h5"
          sx={{
            backgroundColor: "transparent",
            color: "#333",
            fontSize: { xs: "17px", lg: "25px" },
            padding: "10px",
            margin: "0 auto",
            fontFamily: "Luckiest Guy",
            width: "100%",
            textAlign: "center",
          }}
        >
          Proyectos en Produccíon
        </Typography>
      </Box>

      <Grid container spacing={5} sx={{ backgroundColor: "#f9f9f9" }}>
        <Grid item xs={12} md={6} lg={3}>
          <Item
            sx={{
              backgroundColor: "#f9f9f9",
              marginTop: {
                xs: "0px",
                sm: "0px",
                md: "80px",
                lg: "30px",
              },
              padding: { xs: "20px", sm: "0 40px", lg: "0 10px" },
            }}
          >
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="green iguana"
                  image="/static/images/universal.png"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Universal Acting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plataforma E-Commerce de empresa de casting ubicada en
                    Miami.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" color="primary">
                  Ir a verla
                </Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item
            sx={{
              backgroundColor: "#f9f9f9",
              marginTop: {
                xs: "0px",
                sm: "0px",
                md: "80px",
                lg: "30px",
              },
              padding: { xs: "20px", sm: "0 40px", lg: "0 10px" },
            }}
          >
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="green iguana"
                  image="/static/images/universal.png"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Universal Acting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plataforma E-Commerce de empresa de casting ubicada en
                    Miami.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" color="primary">
                  Ir a verla
                </Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item
            sx={{
              backgroundColor: "#f9f9f9",
              marginTop: {
                xs: "0px",
                sm: "0px",
                md: "80px",
                lg: "30px",
              },
              padding: { xs: "20px", sm: "0 40px", lg: "0 10px" },
            }}
          >
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="green iguana"
                  image="/static/images/universal.png"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Universal Acting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plataforma E-Commerce de empresa de casting ubicada en
                    Miami.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" color="primary">
                  Ir a verla
                </Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item
            sx={{
              backgroundColor: "#f9f9f9",
              marginTop: {
                xs: "0px",
                sm: "0px",
                md: "80px",
                lg: "30px",
              },
              padding: { xs: "20px", sm: "0 40px", lg: "0 10px" },
            }}
          >
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="green iguana"
                  image="/static/images/universal.png"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Universal Acting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plataforma E-Commerce de empresa de casting ubicada en
                    Miami.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" color="primary">
                  Ir a verla
                </Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
