import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Jonathan from './pages/jonathan';
// import Juna from './pages/Juna.jsx';

function App() {
  return (  
      <Routes>
        {/* Ini alamat utama (tampil profilmu) */}
        <Route path="/" element={<Home />} />

        {/* Ini alamat khusus joshua */}
        <Route path="/joshua-winner-naya" element={<Home />} />

        {/* Ini alamat khusus jonathan */}
        <Route path="/jonathan-winner-naya" element={<Jonathan />} /> 

        {/* Ini alamat khusus juna */}
        {/* <Route path="/dede-juna" element={<Juna />} /> */}
      </Routes>
  );
}

export default App;
