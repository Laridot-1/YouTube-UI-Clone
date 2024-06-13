import { ArrowBack, Mic, Search } from "@mui/icons-material"
import { IconButton, Stack, TextField, colors } from "@mui/material"

const Searchbar = ({ setIsSearchBarShown }) => {
  return (
    <Stack direction="row" gap={2} flex={1} alignItems="center">
      <IconButton
        sx={{ display: { xs: "inline-flex", sm: "none" } }}
        onClick={() => setIsSearchBarShown(false)}
      >
        <ArrowBack />
      </IconButton>
      <TextField
        sx={{
          flex: 1,
          ".MuiInputBase-root": {
            borderRadius: "100vmax",
          },
        }}
        size="small"
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <IconButton
              edge="end"
              sx={{
                "&.MuiIconButton-root": {
                  px: 2,
                  borderTopLeftRadius: 0,
                  bgcolor: colors.grey[800],
                  borderBottomLeftRadius: 0,
                  transform: "translateX(1px)",
                  borderTopRightRadius: "100vmax",
                  borderBottomRightRadius: "100vmax",
                },
              }}
            >
              <Search />
            </IconButton>
          ),
        }}
      />
      <IconButton
        sx={{
          bgcolor: colors.grey[800],
        }}
      >
        <Mic />
      </IconButton>
    </Stack>
  )
}
export default Searchbar
