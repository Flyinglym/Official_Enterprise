import { createRoot } from 'react-dom/client'
import './main.scss'
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/index"

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
