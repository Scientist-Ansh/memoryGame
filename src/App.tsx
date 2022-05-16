import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Pages/Game';

import Home from './Pages/Home';
import Instructions from './Pages/Instructions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}
export default App;
