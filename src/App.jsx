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
import Profile from "./pages/Profile";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 800,
});

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Profile /> },
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
      <div className="bg-[#f7f9fb] min-h-screen">
        <AppStateProvider>
          <RouterProvider router={router} />
        </AppStateProvider>
      </div>
    </>
  );
}

export default App;
