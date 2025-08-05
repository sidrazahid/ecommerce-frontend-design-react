import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
            <Navbar />

      <main className="flex-grow p-4">
        {/* Main content here */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
