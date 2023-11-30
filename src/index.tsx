import {App} from "app/App"
import {BrowserRouter} from "react-router-dom"
import {createRoot} from "react-dom/client"

const container = document.getElementById("root")

const root = createRoot(container as HTMLElement)
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
