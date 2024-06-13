import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import {
  Menu,
  NotificationsOutlined,
  Search,
  Upload,
  YouTube,
} from "@mui/icons-material"
import Searchbar from "./Searchbar"
import { useState } from "react"
import { useAppContext } from "../Context"

const Header = () => {
  const theme = useTheme()
  const smUp = useMediaQuery("(min-width: 600px)")
  const [isSearchBarShown, setIsSearchBarShown] = useState(false)
  const { setIsDrawerOpen } = useAppContext()

  return isSearchBarShown && !smUp ? (
    <Box
      pt={1}
      px={2}
      display={{ sm: "none" }}
      sx={{
        gridRow: "1 / 2",
        gridColumn: "1 / 4",
      }}
    >
      <Searchbar setIsSearchBarShown={setIsSearchBarShown} />
    </Box>
  ) : (
    <Box
      pt={1}
      px={{ xs: 1, sm: 2 }}
      gap={{ xs: 2, sm: 4 }}
      display="flex"
      component="header"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        gridRow: "1 / 2",
        gridColumn: "1 / 4",
      }}
    >
      <Stack gap={{ xs: 1, sm: 2 }} direction="row" alignItems="center">
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <Menu />
        </IconButton>
        <Stack direction="row" alignItems="center" sx={{ cursor: "pointer" }}>
          <YouTube sx={{ color: theme.palette.youtube.red, fontSize: 30 }} />
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
      <Box sx={{ display: { xs: "none", sm: "flex" }, flex: 1, maxWidth: 600 }}>
        <Searchbar />
      </Box>
      <Stack direction="row" alignItems="center">
        <Box display={{ xs: "flex", sm: "none" }}>
          <IconButton onClick={() => setIsSearchBarShown(true)}>
            <Search />
          </IconButton>
        </Box>
        <IconButton sx={{ display: { xs: "none", sm: "inline-flex" } }}>
          <Upload />
        </IconButton>
        <IconButton>
          <Badge
            badgeContent={10}
            max={9}
            sx={{
              ".MuiBadge-badge": {
                backgroundColor: "#CC0000",
              },
            }}
          >
            <NotificationsOutlined />
          </Badge>
        </IconButton>
        <Avatar
          sx={{
            ml: "7px",
            color: "#fff",
            width: "25px",
            height: "25px",
            cursor: "pointer",
            bgcolor: "#00887A",
            "&.MuiAvatar-root": {
              fontSize: "1rem",
            },
          }}
        >
          B
        </Avatar>
      </Stack>
    </Box>
  )
}

export default Header
