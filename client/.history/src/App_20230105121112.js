import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/nav/Menu.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';

export default function App ()
{
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

