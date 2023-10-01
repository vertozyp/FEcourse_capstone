import './styling/App.css';
import './styling/Nav.css';
import './styling/Home.css';
import './styling/Footer.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
