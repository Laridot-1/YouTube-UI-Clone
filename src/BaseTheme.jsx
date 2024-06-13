import { createContext, useContext, useEffect, useMemo, useState } from "react"

import App from "./App"

import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  colors,
} from "@mui/material"

const ThemeContext = createContext(null)

const useThemeContext = () => useContext(ThemeContext)

const BaseTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme")
    return savedMode ? savedMode : prefersDarkMode ? "dark" : "light"
  })

  const toggleMode = () =>
    setMode((prevMode) => (prevMode == "light" ? "dark" : "light"))

  const defaultTheme = useMemo(() => createTheme(), [])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          youtube: {
            red: "#FF0000",
          },
          mode,
          background: {
            default:
              mode === "dark"
                ? "#0F0F0F"
                : defaultTheme.palette.background.default,
          },
        },
      }),
    [mode]
  )

  useEffect(() => {
    localStorage.setItem("theme", mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={toggleMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { BaseTheme, useThemeContext }
