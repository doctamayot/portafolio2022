import { useContext } from "react";
import { AuthContext, UiContext } from "../../context";
import { useRouter } from "next/router";
import {
  Box,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  AccountBox,
  AccountCircleOutlined,
  FolderCopy,
  Home,
  PermPhoneMsg,
} from "@mui/icons-material";

export const Sidemenu = () => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  const { user, isLoggedIn, logout } = useContext(AuthContext);

  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.replace(url);
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", tansition: "all 0.5s ease-aout" }}
      onClose={toggleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        {isLoggedIn ? (
          <Box display="flex" flexDirection="column" alignItems="center">
            <ListItem button onClick={() => navigateTo("/#resumen")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <Typography
                  sx={{
                    color: "#070707",
                    fontSize: { xs: "15px", md: "15px" },
                    fontFamily: "Luckiest Guy",
                  }}
                >
                  {user?.name}
                </Typography>
              </Box>
            </ListItem>

            <ListItem button onClick={() => navigateTo("/#resumen")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Resumen"} />
              </Box>
            </ListItem>

            <ListItem button onClick={() => navigateTo("/#skills")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Skills"} />
              </Box>
            </ListItem>

            <ListItem button onClick={() => navigateTo("/#portafolio")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <FolderCopy />
                </ListItemIcon>
                <ListItemText primary={"Portafolio"} />
              </Box>
            </ListItem>

            <ListItem button onClick={() => navigateTo("/#contacto")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <PermPhoneMsg />
                </ListItemIcon>
                <ListItemText primary={"Contácto"} />
              </Box>
            </ListItem>
            <ListItem onClick={logout}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <Typography
                  sx={{
                    color: "#070707",
                    fontSize: { xs: "15px", md: "15px" },
                    fontFamily: "Luckiest Guy",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </Typography>
              </Box>
            </ListItem>
          </Box>
        ) : (
          <Box>
            <ListItem button onClick={() => navigateTo("/auth/login")}>
              <ListItemIcon>
                <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItem>
            <ListItem button onClick={() => navigateTo("/#resumen")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Resumen"} />
              </Box>
            </ListItem>

            <ListItem button onClick={() => navigateTo("/#skills")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Skills"} />
              </Box>
            </ListItem>

            <ListItem button onClick={() => navigateTo("/#portafolio")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <FolderCopy />
                </ListItemIcon>
                <ListItemText primary={"Portafolio"} />
              </Box>
            </ListItem>

            <ListItem button onClick={() => navigateTo("/#contacto")}>
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                  <PermPhoneMsg />
                </ListItemIcon>
                <ListItemText primary={"Contácto"} />
              </Box>
            </ListItem>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};
