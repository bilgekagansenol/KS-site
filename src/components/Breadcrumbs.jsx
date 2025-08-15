import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getBreadcrumbs } from '../navigation/menuData'

function Breadcrumbs() {
  const location = useLocation()
  const breadcrumbs = getBreadcrumbs(location.pathname)

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav className="bg-gray-100 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="container">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
          </li>
          
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1
            
            return (
              <li key={item.slug} className="flex items-center space-x-2">
                <svg 
                  className="h-4 w-4 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.title}
                  </span>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumbs