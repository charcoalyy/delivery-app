import DeliveryStatus from '@pages/DeliveryStatus'
import DeliveryTrack from '@pages/DeliveryTrack'
import Home from '@pages/Home'
import Messages from '@pages/Messages'
import Marker from '@pages/Marker'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status" element={<DeliveryStatus />} />
        <Route path="/track" element={<DeliveryTrack />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<Marker />} />
      </Routes>
    </Router>
  )
}

export default App
