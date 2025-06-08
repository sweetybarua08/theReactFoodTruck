import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Card';

const foodTrucks = [
  {
    image: 'https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg',
    title: 'Birria-Landia',
    cuisine: 'Mexican',
    link: 'https://thebirrialandia.com/menu/',
  },


];

const App = () => {

  return (
    <div className="App">
      <Header />
      <Card />
      
    </div>
  )
}

export default App