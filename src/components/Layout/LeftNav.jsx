import { Link } from 'react-router-dom';
import { Home, Users, Package, Shield, TrendingUp, Activity, ListTodo, FileText, Settings, GitMerge } from 'lucide-react';
import './LeftNav.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'decision-room', label: 'Decision Room', icon: GitMerge, path: '/decision-room' },
  { id: 'engage', label: 'Lumi-Engage', icon: Users, path: '/engage' },
  { id: 'orchestrate', label: 'Lumi-Orchestrate', icon: Package, path: '/orchestrate' },
  { id: 'shield', label: 'Lumi-Shield', icon: Shield, path: '/shield' },
  { id: 'insight', label: 'Lumi-Insight', icon: TrendingUp, path: '/insight' },
  { id: 'resilience', label: 'Lumi-Resilience', icon: Activity, path: '/resilience' },
  { id: 'actions', label: 'Actions/Tasks', icon: ListTodo, path: '/actions' },
  { id: 'reports', label: 'Reports', icon: FileText, path: '/reports' },
  { id: 'admin', label: 'Admin', icon: Settings, path: '/admin' },
];

const LeftNav = ({ currentModule }) => {
  return (
    <nav className="left-nav">
      <div className="nav-brand">
        <div className="brand-logo">L</div>
        <span className="brand-name">Lumineera</span>
      </div>

      <ul className="nav-items">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentModule === item.id;

          return (
            <li key={item.id} className="nav-item-wrapper">
              <Link
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                title={item.label}
              >
                {isActive && <span className="active-indicator" />}
                <Icon className="nav-icon" size={24} />
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LeftNav;
