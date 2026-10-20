import { useState } from 'react'
import Header from "./components/Header"
import Main from './components/Main'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import AppLayout from './components/AppLayout';

export default function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/watch",
          element: <WatchPage />
        }
      ]
    }
  ]);


  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  )
}
