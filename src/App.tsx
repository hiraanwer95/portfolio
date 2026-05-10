import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { WorksPage } from './pages/WorksPage'
import { usePageTransition } from './hooks/usePageTransition'
import { useTheme } from './hooks/useTheme'

export default function App() {
  useTheme()
  const location = useLocation()
  const transition = usePageTransition(location.pathname)

  return (
    <Layout>
      <div ref={transition.containerRef}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Layout>
  )
}
