import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import ContourLines from './components/ContourLines';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import products from './data/products';

function App() {
  return (
    <div className="app">
      <ContourLines />
      <Header />

      <main>
        <ProductGrid products={products} />
      </main>

      <Footer />
      <Banner />
    </div>
  );
}

export default App;
