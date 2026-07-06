import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectThemePage } from "../pages/ProjectThemePage";
import { Header } from "../components/Header";
import { I18nProvider } from "../context/I18nContext";
import { InteractiveBackground } from "../components/InteractiveBackground";
import { AIChatBot } from "../components/AIChatBot";

export function AppRoutes() {
  return (
    <I18nProvider>
      <InteractiveBackground />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/themes/:themeSlug" element={<ProjectThemePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <AIChatBot />
    </I18nProvider>
  );
}
