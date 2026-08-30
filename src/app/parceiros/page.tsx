import { Header } from '../../components/Header';
import { Partners } from '../../components/Partners';
import { Footer } from '../../components/Footer';

export default function ParceirosPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-8">
        <Partners />
      </main>
      <Footer />
    </>
  );
}
