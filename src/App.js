import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import NavigationBar from './components/NavigationBar/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
