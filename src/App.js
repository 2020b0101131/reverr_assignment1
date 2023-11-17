
import './App.css';
import CounterList from './components/CounterList';

function App() {
  return (
    <div className="container vh-100">
      <div>
      <h1 className='text-center'>Tally Counter</h1>
      <CounterList />
    </div>
    </div>
  );
}

export default App;
