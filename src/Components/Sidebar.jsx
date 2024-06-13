import {
  FeedOutlined,
  Home,
  SubscriptionsOutlined,
  VideoCameraBack,
} from "@mui/icons-material"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"

const Sidebar = () => {
  return (
    <Box
      component="aside"
      sx={{
        overflowY: "auto",
        display: { xs: "none", sm: "flex" },
        gridRow: "2 / 4",
        gridColumn: "1 / 2",
      }}
    >
      <List disablePadding sx={{ px: "0.5rem" }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                borderRadius: 3,
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "0",
                "& svg": {
                  fontSize: "1.65rem",
                },
              }}
            >
              <Home />
            </ListItemIcon>
            <ListItemText
              sx={{
                "&.MuiListItemText-root span": {
                  fontSize: "0.65rem",
                },
              }}
            >
              Home
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                borderRadius: 3,
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "0",
                "& svg": {
                  fontSize: "1.65rem",
                },
              }}
            >
              <VideoCameraBack />
            </ListItemIcon>
            <ListItemText
              sx={{
                "&.MuiListItemText-root span": {
                  fontSize: "0.65rem",
                },
              }}
            >
              Shorts
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                borderRadius: 3,
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "0",
                "& svg": {
                  fontSize: "1.65rem",
                },
              }}
            >
              <SubscriptionsOutlined />
            </ListItemIcon>
            <ListItemText
              sx={{
                "&.MuiListItemText-root span": {
                  fontSize: "0.65rem",
                },
              }}
            >
              Subs
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                borderRadius: 3,
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "0",
                "& svg": {
                  fontSize: "1.65rem",
                },
              }}
            >
              <FeedOutlined />
            </ListItemIcon>
            <ListItemText
              sx={{
                "&.MuiListItemText-root span": {
                  fontSize: "0.65rem",
                },
              }}
            >
              You
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar
