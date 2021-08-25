import Header from './components/Header';
import Card from './components/Card';
import Metas from './components/Metas';
import Portafolio from './components/Portafolio';
import Ahorro from './components/Ahorro';
import Noticias from './components/Noticias';
import Footer from './components/Footer';
import '../src/assets/global.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Metas />
      <Portafolio />
      <Ahorro />
      <Noticias />
      <Footer />
    </div>
  );
}

export default App;