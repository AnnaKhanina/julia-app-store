import Banner from '../components/Banner';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">      
      <main className="flex-grow">
        <Banner />       
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;




