import { FC, useMemo } from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

import { IProject } from "../../interfaces";

interface Props {
  project: IProject;
}

export const PortafolioCard: FC<Props> = ({ project }) => {
  const productImage = useMemo(() => {
    return `/static/images/${project.image}`;
  }, [project.image]);

  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: {
          xs: "400px",
          sm: "350px",
          md: "350px",
          lg: "470px",
          xl: "400px",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="green iguana"
          image={productImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "Poppins" }}
          >
            {project.title}
          </Typography>
          {project.tags.map((tag) => (
            <span id="projects-tech" key={tag}>
              {tag}{" "}
            </span>
          ))}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "15px" }}
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" color="primary">
          <a href={`https://${project.web}`} rel="noreferrer" target="_blank">
            Ir a verla
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
