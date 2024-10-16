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
import SortModalProvider from "./context/SortModalContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="students"
        element={
          <SortModalProvider>
            <SortDropdownProvider>
              <StudentsPage />
            </SortDropdownProvider>
          </SortModalProvider>
        }
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
