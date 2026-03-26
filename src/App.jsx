import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profijuna from './pages/profijuna';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dede-juna" replace />} />

        <Route path="/dede-juna" element={<Profijuna />} />

        <Route path="*" element={<Navigate to="/dede-junawan" replace />} />
      </Routes>
    </Router>
  );
}

export default App;