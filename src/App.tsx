import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./ui/dashboard/dashboard";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Dashboard />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
