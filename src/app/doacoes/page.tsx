import { Header } from '../../components/Header';
import { Donate } from '../../components/Donate';
import { Footer } from '../../components/Footer';

export default function DoacoesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-8">
        <Donate />
      </main>
      <Footer />
    </>
  );
}
