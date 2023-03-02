import 'bootstrap/dist/css/bootstrap.min.css';
import Bala from './Components/Bala';
import './App.scss';
import Tvenkinys from './Components/Tvenkinys';
import Jura from './Components/Jura';
import Vandenynas from './Components/Vandenynas';
import Pasaulis from './Components/Pasaulis';
import RF001 from './Components/RF001';
import RF002 from './Components/RF002';
import HW0404 from './Components/HW0404';
import HW0500 from './Components/HW0500';
import HW0600 from './Components/HW0600';

const seaPlaners = [
  { id: 1, type: 'man', name: 'Lina', color: 'blue' },
  { id: 2, type: 'car', name: 'Opel', color: 'red' },
  { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
  { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
  { id: 5, type: 'man', name: 'Tomas', color: 'green' },
  { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
  { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
  { id: 8, type: 'car', name: 'MB', color: 'blue' },
  { id: 9, type: 'car', name: 'ZIL', color: 'red' },
  { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Bala param={seaPlaners} /> */}
        {/* <Tvenkinys param={seaPlaners} /> */}
        {/* <Jura param={seaPlaners} /> */}
        {/* <Vandenynas param={seaPlaners} /> */}
        {/* <Pasaulis param={seaPlaners} /> */}
        {/* <RF001 /> */}
        {/* <RF002 /> */}
        {/* <HW0404 /> */}
        {/* <HW0500 /> */}
        <HW0600 />
      </header>
    </div>
  );
}

export default App;
