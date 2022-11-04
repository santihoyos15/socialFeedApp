import { Feed } from './components/Feed/Feed';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Description } from './components/Description/Description';
import { Advertisement } from './components/Advertisement/Advertisement';

function App() {
  return (
    <>
      <Header />
      <Feed
        URL="http://api.massrelevance.com/MassRelDemo/kindle.json"
        numOfPosts={5}
        updateInterval={2000}
      />
      <Description />
      <Advertisement />
      <Footer />
    </>
  );
}

export default App;
