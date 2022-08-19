import NextLink from "next/link";

import { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import { AuthContext, UiContext } from "../../context";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Logout, MenuOutlined, Person } from "@mui/icons-material";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  fontFamily: "Luckiest Guy",
  fontSize: "25px",
  fontWeight: "100",
}));

export const Navbar = () => {
  const { toggleSideMenu } = useContext(UiContext);
  const { user, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <AppBar>
      <Toolbar>
        <Box flex={1}></Box>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Div>
              <Box
                sx={{
                  color: "#ECF0F1",
                  fontSize: { xs: "15px", md: "25px" },
                  marginLeft: { lg: "-200px" },
                }}
              >
                Hugo Tamayo
              </Box>{" "}
            </Div>
            <Typography
              sx={{
                color: "#ECF0F1",
                fontSize: { xs: "15px", md: "20px" },
                fontFamily: "Poppins",
                marginLeft: { lg: "-20px" },
              }}
              ml={2}
            >
              | Web Developer
            </Typography>
          </Link>
        </NextLink>
        <Box flex={1}></Box>
        <Box
          flex={1}
          sx={{
            display: { xs: "none", md: "flex" },
            position: { lg: "fixed" },
            right: "80px",
            backgroundColor: "#221b79",
            borderRadius: "25px",
          }}
        >
          <NextLink href="#resumen" passHref>
            <Link display="flex" alignItems="center">
              <Typography
                sx={{
                  color: "#ECF0F1",
                  fontSize: { xs: "15px", md: "15px" },
                  fontFamily: "Poppins",
                }}
                ml={2}
              >
                Resumen
              </Typography>
            </Link>
          </NextLink>
          <NextLink href="#skills" passHref>
            <Link display="flex" alignItems="center">
              <Typography
                sx={{
                  color: "#ECF0F1",
                  fontSize: { xs: "15px", md: "15px" },
                  fontFamily: "Poppins",
                }}
                ml={2}
              >
                Stack
              </Typography>
            </Link>
          </NextLink>
          <NextLink href="#portafolio" passHref>
            <Link display="flex" alignItems="center">
              <Typography
                sx={{
                  color: "#ECF0F1",
                  fontSize: { xs: "15px", md: "15px" },
                  fontFamily: "Poppins",
                }}
                ml={2}
              >
                Portafolio
              </Typography>
            </Link>
          </NextLink>
          <NextLink href="#contacto" passHref>
            <Link display="flex" alignItems="center">
              <Typography
                sx={{
                  color: "#ECF0F1",
                  fontSize: { xs: "15px", md: "15px" },
                  fontFamily: "Poppins",
                }}
                ml={2}
              >
                Contácto
              </Typography>
            </Link>
          </NextLink>

          {isLoggedIn ? (
            <ListItem onClick={logout}>
              <Box display="flex" alignItems="center">
                <Typography
                  sx={{
                    color: "#ECF0F1",
                    fontSize: { xs: "15px", md: "15px" },
                    fontFamily: "Luckiest Guy",
                  }}
                  ml={2}
                >
                  {user?.name}
                </Typography>
              </Box>

              <Link
                display="flex"
                alignItems="center"
                sx={{ cursor: "pointer" }}
              >
                <Box ml={6}>
                  <IconButton
                    sx={{ color: "#ECF0F1", display: { xs: "flex" } }}
                  >
                    <Logout />
                  </IconButton>
                </Box>
                <Typography
                  sx={{
                    color: "#ECF0F1",
                    fontSize: { xs: "15px", md: "15px" },
                    fontFamily: "Poppins",
                  }}
                  ml={-1}
                >
                  Logout
                </Typography>
              </Link>
            </ListItem>
          ) : (
            <NextLink href="/auth/login" passHref>
              <Link display="flex" alignItems="center">
                <Box ml={6}>
                  <IconButton
                    sx={{ color: "#ECF0F1", display: { xs: "flex" } }}
                  >
                    <Person />
                  </IconButton>
                </Box>
                <Typography
                  sx={{
                    color: "#ECF0F1",
                    fontSize: { xs: "15px", md: "15px" },
                    fontFamily: "Poppins",
                    marginRight: "20px",
                  }}
                  ml={-1}
                >
                  Login
                </Typography>
              </Link>
            </NextLink>
          )}
        </Box>
        <Box flex={1}></Box>

        <Box flex={0}>
          <IconButton
            sx={{ color: "#ECF0F1", display: { xs: "flex", md: "none" } }}
            onClick={toggleSideMenu}
          >
            <MenuOutlined />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
