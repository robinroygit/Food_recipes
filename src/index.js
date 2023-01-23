
import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseProvider } from "./firebase";


ReactDOM.createRoot(document.getElementById("root")).render(
            //     <React.StrictMode>
            <FirebaseProvider>

                      <App/>
            </FirebaseProvider>
            //   </React.StrictMode>
);


reportWebVitals();