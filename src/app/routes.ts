import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { SubmissionForm } from "./pages/SubmissionForm";
import { TroubleshootingDashboard } from "./components/TroubleshootingDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "submit", Component: SubmissionForm },
    ],
  },
  {
    path: "/troubleshoot",
    Component: TroubleshootingDashboard,
  },
], {
  // Use hash-based routing for GitHub Pages compatibility
  // This ensures the app works correctly when served from a subdirectory
  basename: "/DevSampleWebsites/",
});