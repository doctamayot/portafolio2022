import { styled } from "@mui/material/styles";
import { Grid, Box, Paper, Typography, Button, Link } from "@mui/material";
import { ProductSlideshow } from "./ProductSlideShow";
import { useTecnologies } from "../../hooks";
import { FullScreenLoading } from "./FullScreenLoading";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

export const Skills: FC = () => {
  const { tecnologies, isLoading } = useTecnologies("/tecnologies");
  const { asPath } = useRouter();
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
      id="skills"
    >
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={6} xl={4} mb={6}>
          <Item sx={{ backgroundColor: "#f9f9f9" }}>
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
              La mayoria de mis proyectos en producción han sido como Freelance,
              pero tambien he trabajado con empresas de tecnología en modo
              remoto como desarrollador FullStack
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} xl={5}>
          <Item sx={{ backgroundColor: "#f9f9f9" }}>
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
            <Box>
              <NextLink href="/categoryskills/frontend#skills" passHref>
                <Link>
                  <Button
                    sx={{ margin: 2 }}
                    color={
                      asPath === "/categoryskills/frontend" ? "primary" : "info"
                    }
                  >
                    Frontend
                  </Button>
                </Link>
              </NextLink>
              <NextLink href="/categoryskills/backend#skills" passHref>
                <Link>
                  <Button
                    color={
                      asPath === "/categoryskills/backend" ? "primary" : "info"
                    }
                  >
                    Backend
                  </Button>
                </Link>
              </NextLink>

              <NextLink href="/categoryskills/services#skills" passHref>
                <Link>
                  <Button
                    sx={{ margin: 2 }}
                    color={
                      asPath === "/categoryskills/services" ? "primary" : "info"
                    }
                  >
                    Servicios
                  </Button>
                </Link>
              </NextLink>
            </Box>
            {isLoading ? (
              <FullScreenLoading />
            ) : (
              <ProductSlideshow tecnologies={tecnologies} />
            )}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
