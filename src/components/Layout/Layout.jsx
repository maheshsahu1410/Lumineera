import { useState } from 'react';
import { FileText } from 'lucide-react';
import LeftNav from './LeftNav';
import FAB from './FAB';
import RightActionRail from './RightActionRail';
import GovernanceDrawer from '../Governance/GovernanceDrawer';
import './Layout.css';

const Layout = ({ children, currentModule }) => {
  const [showActionRail, setShowActionRail] = useState(true);
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);

  return (
    <div className="layout-container">
      <LeftNav currentModule={currentModule} />
      
      <main className="main-content">
        {children}
      </main>

      <button 
        className="governance-toggle"
        onClick={() => setIsGovernanceOpen(true)}
        title="Governance & Policies"
      >
        <FileText size={20} />
      </button>

      {showActionRail && (
        <RightActionRail onClose={() => setShowActionRail(false)} />
      )}

      <FAB />
      
      <GovernanceDrawer isOpen={isGovernanceOpen} onClose={() => setIsGovernanceOpen(false)} />
    </div>
  );
};

export default Layout;
