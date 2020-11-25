import React from "react";
import ReactDOM from "react-dom";
import { FormDataProvider } from "hooks/useFormData";
import App from "scenes/App";
import "styles/tailwind.output.css";

ReactDOM.render(
  <React.StrictMode>
    <FormDataProvider>
      <App />
    </FormDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
