import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HeaderDisplay from './Components/HeaderDisplay/HeaderDisplay';
import TextSection from './Components/TextSection/TextSection';
import ImageDisplay from './Components/ImageDisplay/ImageDisplay';
import Footer from './Components/Footer/Footer';
import placeHolder from './images/placeholder.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <HeaderDisplay src={placeHolder} />
      </header>
      <main>
        <TextSection title="Section 1" text="Content for section 1 here" />
        <ImageDisplay src={placeHolder} />
        <TextSection title="Section 2" text="Content for section 2 here" />
        <ImageDisplay src={placeHolder} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
