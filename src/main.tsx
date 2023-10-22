import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { Loading } from './components/ui/loads/Loading/index.tsx';
import App from './App.tsx';
import './styles/index.scss';

// if (process.env.NODE_ENV === 'production') {
//   disableReactDevTools();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      {/* <AuthProvider> */}
        <Routes>
          <Route path={'/*'} element={<App />} />
        </Routes>
      {/* </AuthProvider> */}
    </Suspense>
  </BrowserRouter>
);