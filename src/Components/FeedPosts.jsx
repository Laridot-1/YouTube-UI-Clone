import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Tab,
  Tabs,
  Typography,
  colors,
} from "@mui/material"
import { useState } from "react"
import { videos } from "../data"
import { formatTimeAgo } from "../utils/formatTimeago"
import Media from "./Media"

const categories = [
  "All",
  "JavaScript",
  "Live",
  "Computer Science",
  "Chord Progressions",
  "Gaming",
  "Music",
  "Artificial Intelligence",
  "Firebase",
  "Cloud Computing",
  "Cyber Security",
  "Gadgets",
  "Watched",
]

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })

const FeedPosts = () => {
  const [val, setVal] = useState(0)

  const handleChange = (_, newVal) => setVal(newVal)

  return (
    <Stack
      gap={2}
      sx={{
        gridRow: "2 / 4",
        gridColumn: "2 / 4",
      }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={val}
        onChange={handleChange}
        sx={{
          minHeight: 0,
          "& .MuiTabs-indicator": {
            display: "none",
          },
          "& .MuiTabs-flexContainer": {
            gap: 1.5,
          },
          flexShrink: 0,
        }}
      >
        {categories.map((category, i) => {
          return (
            <Tab
              key={i}
              label={category}
              sx={{
                "&.MuiButtonBase-root": {
                  minWidth: 0,
                  minHeight: 0,
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  borderRadius: "0.35rem",
                  padding: "0.45rem 0.8rem",
                  bgcolor: colors.grey[800],
                  textTransform: "capitalize",
                  "&.Mui-selected": {
                    color: colors.grey[900],
                    bgcolor: colors.grey[100],
                  },
                },
              }}
            />
          )
        })}
      </Tabs>
      <Box
        component="section"
        gap={3}
        px={2}
        pb={2}
        overflow="auto"
        display="grid"
        justifyContent="center"
        alignContent="start"
        gridTemplateColumns="repeat(auto-fill, minmax(min(270px, 100%), 450px))"
      >
        {videos.map((video) => {
          return (
            <Card
              sx={{
                background: "transparent",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                gap: 1.75,
                height: "min-content",
              }}
              key={video.id}
            >
              <Media video={video} />
              <CardContent
                sx={{
                  padding: 0,
                  "&:last-child": {
                    padding: 0,
                  },
                  display: "flex",
                  gap: 2,
                  alignItems: "start",
                  cursor: "pointer",
                }}
              >
                <Avatar src={video.channel.profileUrl} />
                <Stack>
                  <Typography
                    variant="h6"
                    fontSize="0.9rem"
                    fontWeight="500"
                    lineHeight={1.25}
                  >
                    {video.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={colors.grey[500]}
                    fontSize="0.8rem"
                  >
                    {video.channel.name}
                  </Typography>
                  <Box
                    display="flex"
                    gap={0.75}
                    flexWrap="wrap"
                    alignItems="center"
                  >
                    <Typography
                      variant="body2"
                      color={colors.grey[400]}
                      fontSize="0.8rem"
                    >
                      {VIEW_FORMATTER.format(video.views)} views
                    </Typography>
                    <Typography color={colors.grey[400]}>•</Typography>
                    <Typography
                      variant="body2"
                      color={colors.grey[400]}
                      fontSize="0.8rem"
                    >
                      {formatTimeAgo(video.postedAt)}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          )
        })}
      </Box>
    </Stack>
  )
}

export default FeedPosts
