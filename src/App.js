import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header'
import AppCars from './components/cars';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppNewCars from './components/newcars';
import AppTestimonials from './components/testimonials';
import AppBlog from './components/blog';
import AppContact from './components/contactus';
import AppFooter from './components/footer';
import AppFeaturedCars from './components/featuredcars';
import AppBrands from './components/brands';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppCars />
        <AppAbout />
        <AppServices />
        <AppFeaturedCars/>
        <AppNewCars />
        <AppBlog />
        <AppTestimonials />
        <AppBrands/>
        <AppContact />
        
      </main>
      <footer id='footer'>
      <AppFooter />
      </footer>
    </div>
  );
}

export default App;
