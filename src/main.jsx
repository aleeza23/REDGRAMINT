import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import App from './App.jsx';
import './index.css';
import { WixProvider } from './context/wixContext.jsx';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <WixProvider>
        <App />
      </WixProvider>
    </AlertProvider>
  </StrictMode>,
);
