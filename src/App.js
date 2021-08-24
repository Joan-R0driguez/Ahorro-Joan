import Header from './components/Header';
import Card from './components/Card';
import Metas from './components/Metas';
import Portafolio from './components/Portafolio';
import '../src/assets/global.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Metas />
      <Portafolio />
    </div>
  );
}

export default App;