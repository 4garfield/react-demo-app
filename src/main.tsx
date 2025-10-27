import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ZustandCounter from './ZustandCounter.tsx'
import InputForm from './InputForm.tsx';

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
  },
  {
    path: "/input-form",
    Component: InputForm,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
