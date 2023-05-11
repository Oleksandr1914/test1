import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { NotesProvider } from "./notesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotesProvider>
  </React.StrictMode>
);
