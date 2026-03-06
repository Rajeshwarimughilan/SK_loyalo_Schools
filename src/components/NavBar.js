import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const menuLinks = [
  {
    label: 'ABOUT',
    submenu: [
      { label: 'School Overview', to: '/about' },
      { label: 'Facilities', to: '/about' },
      { label: 'School Crest & Motto', to: '/about' },
      { label: 'Prayer', to: '/about' },
      { label: 'Management', to: '/about' },
      { label: 'Awards and Recognitions', to: '/about' },
    ],
  },
  
  {
    label: 'STUDENT LIFE',
    submenu: [
      { label: 'Academics', to: '/subjects-activities' },
      { label: 'Event', to: '/clubs-cells' },
      { label: 'Food At Loyalo', to: '/achievements' },
      { label: 'HealthRoom', to: '/subjects-activities' },
      { label: 'Counselling', to: '/clubs-cells' },
      { label: 'Global Dimensions', to: '/achievements' },
      { label: 'Co-curricular Activities', to: '/clubs-cells' },
      { label: 'Student Council', to: '/achievements' },
    ],
  },
  {
    label: 'ADMINISTRATION',
    submenu: [
      { label: 'Administrators', to: '/administrators' },
      { label: 'Faculty & Staff', to: '/faculty' },
    ],
  },

  {
    label: 'RESOURCES',
    submenu: [
      { label: 'Books/E-Books', to: '/resources/books' },
      { label: 'Uniform', to: '/resources/uniform' },
      { label: 'Transport & Bus Routes', to: '/resources/transport' },
    ],
  },

];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeout = useRef(null);
  const CLOSE_DELAY = 350;

  const handleMouseEnter = (label) => {
    // Clear any pending close timeout
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Don't close immediately - allow time to move between trigger and panel
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, CLOSE_DELAY);
  };

  const handleDropdownMouseEnter = () => {
    // Cancel closing when mouse enters the dropdown area
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  // Dropdown close is now handled at the nav-shell level to reduce flicker when moving between items

  return (
    <header 
      className="nav-shell"
      onMouseEnter={() => {
        if (closeTimeout.current) {
          clearTimeout(closeTimeout.current);
          closeTimeout.current = null;
        }
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-brand">
        <NavLink to="/">
          <span className="nav-logo">Loyalo School</span>
        </NavLink>
      </div>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((state) => !state)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link is-active' : 'nav-link'
          }
          end
          onClick={() => setOpen(false)}
        >
          HOME
        </NavLink>

        {menuLinks.map((menu) => (
          <div 
            key={menu.label} 
            className="nav-dropdown-container"
            onMouseEnter={() => handleMouseEnter(menu.label)}
          >
            <button
              type="button"
              className="nav-link dropdown-toggle"
              aria-expanded={activeDropdown === menu.label}
              onMouseEnter={() => handleMouseEnter(menu.label)}
              onClick={() =>
                setActiveDropdown((prev) => (prev === menu.label ? null : menu.label))
              }
            >
              {menu.label}
              <span className="dropdown-arrow">▼</span>
            </button>
            
            {activeDropdown === menu.label && (
              <div 
                className="dropdown-panel"
                onMouseEnter={handleDropdownMouseEnter}
              >
                <h3 className="dropdown-panel-heading">{menu.label}</h3>
                <ul
                  className="dropdown-menu-list"
                >
                  {menu.submenu.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={item.to}
                        className="dropdown-menu-link"
                        onClick={() => {
                          setOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}


        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? 'nav-link is-active' : 'nav-link'
          }
          onClick={() => setOpen(false)}
        >
          GALLERY
        </NavLink>

        <NavLink
          to="/alumni"
          className={({ isActive }) =>
            isActive ? 'nav-link is-active' : 'nav-link'
          }
          onClick={() => setOpen(false)}
        >
          ALUMNI
        </NavLink>

        <NavLink
          to="/admissions"
          className={({ isActive }) =>
            isActive ? 'nav-link is-active' : 'nav-link'
          }
          onClick={() => setOpen(false)}
        >
          ADMISSIONS
        </NavLink>

        <NavLink
          to="/fee-structure"
          className={({ isActive }) =>
            isActive ? 'nav-link is-active' : 'nav-link'
          }
          onClick={() => setOpen(false)}
        >
          FEE STRUCTURE
        </NavLink>
        
      </nav>
    </header>
  );
}

export default NavBar;
