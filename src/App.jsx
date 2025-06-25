import "./App.css";
import { Toaster } from "sonner";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoute from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "./redux/auth/selectors";
import { useEffect } from "react";
import { current } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Toaster expand position="top-center" />

      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PrivateRoute to="/" />}>
              <Route path="/teachers" element={<TeachersPage />} />
            </Route>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
