import { createBrowserRouter } from 'react-router-dom'

import App from "../pages/index";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    }
])