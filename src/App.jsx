import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeBanner from './components/HomeBanner';
import HomeDeal from './components/HomeDeal';
import HomeCategories from './components/HomeCategories';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <Navbar />
      <main className="flex-grow p-4">
        <HomeBanner/>
        <HomeDeal/>
        <HomeCategories />
      </main>

      <Footer />
    </div>
  );
};

export default App;
