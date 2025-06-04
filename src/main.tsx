
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './index.css'

// Lazy load the main App component to reduce initial bundle size
const App = lazy(() => import('./App.tsx'))

// Enhanced loading component with better animation
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600">
    <div className="text-center">
      {/* Logo with pulse animation */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <img 
            src="/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png" 
            alt="HozIT Logo" 
            className="h-16 w-auto animate-pulse"
          />
          <div className="absolute inset-0 bg-white opacity-20 rounded-lg animate-ping"></div>
        </div>
      </div>
      
      {/* Loading text with fade animation */}
      <div className="text-white text-xl font-semibold mb-4 animate-fade-in">
        Loading HozIT...
      </div>
      
      {/* Loading dots animation */}
      <div className="flex justify-center space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 mx-auto mt-8">
        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-white rounded-full animate-pulse" style={{ 
            animation: 'loading-progress 2s ease-in-out infinite',
            width: '60%'
          }}></div>
        </div>
      </div>
    </div>
  </div>
)

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);
