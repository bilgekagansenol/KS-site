import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NavItem({ item, isActive, activeDropdown, onDropdownToggle, level = 0 }) {
  const dropdownRef = useRef(null)
  const isDropdownOpen = activeDropdown === item.slug

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      const firstLink = dropdownRef.current.querySelector('a, button')
      if (firstLink) {
        firstLink.focus()
      }
    }
  }, [isDropdownOpen])

  const handleKeyDown = (event) => {
    if (!item.hasChildren) return

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (!isDropdownOpen) {
          onDropdownToggle(item.slug)
        } else if (dropdownRef.current) {
          const firstLink = dropdownRef.current.querySelector('a, button')
          if (firstLink) firstLink.focus()
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        if (isDropdownOpen) {
          onDropdownToggle(null)
        }
        break
      case 'Enter':
      case ' ':
        if (item.hasChildren) {
          event.preventDefault()
          onDropdownToggle(isDropdownOpen ? null : item.slug)
        }
        break
    }
  }

  const handleDropdownKeyDown = (event) => {
    if (!dropdownRef.current) return

    const focusableElements = dropdownRef.current.querySelectorAll('a, button')
    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement)

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0
        focusableElements[nextIndex].focus()
        break
      case 'ArrowUp':
        event.preventDefault()
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1
        focusableElements[prevIndex].focus()
        break
      case 'Escape':
        event.preventDefault()
        onDropdownToggle(null)
        break
    }
  }

  if (!item.hasChildren) {
    return (
      <Link
        to={item.path}
        className={`nav-item ${isActive ? 'active' : ''} ${
          level === 0 ? 'px-4 py-2 rounded-md' : 'px-3 py-2'
        }`}
        onKeyDown={handleKeyDown}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className="relative">
      <button
        className={`nav-item flex items-center ${isActive ? 'active' : ''} ${
          level === 0 ? 'px-4 py-2 rounded-md' : 'px-3 py-2 w-full text-left'
        }`}
        onClick={() => onDropdownToggle(isDropdownOpen ? null : item.slug)}
        onKeyDown={handleKeyDown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <span>{item.title}</span>
        <svg 
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div 
        ref={dropdownRef}
        className={`nav-dropdown ${isDropdownOpen ? 'open' : ''} ${
          level > 0 ? 'left-full top-0 ml-1' : ''
        }`}
        onKeyDown={handleDropdownKeyDown}
        role="menu"
      >
        {item.children.map((child) => (
          <div key={child.slug} role="menuitem">
            {child.hasChildren ? (
              <NavItem
                item={child}
                isActive={false}
                activeDropdown={activeDropdown}
                onDropdownToggle={onDropdownToggle}
                level={level + 1}
              />
            ) : (
              <Link
                to={child.path}
                className="nav-item block"
                role="menuitem"
              >
                {child.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavItem