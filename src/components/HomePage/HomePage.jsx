import Background from '../Background/Background';
import Home from '../Home/Home';
import Other from '../Otherdevices/Otherdevices';
import { useState, useEffect } from 'react';
function HomePage() {
  const websiteWidth = window.innerWidth;
  const [showHome, setShowHome] =useState(false);
  useEffect(()=>{
    if(websiteWidth>=1000){
      setShowHome(true);
    }
  },[websiteWidth])
  return (
    <div className="HomePage" id='p1'>
      <Background />
      {showHome? <Home /> : <Other /> }
    </div>
  );
}

export default HomePage;
