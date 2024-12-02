// import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  return (
    <div>
    <Header />
      <div className='w-[1000px] m-auto'>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

export default App
