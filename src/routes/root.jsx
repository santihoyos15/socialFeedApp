import { Feed } from '../components/Feed/Feed';
import { Header } from '../components/Header/Header';
import { Description } from '../components/Description/Description';
import { Advertisement } from '../components/Advertisement/Advertisement';
import { Footer } from '../components/Footer/Footer';
import { Companies } from '../components/Companies/Companies';

export default function Root() {
  return (
    <>
      <Header />
      <Companies />
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
