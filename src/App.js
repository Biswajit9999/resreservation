import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./Search/Search";
import MyBookings from "./MyBookings/MyBookings";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/my-bookings", element: <MyBookings /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;