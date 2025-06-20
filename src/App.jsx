import "./App.css";
import { Toaster } from "sonner";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

function App() {
  return (
    <>
      <Toaster expand position="top-center" />

      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
