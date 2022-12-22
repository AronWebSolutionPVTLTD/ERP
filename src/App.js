
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Dashboard from './screens/Dashboard';
import PageLogin from './screens/PageLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLogin />} />
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
