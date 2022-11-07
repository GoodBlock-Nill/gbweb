import { Route, Routes } from 'react-router-dom';
import Layout from './components/Common/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
