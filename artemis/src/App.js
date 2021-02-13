import logo from './logo.svg';
import './App.css';
import Main from './Main.js'
import Calendar from './Calendar.js'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Main>
        <Calendar />
      </Main>
    </div>
  );
}

export default App;
