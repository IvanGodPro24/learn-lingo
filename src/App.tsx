import "./App.css";
import { Toaster } from "sonner";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoute from "./PrivateRoute";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { selectIsInitialized } from "./redux/auth/selectors";
import { selectTheme } from "./redux/theme/selectors";
import { useEffect } from "react";
import { current } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

function App() {
  const dispatch = useAppDispatch();

  const isInitialized = useAppSelector(selectIsInitialized);

  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    dispatch(current());
    document.body.className = "";
    document.body.classList.add(theme);
  }, [dispatch, theme]);

  return !isInitialized ? (
    <Loader />
  ) : (
    <>
      <Toaster expand position="top-center" />

      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route element={<PrivateRoute to="/" />}>
              <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
