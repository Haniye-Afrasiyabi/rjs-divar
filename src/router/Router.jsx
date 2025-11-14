import { Route, Routes } from "react-router-dom";
import PageNotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/services/user";

function Router() {
  const queryKey = ["profile"];
  const queryFn = getProfile;
  const { data, isPending, error } = useQuery({ queryKey, queryFn });

  console.log({ data, isPending, error });
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
