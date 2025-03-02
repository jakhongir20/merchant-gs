import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "@/app/routes";
import { Providers } from "@/app/providers";
import "@/app/style/index.css";
import "./i18n";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>,
);
