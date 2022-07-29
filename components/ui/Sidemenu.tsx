import { useContext, useState } from "react";
import { UiContext } from "../../context";
import { useRouter } from "next/router";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AccountCircleOutlined,
  FolderCopy,
  Home,
  PermPhoneMsg,
  StackedBarChart,
} from "@mui/icons-material";

export const Sidemenu = () => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

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
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <StackedBarChart />
            </ListItemIcon>
            <ListItemText primary={"Stack"} />
          </ListItem>
        </List>
        <ListItem button>
          <ListItemIcon>
            <FolderCopy />
          </ListItemIcon>
          <ListItemText primary={"Portafolio"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PermPhoneMsg />
          </ListItemIcon>
          <ListItemText primary={"Contácto"} />
        </ListItem>
      </Box>
    </Drawer>
  );
};
