
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Dashboard from './screens/Dashboard';
import PageLogin from './screens/PageLogin';
import PageSignup from './screens/PageSignup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLogin />} />
      <Route path='/signup' element={<PageSignup />} />
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
