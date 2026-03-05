import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const menuLinks = [
  {
    label: 'ABOUT',
    submenu: [
      { 
        label: 'School Overview', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
      },
      { 
        label: 'Facilities', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
      },
      { 
        label: 'School Crest & Motto', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
      },
      { 
        label: 'Prayer', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
      },
      { 
        label: 'Management', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
      },

      { 
        label: 'Awards and Recognitions', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
      },
    ],
  },
  
  {
    label: 'STUDENT LIFE',
    submenu: [
      { 
        label: 'Academics', 
        to: '/subjects-activities',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop'
      },
      { 
        label: 'Event', 
        to: '/clubs-cells',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop'
      },
      { 
        label: 'Food At Loyalo', 
        to: '/achievements',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
      },
      { 
        label: 'HealthRoom', 
        to: '/subjects-activities',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop'
      },
      { 
        label: 'Counselling', 
        to: '/clubs-cells',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop'
      },
      { 
        label: 'Global Dimensions', 
        to: '/achievements',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
      },
      { 
        label: 'Co-curricular Activities', 
        to: '/clubs-cells',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop'
      },
      { 
        label: 'Student Council', 
        to: '/achievements',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
      },
    ],
  },
  {
    label: 'ADMINISTRATION',
    submenu: [
      { 
        label: 'Administrators', 
        to: '/administrators',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop'
      },
      { 
        label: 'Faculty & Staff', 
        to: '/faculty',
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop'
      },
    ],
  },

  {
    label: 'RESOURCES',
    submenu: [
      { 
        label: 'Books/E-Books', 
        to: '/resources/books',
        image: 'https://images.unsplash.com/photo-150784272343-583f20270319?w=800&h=600&fit=crop'
      },
      { 
        label: 'Uniform', 
        to: '/resources/uniform',
        image: 'https://images.unsplash.com/photo-1523381140519-541cdc06d037?w=800&h=600&fit=crop'
      },
      { 
        label: 'Transport & Bus Routes', 
        to: '/resources/transport',
        image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop'
      },
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
              className="nav-link dropdown-toggle"
              aria-expanded={activeDropdown === menu.label}
              onMouseEnter={() => handleMouseEnter(menu.label)}
            >
              {menu.label}
              <span className="dropdown-arrow">▼</span>
            </button>
            
            {activeDropdown === menu.label && (
              <div 
                className="mega-dropdown"
                onMouseEnter={handleDropdownMouseEnter}
              >
                <div className="mega-dropdown-content">
                  <div className="mega-dropdown-left">
                    <img 
                      src={menu.submenu[0].image} 
                      alt={menu.label}
                      className="mega-dropdown-image"
                    />
                  </div>
                  <div className="mega-dropdown-right">
                    <h3 className="mega-dropdown-heading">{menu.label}</h3>
                    <ul className="mega-menu-list">
                      {menu.submenu.map((item) => (
                        <li key={item.label}>
                          <NavLink
                            to={item.to}
                            className="mega-menu-link"
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
                </div>
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
