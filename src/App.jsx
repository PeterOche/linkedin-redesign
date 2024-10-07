import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { AppStateProvider } from "./AppState";
import Layout from "./layout/Layout";
import Network from "./pages/Network";
import Feed from "./pages/Feed";
import Jobs from "./pages/Jobs";
import Notices from "./pages/Notices";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "feed", element: <Feed /> },
      { path: "network", element: <Network /> },
      { path: "jobs", element: <Jobs /> },
      { path: "chat", element: <Chat /> },
      { path: "notices", element: <Notices /> },
    ],
  },
]);

function App() {
  return (
    <>
      <AppStateProvider>
        <RouterProvider router={router} />
      </AppStateProvider>
    </>
  );
}

export default App;
