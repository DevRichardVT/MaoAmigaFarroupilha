import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Metrics } from '../components/Metrics';
import { HomeHighlights } from '../components/HomeHighlights';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Metrics />
        <HomeHighlights />
      </main>
      <Footer />
    </>
  );
}
