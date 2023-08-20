import DeliveryStatus from '@pages/DeliveryStatus'
import DeliveryTrack from '@pages/DeliveryTrack'
import Home from '@pages/Home'
import Messages from '@pages/Messages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SessionStart from '@pages/SessionStart'
import Default from '@pages/Default'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/home" element={<Home />} />
        <Route path="/status" element={<DeliveryStatus />} />
        <Route path="/track" element={<DeliveryTrack />} />
        <Route path="/map" element={<DeliveryTrack />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/session" element={<SessionStart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
