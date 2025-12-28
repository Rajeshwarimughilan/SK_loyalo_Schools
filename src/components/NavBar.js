import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const menuLinks = [
  {
    label: 'ABOUT',
    submenu: [
      { 
        label: 'School Philosophy', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
      },
      { 
        label: 'Leadership Vision', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
      },
      { 
        label: 'Curriculum Standards', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
      },
    ],
  },
  {
    label: 'ACADEMICS',
    submenu: [
      { 
        label: 'Subjects', 
        to: '/subjects-activities',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop'
      },
      { 
        label: 'Academic Resources', 
        to: '/subjects-activities',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop'
      },
      { 
        label: 'Curriculum Overview', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop'
      },
    ],
  },
  {
    label: 'STUDENT LIFE',
    submenu: [
      { 
        label: 'Activities', 
        to: '/subjects-activities',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop'
      },
      { 
        label: 'Clubs & Cells', 
        to: '/clubs-cells',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop'
      },
      { 
        label: 'Achievements', 
        to: '/achievements',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
      },
    ],
  },
  {
    label: 'ATHLETICS',
    submenu: [
      { 
        label: 'Sports Programs', 
        to: '/subjects-activities',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop'
      },
      { 
        label: 'Events & Competitions', 
        to: '/achievements',
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop'
      },
      { 
        label: 'Facilities', 
        to: '/hostel',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop'
      },
    ],
  },
  {
    label: 'ADMISSIONS',
    submenu: [
      { 
        label: 'Apply Now', 
        to: '/',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
      },
      { 
        label: 'Book a Visit', 
        to: '/',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
      },
      { 
        label: 'FAQs', 
        to: '/about',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
      },
    ],
  },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredSubtopic, setHoveredSubtopic] = useState(null);

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
    const firstItem = menuLinks.find(m => m.label === label)?.submenu?.[0];
    if (firstItem) {
      setHoveredSubtopic(firstItem);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setHoveredSubtopic(null);
  };

  const handleDropdownMouseEnter = () => {
    // Keep dropdown open when mouse is over the mega dropdown
  };

  const handleDropdownMouseLeave = () => {
    // Close dropdown when leaving the mega dropdown area
    setActiveDropdown(null);
    setHoveredSubtopic(null);
  };

  return (
    <header className="nav-shell">
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
            >
              {menu.label}
              <span className="dropdown-arrow">▼</span>
            </button>
            
            {activeDropdown === menu.label && (
              <div 
                className="mega-dropdown"
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="mega-dropdown-content">
                  <div className="mega-dropdown-left">
                    <ul className="mega-menu-list">
                      {menu.submenu.map((item) => (
                        <li key={item.label}>
                          <NavLink
                            to={item.to}
                            className="mega-menu-link"
                            onMouseEnter={() => setHoveredSubtopic(item)}
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
                  <div className="mega-dropdown-right">
                    {hoveredSubtopic && (
                      <img 
                        src={hoveredSubtopic.image} 
                        alt={hoveredSubtopic.label}
                        className="mega-dropdown-image"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <NavLink
          to="/announcements"
          className={({ isActive }) =>
            isActive ? 'nav-link is-active' : 'nav-link'
          }
          onClick={() => setOpen(false)}
        >
          NEWS
        </NavLink>

        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Book a Visit
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
