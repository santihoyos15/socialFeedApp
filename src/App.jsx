import { Feed } from './components/Feed/Feed';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Description } from './components/Description/Description';
import { Advertisement } from './components/Advertisement/Advertisement';

function App() {
  return (
    <>
      <Header />
      <Feed />
      <Description />
      <Advertisement />
      <Footer />
    </>
  );
}

export default App;
