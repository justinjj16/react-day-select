import DatePicker from 'react-day-select'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="app-inner">
        <div>
          <h3 className="heading">Save water</h3>
        </div>
        <div className="margin-T-20 margin-B-20 react-date-select">React Day Select</div>
        <DatePicker 
        />
      </div>
      <footer>
        <div className="footer-div">A drop of water is worth more than a sack of gold to a thirsty man</div>
      </footer>
    </div>
  );
}

export default App;
