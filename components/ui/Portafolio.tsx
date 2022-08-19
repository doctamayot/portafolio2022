import { useProjects } from "../../hooks";
import { FullScreenLoading } from "./FullScreenLoading";
import { useRouter } from "next/router";
import { FC } from "react";
import { styled } from "@mui/material/styles";

import { Box, Typography, Grid, Paper } from "@mui/material";
import { PortafolioCard } from "./PortafolioCard";
import { IProject } from "../../interfaces";

interface Props {
  project: IProject[];
}

export const Portafolio: FC<Props> = () => {
  const { projects, isLoading } = useProjects("/projects");
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
      id="portafolio"
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
        {isLoading ? (
          <FullScreenLoading />
        ) : (
          projects.map((project: any) => (
            <Grid item xs={12} md={6} lg={3} key={project.slug}>
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
                <PortafolioCard project={project} />
              </Item>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};
