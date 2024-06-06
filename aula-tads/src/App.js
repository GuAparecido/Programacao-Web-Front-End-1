import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import ToDoList from "./pages/ToDoList";
import Profile from "./pages/Profile";

// import ToDoList from "./pages/ToDoList";
// import UseEffect from "./pages/UseEffect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todoList",
    element: <ToDoList />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/List",
    element: <List />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App;
