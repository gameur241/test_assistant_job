// ...existing code...
import {useState} from "react";
import {LoginForm} from "./components/login-form.tsx";
import DarkVeil from './components/DarkVeil';
import BlurText from "./components/BlurText";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1 
      }}>
        <DarkVeil 
          hueShift={30}
          noiseIntensity={0}
          scanlineIntensity={0.5}
          speed={0.7}
          warpAmount={0.7}
        />
      </div>
      
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%', 
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        {!loggedIn ? (
          <LoginForm className="w-full max-w-sm" onSuccess={() => setLoggedIn(true)} />
        ) : (
          <BlurText
            text="Bienvenue sur Intervia"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-6xl font-bold mb-8 text-primary"
            highlightWord="Intervia"
            highlightClassName=" font-bold uppercase text-6xl text-muted "
          />
              
          
        )}
      </div>
    </div>
  );
}
// ...existing code...