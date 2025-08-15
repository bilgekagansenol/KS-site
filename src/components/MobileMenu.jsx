import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { menuData } from '../navigation/menuData'

function MobileMenuItem({ item, onClose, level = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const handleLinkClick = () => {
    onClose()
  }

  if (!item.hasChildren) {
    return (
      <Link
        to={item.path}
        className={`block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors ${
          level > 0 ? `ml-${level * 4} border-l-2 border-gray-200` : ''
        }`}
        onClick={handleLinkClick}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div>
      <button
        className={`w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors ${
          level > 0 ? `ml-${level * 4} border-l-2 border-gray-200` : ''
        }`}
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
      >
        <span>{item.title}</span>
        <svg 
          className={`h-5 w-5 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="bg-gray-25">
          {item.children.map((child) => (
            <MobileMenuItem
              key={child.slug}
              item={child}
              onClose={onClose}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function MobileMenu({ isOpen, onClose }) {
  const menuRef = useRef(null)

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector('a, button')
      if (firstFocusable) {
        firstFocusable.focus()
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen || !menuRef.current) return

      const focusableElements = menuRef.current.querySelectorAll('a, button')
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        ref={menuRef}
        className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="py-4">
          <Link
            to="/"
            className="block py-3 px-4 text-lg font-semibold text-primary-700 border-b border-gray-200"
            onClick={onClose}
          >
            Home
          </Link>
          
          {menuData.map((item) => (
            <MobileMenuItem
              key={item.slug}
              item={item}
              onClose={onClose}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileMenu