import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/index.css";
import App from "@/App";
import "@/styles/oldmoney.css";
import "@/styles/institutional.css";
import "@/styles/final.css";
import "@/styles/ribbons.css";
import "@/styles/megamenu-d.css";
import "@/styles/pagesystem.css";
import "@/styles/fullwidth.css";
import "@/styles/institutional-pages.css";
import "@/styles/privileges.css";
import "@/styles/nkbrand.css";
import "@/styles/hero-feature.css";
import "@/styles/spacing-v290.css";
import "@/styles/megamenu-acc.css";
import "@/styles/nav-font-v325.css";
import "@/styles/menu-columns-v327.css";
import "@/styles/nav-align-v361.css";
import "@/styles/mega-intro-v362.css";
import "@/styles/megamenu-family-v447.css";
import "@/styles/megamenu-burger-v455.css";
import "@/styles/mobile-menu-v465.css";
import "@/styles/mobile-pages-v469.css";
import "@/styles/menu-align-v470.css";
import "@/styles/hero-scale-v471.css";
import "@/styles/hero-player.css";
import "@/styles/menu-grow-v472.css";
import "@/styles/responsive-fix-v473.css";
import "@/styles/hero-fit.css";
import "@/styles/colors-v499.css";
import "@/styles/home-sections.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
