import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
          color: colorConfigs.sidebar.hoverSubmenu,
        },
        backgroundColor: colorConfigs.sidebar.hoverBg,
        color: colorConfigs.sidebar.hoverSubmenu,
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.color,
          backgroundColor: colorConfigs.sidebar.activeBg,
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
