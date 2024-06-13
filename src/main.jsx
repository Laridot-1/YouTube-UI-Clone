import REACTDOM from "react-dom/client"
import { BaseTheme } from "./BaseTheme"
import { Context } from "./Context"

const node = document.querySelector("#root")
REACTDOM.createRoot(node).render(
  <Context>
    <BaseTheme />
  </Context>
)
