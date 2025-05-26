
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './index.css'

// Lazy load the main App component to reduce initial bundle size
const App = lazy(() => import('./App.tsx'))

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600">
    <div className="text-white text-xl font-semibold">Loading HozIT...</div>
  </div>
)

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);
