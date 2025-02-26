import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Topbar from './Topbar';
import Default from './Default';
import Directory from './Directory';
import Profile from "./Profile";
import Feedback from "./Feedback";
import './Popup.css'

export const Popup = () => {
  return (
    <Router>
      <main>
        <Topbar />
        <Header />
        <hr className="divider" />
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
    </Router>
  )
}

export default Popup
