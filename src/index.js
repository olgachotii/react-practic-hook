import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';
import AuthProvider from './components/contexts/auth/Provider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
