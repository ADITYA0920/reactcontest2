import React from 'react';
import ReactDOM from 'react-dom/client';
import ContectProvider from './Context/ContextProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ContectProvider> 
              <App />
          </ContectProvider>
 </React.StrictMode>
);