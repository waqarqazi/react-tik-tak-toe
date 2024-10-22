import React, { useState } from 'react';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
import { RouteType } from '../../routes/config';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from './SidebarItem';
import { useSelector } from 'react-redux';
import { ReactComponent as Intel } from 'assets/sideIcons/intel.svg';
import PermissionRestrict from 'hoc/PermissionRestrict';
import { ROLES } from 'permissions/constants';

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);

  // const { appState } = useSelector((state) => state.appState);

  // useEffect(() => {
  //   if (appState.includes(item.state)) {
  //     setOpen(true);
  //   }
  // }, [appState, item]);

  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          '&: hover': {
            backgroundColor: colorConfigs.sidebar.hoverBg,
            '& .MuiListItemText-root': {
              color: '#fff',
            },
            '& .MuiSvgIcon-root': {
              color: '#fff',
            },
            '& .sidebar-item': {
              color: 'green',
            },
            '& .svgIcon': {
              fill: '#fff',
            },
          },
          paddingY: '12px',
          paddingX: '24px',
        }}
      >
        <ListItemIcon
          sx={{
            color: colorConfigs.sidebar.color,
            minWidth: '35px',
          }}
        >
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>

        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <>
                  <SidebarItem item={route} key={index} />
                  {/* {console.log("route", route?.sidebarProps?.displayText)}
                  {route?.sidebarProps?.displayText === "Create" ? (
                    <PermissionRestrict roles={[ROLES.PLAN_CREATE]}>
                      <SidebarItem item={route} key={index} />
                    </PermissionRestrict>
                  ) : route?.sidebarProps?.displayText === "Amend" ? (
                    <PermissionRestrict roles={[ROLES.PLAN_AMEND]}>
                      <SidebarItem item={route} key={index} />
                    </PermissionRestrict>
                  ) : route?.sidebarProps?.displayText === "View" ? (
                    <PermissionRestrict roles={[ROLES.PLAN_VIEW]}>
                      <SidebarItem item={route} key={index} />
                    </PermissionRestrict>
                  ) : route?.sidebarProps?.displayText === "Approve" ? (
                    <PermissionRestrict roles={[ROLES.PLAN_APPROVE]}>
                      <SidebarItem item={route} key={index} />
                    </PermissionRestrict>
                  ) : route?.sidebarProps?.displayText === "Notifications" ? (
                    <PermissionRestrict roles={[ROLES.PLAN_NOTIFICATION]}>
                      <SidebarItem item={route} key={index} />
                    </PermissionRestrict>
                  ) : route?.sidebarProps?.displayText === "Permissions" ? (
                    <PermissionRestrict roles={[ROLES.PLAN_PERMISSION]}>
                      <SidebarItem item={route} key={index} />
                    </PermissionRestrict>
                  ) : (
                    <SidebarItem item={route} key={index} />
                  )} */}
                </>
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
