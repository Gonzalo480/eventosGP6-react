import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main className="main-section">
        <div className="text-and-image">
          <div className="content">
            <h2>Descubre las mejores actividades que hay en los eventos</h2>
          </div>
          <div className="image-container">
            <img 
              src="/images/imagen 1.jpeg" 
              alt="Evento" 
              className="side-image" 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
