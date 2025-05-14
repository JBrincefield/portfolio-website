import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';



function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <About />;
    }
  };

  return (
  <div className="bg-[#101010] text-white min-h-screen w-full flex justify-center p-6">
    <audio id="audio" loop autoPlay>
      <source src="/music.mp3" type="audio/mpeg"/>
    </audio>
    <div className="flex w-full max-w-7xl">
      {/* Sidebar */}
      <div className="sticky top-6 self-start">
        <Sidebar />
      </div>

      {/* Main Card */}
      <div className="flex-1 ml-6 bg-[#181818] rounded-lg shadow-lg p-6 overflow-y-auto max-h-[calc(100vh-3rem)] min-w-[300px]">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="mt-6">{renderContent()}</main>
      </div>
    </div>
  </div>
);

}

export default App;
