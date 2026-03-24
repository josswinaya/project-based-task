import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Catatan: Kalau nanti jonathan dan juna sudah buat file Rifqi.jsx, tinggal di-import di sini
import jonathan from './pages/jonathan.jsx';
// import Juna from './pages/Juna.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ini alamat utama (tampil profilmu) */}
        <Route path="/" element={<Home />} />

        {/* Ini alamat khusus sesuai namamu */}
        <Route path="/joshua-winner-naya" element={<Home />} />

        {/* Nanti temanmu tinggal ditambah di bawah sini: */}
        {<Route path="/jonathan-winner" element={<jonathan />} />}
      </Routes>
    </Router>
  );
}

export default App;