import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { menuData } from './navigation/menuData'

function createRoutes(items, basePath = '') {
  const routes = []
  
  items.forEach(item => {
    const fullPath = item.path
    
    if (item.children && item.children.length > 0) {
      const indexPagePath = `./pages${fullPath.split('/').map(segment => 
        segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('')
      ).join('/')}/index.jsx`
      
      try {
        const IndexComponent = React.lazy(() => import(indexPagePath))
        routes.push(
          <Route key={fullPath} path={fullPath} element={<IndexComponent />} />
        )
      } catch {
        const fallbackTitle = item.title
        const FallbackComponent = () => (
          <div className="page-section">
            <div className="container">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">{fallbackTitle}</h1>
              <p className="text-lg text-gray-600 mb-8">[PLACEHOLDER: Section overview for {fallbackTitle}]</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {item.children.map(child => (
                  <div key={child.slug} className="card">
                    <h3 className="text-xl font-semibold mb-2">{child.title}</h3>
                    <p className="text-gray-600">[PLACEHOLDER: Description]</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
        routes.push(
          <Route key={fullPath} path={fullPath} element={<FallbackComponent />} />
        )
      }
      
      routes.push(...createRoutes(item.children, fullPath))
    } else {
      const pagePath = `./pages${fullPath.split('/').map(segment => 
        segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('')
      ).join('/')}.jsx`
      
      try {
        const PageComponent = React.lazy(() => import(pagePath))
        routes.push(
          <Route key={fullPath} path={fullPath} element={<PageComponent />} />
        )
      } catch {
        const fallbackTitle = item.title
        const FallbackComponent = () => (
          <div className="page-section">
            <div className="container">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">{fallbackTitle}</h1>
              <p className="text-lg text-gray-600">[PLACEHOLDER: Page content for {fallbackTitle}]</p>
            </div>
          </div>
        )
        routes.push(
          <Route key={fullPath} path={fullPath} element={<FallbackComponent />} />
        )
      }
    }
  })
  
  return routes
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Industrial Solutions Company</title>
        <meta name="description" content="Leading industrial solutions provider offering comprehensive services across multiple sectors including heavy industry, maritime, railway systems, and more." />
        <meta property="og:title" content="Industrial Solutions Company" />
        <meta property="og:description" content="Leading industrial solutions provider offering comprehensive services across multiple sectors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-1">
        <React.Suspense fallback={
          <div className="flex items-center justify-center min-h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {createRoutes(menuData)}
            <Route path="*" element={
              <div className="page-section">
                <div className="container text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                  <p className="text-lg text-gray-600">The page you're looking for doesn't exist.</p>
                </div>
              </div>
            } />
          </Routes>
        </React.Suspense>
      </main>
      
      <Footer />
    </div>
  )
}

export default App