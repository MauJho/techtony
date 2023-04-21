import './App.css';
import Courses from './components/Courses';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Courses />
    </div>
  );
}

export default App;
