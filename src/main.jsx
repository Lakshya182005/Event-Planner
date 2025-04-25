import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { EventProvider } from "./Data.jsx";
import { ProposeProvider } from "./Proposed.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventProvider>
      <ProposeProvider>
        <App />
      </ProposeProvider>
    </EventProvider>
  </StrictMode>
);
