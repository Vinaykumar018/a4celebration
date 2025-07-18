import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';  // <-- Add this import
import store from './redux/store.js';
import { CustomModalDataProvider } from './context/CustomModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Provide the store to all components */}
      <CustomModalDataProvider>
        <App />
      </CustomModalDataProvider>
    </Provider>
  </StrictMode>,
);
