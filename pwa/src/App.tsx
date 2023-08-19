import DeliveryStatus from '@pages/DeliveryStatus'
import DeliveryTrack from '@pages/DeliveryTrack'
import Home from '@pages/Home'
import Messages from '@pages/Messages'
import NotFound from '@pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status/:trackingId" element={<DeliveryStatus />} />
        <Route path="/track" element={<DeliveryTrack />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
