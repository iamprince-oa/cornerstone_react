import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/contact.css";
import "./styles/thankyou.css";
import "./styles/footer.css";
import "./styles/cta.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
