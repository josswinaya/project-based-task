import { Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/jonathan'

function App() {
  return (
    <Routes>
      <Route path="/jonathan-winner-naya" element={<ProfilePage />} />
    </Routes>
  )
}

export default App