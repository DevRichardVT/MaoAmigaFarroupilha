import { Header } from '../../components/Header';
import { Events } from '../../components/Events';
import { Footer } from '../../components/Footer';

export default function EventosPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-8">
        <Events />
      </main>
      <Footer />
    </>
  );
}
