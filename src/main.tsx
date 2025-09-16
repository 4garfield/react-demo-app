import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ZustandCounter from './ZustandCounter.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path:"/zustand",
    Component: ZustandCounter
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
