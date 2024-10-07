import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RootLayout from "./layout/RootLayout";
import StudentsPage from "./pages/students-page";
import SortDropdownProvider from "./context/SortDropDownContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="students"
        element={
          <SortDropdownProvider>
            <StudentsPage />
          </SortDropdownProvider>
        }
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
