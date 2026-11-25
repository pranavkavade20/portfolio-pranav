import React from 'react';
import { useLocation } from 'react-router-dom';
import { isNavPathActive, navItems } from '../../config/navigation';
import NavBar from '../ui/NavBar';

/**
 * Compact (<600px) Mobile Bottom Navigation Bar.
 * Renders 5 primary destinations with 48dp touch targets and safe-area inset padding.
 */
const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavBar
      variant="bottom"
      items={navItems}
      isActive={(path) => isNavPathActive(currentPath, path)}
      ariaLabel="Mobile Bottom Navigation"
    />
  );
};

export default BottomNav;
