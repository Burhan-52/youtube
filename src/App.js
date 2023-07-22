import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import store from './utils/store/store'
import { Provider } from "react-redux"
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import SearchVedioRes from './components/SearchVedioRes'
import LiveVideoStream from './components/LiveVideoStream'
import React from 'react'

export let appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "results",
        element: < SearchVedioRes/>
    },
      {
        path: "live",
        element: < LiveVideoStream/>
    },
    ]
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Header /> */}
        <RouterProvider router={appRoutes} />
      </Provider>
    </>
  );
}

export default App;
