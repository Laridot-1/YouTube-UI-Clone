import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import FeedPosts from "./Components/FeedPosts"
import { useAppContext } from "./Context"
import {
  History,
  HomeRounded,
  Menu,
  PlaylistPlayOutlined,
  SubscriptionsOutlined,
  ThumbUpOutlined,
  VideoCameraBackOutlined,
  WatchLaterOutlined,
  YouTube,
} from "@mui/icons-material"

const App = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useAppContext()
  const theme = useTheme()

  const commonStyles = {
    width: "90%",
    ".MuiButtonBase-root": {
      gap: 3.5,
      borderRadius: 2,
    },
    ".MuiListItemText-root span": {
      fontSize: "0.9rem",
    },
    ".MuiListItemIcon-root": {
      minWidth: 0,
    },
  }

  return (
    <Container
      maxWidth="false"
      sx={{
        rowGap: 2,
        height: "100svh",
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "auto 1fr 1fr",
        gridTemplateColumns: "auto 1fr 1fr",
      }}
      disableGutters
    >
      <Header />
      <Sidebar />
      <FeedPosts />
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          ".MuiPaper-root": {
            bgcolor: "#0F0F0F",
            backgroundImage: "none",
          },
        }}
      >
        <Stack width={235}>
          <Stack
            gap={{ xs: 1, sm: 2 }}
            py={1}
            px={2}
            direction="row"
            alignItems="center"
          >
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <Menu />
            </IconButton>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <YouTube
                sx={{ color: theme.palette.youtube.red, fontSize: 30 }}
              />
              <Typography
                fontSize={18.5}
                fontWeight={600}
                letterSpacing={0}
                sx={{ userSelect: "none" }}
              >
                YouTube
              </Typography>
            </Stack>
          </Stack>
          <Box>
            <List sx={{ px: 1 }}>
              <ListItem disablePadding sx={{ ...commonStyles }}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeRounded />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ...commonStyles }}>
                <ListItemButton>
                  <ListItemIcon>
                    <VideoCameraBackOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Shorts" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ...commonStyles }}>
                <ListItemButton>
                  <ListItemIcon>
                    <SubscriptionsOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Subscriptions" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List sx={{ px: 1 }}>
              <ListItem disablePadding sx={{ ...commonStyles }}>
                <ListItemButton>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText primary="History" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ...commonStyles }}>
                <ListItemButton>
                  <ListItemIcon>
                    <PlaylistPlayOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Playlists" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ...commonStyles }}>
                <ListItemButton>
                  <ListItemIcon>
                    <WatchLaterOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Watch later" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ...commonStyles }}>
                <ListItemButton>
                  <ListItemIcon>
                    <ThumbUpOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Liked videos" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Drawer>
    </Container>
  )
}

export default App
