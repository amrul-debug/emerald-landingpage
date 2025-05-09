import { useEffect } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Stats from './components/sections/Stats';
import Community from './components/sections/Community';
import News from './components/sections/News';
import Join from './components/sections/Join';
import Footer from './components/sections/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  useEffect(() => {
    document.title = 'Emerald Roleplay | San Andreas Multiplayer Community';

    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, []);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Stats />
          <Community />
          <News />
          <Join />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;