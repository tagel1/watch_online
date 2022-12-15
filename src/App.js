import './App.css';
import Footer from "./Footer";
import Navbar from './Navbar';

function App() {
  return (

    <div className="App" >
      <Navbar />
      <img className="img" src="./images/logoWatchOnline.png" alt="logo" />
      <p>Watch Online</p>
      <p>קולקציה חדשה</p>
      <Footer />
    </div>

  );
}

export default App;
