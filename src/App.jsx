import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { AppStateProvider } from "./AppState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
