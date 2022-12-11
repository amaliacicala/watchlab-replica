import './style/App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Body />
            <Newsletter />
            <Footer />
        </>
    );
}

export default App;
