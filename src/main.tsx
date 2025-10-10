import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ZustandCounter from './ZustandCounter.tsx'
import Posts from './tanstack/Posts.tsx'
import AddPost from './tanstack/AddPost.tsx'
import EditPost from './tanstack/EditPost.tsx'
import DeletePost from './tanstack/DeletePost.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const queryClient = new QueryClient()

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
    path:"/tanstack/posts",
    Component: Posts
  },
  {
    path:"/tanstack/add-post",
    Component: AddPost
  },
  {
    path:"/tanstack/edit-post",
    Component: EditPost
  },
  {
    path:"/tanstack/delete-post",
    Component: DeletePost
  }
]);

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
