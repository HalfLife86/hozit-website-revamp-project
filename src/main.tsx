
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './index.css'

// Lazy load the main App component to reduce initial bundle size
const App = lazy(() => import('./App.tsx'))

// Enhanced loading component with amazing animations
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 relative overflow-hidden">
    {/* Animated background particles */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 2 + 2}s`
          }}
        />
      ))}
    </div>

    {/* Rotating circles background */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-96 h-96 border-4 border-white/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-8 border-4 border-white/30 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
        <div className="absolute inset-16 border-4 border-white/40 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
      </div>
    </div>
    
    <div className="text-center relative z-10">
      {/* Logo with advanced animations */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl animate-pulse"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <img 
              src="/lovable-uploads/3f00cb73-4a9d-4b38-8f54-faeb625236a2.png" 
              alt="HozIT Logo" 
              className="loading-logo animate-pulse transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          {/* Floating rings around logo */}
          <div className="absolute -inset-4 border-2 border-white/50 rounded-full animate-ping"></div>
          <div className="absolute -inset-8 border-2 border-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
      
      {/* Loading text with gradient animation */}
      <div className="text-white text-2xl font-bold mb-6 animate-fade-in">
        <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent bg-300% animate-[shimmer_2s_ease-in-out_infinite]">
          Loading HozIT...
        </span>
      </div>
      
      {/* Advanced loading dots */}
      <div className="flex justify-center space-x-3 mb-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg"
            style={{ 
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
      
      {/* Animated progress bar with glow */}
      <div className="w-80 mx-auto">
        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden shadow-inner backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-lg animate-[loading-wave_2s_ease-in-out_infinite]"
            style={{ 
              width: '70%',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
            }}
          />
        </div>
        <div className="text-white/80 text-sm mt-2 font-medium">
          Initializing amazing experience...
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-10 -left-10 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
      <div className="absolute -bottom-10 -right-10 w-8 h-8 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    </div>
  </div>
)

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);
