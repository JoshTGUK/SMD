import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet 
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Tools from './pages/Tools';
import Profile from './pages/Profile';
import PostDownloader from './pages/tools/PostDownloader';
import './styles/App.css';

// Layout component that includes the Navbar
const Layout = () => (
  <div className="app">
    <Navbar />
    <main className="content">
      <Outlet />
    </main>
  </div>
);

// Create router with future flags enabled
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/auth/register" element={<Auth />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/tools/downloader" element={<PostDownloader />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/pricing" element={<div>Pricing Page</div>} />
      <Route path="/about" element={<div>About Page</div>} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
