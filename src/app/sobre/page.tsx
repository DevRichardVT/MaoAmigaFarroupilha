import { Header } from '../../components/Header';
import { About as AboutComponent } from '../../components/About';
import { Footer } from '../../components/Footer';

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-8">
        <AboutComponent />
      </main>
      <Footer />
    </>
  );
}
