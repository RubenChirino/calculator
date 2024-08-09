import { useState, useEffect } from 'preact/hooks';

// Styles
import './app.css';

// Components
import Calculator from './components/Calculator';

export function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetch('https://bing.biturl.top/?resolution=UHD&format=json&index=0&mkt=zh-CN')
      .then((response) => response.json())
      .then((data) => {
        setBackgroundImage(data.url);
      })
      .catch((error) => console.error('Error fetching the wallpaper:', error));
  }, []);

  return (
    <div 
      className="page-container" 
      style={{ 
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: '#fff'
      }}
    >
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
