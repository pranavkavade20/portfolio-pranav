import { Home, Briefcase, Cpu, FolderGit2, Mail } from 'lucide-react';

export const navItems = [
  { name: 'Home', path: '/', icon: Home, subtitle: 'Overview' },
  { name: 'Experience', path: '/experience', icon: Briefcase, subtitle: 'Career & Roles' },
  { name: 'Skills', path: '/skills', icon: Cpu, subtitle: 'Tech Stack' },
  { name: 'Projects', path: '/projects', icon: FolderGit2, subtitle: 'Selected Work' },
  { name: 'Contact', path: '/contact', icon: Mail, subtitle: 'Get in Touch' },
];

export function isNavPathActive(currentPath, itemPath) {
  if (itemPath === '/') {
    return currentPath === '/' || currentPath === '/home';
  }
  return currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
}

export function getRouteTitle(currentPath) {
  const matched = navItems.find((item) => isNavPathActive(currentPath, item.path));
  return matched ? matched.name : 'Portfolio';
}
