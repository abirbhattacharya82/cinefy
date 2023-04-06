import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState, useEffect } from "react";
function App() {
  const [isValidToken, setIsValidToken] = useState(false);
  const token = localStorage.token;

  useEffect(() => {
    async function checkTokenValidity() {
      try {
        if (!token) {
          setIsValidToken(false);
          return;
        }
        const response = await fetch(`https://tiny-cyan-sockeye-shoe.cyclic.app/checkTokenValidity?token=${token}`);
        console.log(response);
        if (response.status === 202) {
          setIsValidToken(true);
        } else {
          setIsValidToken(false);
        }
      } catch (error) {
        setIsValidToken(false);
      }
    }
    checkTokenValidity();
  }, [token]);

  return (
    <>
      {isValidToken ? <Dashboard /> : <HomePage />}
    </>
  );
};

export default App;
