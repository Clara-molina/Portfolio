// == Import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

// == Export
export default App;
