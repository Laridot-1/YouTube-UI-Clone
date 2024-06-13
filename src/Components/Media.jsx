import { Box, CardActionArea, CardMedia, Typography } from "@mui/material"
import { formatDuration } from "../utils/formatDuration"
import { useEffect, useRef, useState } from "react"

const Media = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current === null) return

    if (isPlaying) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isPlaying])

  return (
    <CardActionArea
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <CardMedia
        sx={{
          width: "100%",
          aspectRatio: "3/1.5",
          borderRadius: 2,
        }}
        image={video.thumbnailUrl}
      />
      <video
        ref={videoRef}
        src={video.videoUrl}
        muted
        playsInline
        style={{
          width: "100%",
          aspectRatio: "3/1.5",
          borderRadius: "0.5rem",
          objectFit: "cover",
          display: "flex",
          position: "absolute",
          inset: 0,
          zIndex: 4,
          opacity: isPlaying ? "1" : "0",
          transition: "opacity 0.35s",
        }}
      />
      <Box
        p="0.25rem"
        bgcolor="hsl(0 0% 0% / 0.5)"
        borderRadius={1}
        position="absolute"
        bottom={7}
        right={7}
      >
        <Typography lineHeight={1} fontSize="0.8rem">
          {formatDuration(video.duration)}
        </Typography>
      </Box>
    </CardActionArea>
  )
}
export default Media
