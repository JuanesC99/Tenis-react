import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/card/Card.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Video from './components/component-video/video.jsx';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Error from './components/404/404.jsx'
import Nike from './components/nike-mujer/Nike-mujer.jsx';
import Checkout from './components/Checkout/checkout.jsx'
import NikePegasus from './components/nike pegasus/nike-pegasus.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/" element={<Video />} />
        <Route path="/404" element={<Error />}/>
        <Route path="/Nike" element={<Card />}/>
        <Route path="/nike-mujer" element={<Nike />} />
        <Route path='/nike-pegasus' element={<NikePegasus/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
