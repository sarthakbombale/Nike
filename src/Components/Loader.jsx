import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [showNike, setShowNike] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Step 1: Show dots for 1.5s
    const showNikeTimer = setTimeout(() => setShowNike(true), 1500);

    // Step 2: Start fade-out 1.5s after NIKE appears
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 5000);

    return () => {
      clearTimeout(showNikeTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      {!showNike ? (
        <div className="dots-loader"></div>
      ) : (
        <h1 className="loader-text">NIKE</h1>
      )}
    </div>
  );
};

export default Loader;



