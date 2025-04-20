import Navbar from './components/navbar'
import './App.css'
import Home from './components/home'
import About from './components/about'
import Gallery from './components/gallery'
import Contax from './components/contax'
import Kado from './components/kado'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <Navbar />
      <main>
        <Home />
        <About />
        <Gallery />
        <Contax />
        <Kado />
      </main>
    </div>
  )
}

export default App
