import { useState } from 'react';
import LeftNav from './LeftNav';
import RightActionRail from './RightActionRail';
import FAB from './FAB';
import './Layout.css';

const Layout = ({ children, currentModule }) => {
  const [showActionRail, setShowActionRail] = useState(true);

  return (
    <div className="layout-container">
      <LeftNav currentModule={currentModule} />
      
      <main className="main-content">
        {children}
      </main>

      {showActionRail && (
        <RightActionRail onClose={() => setShowActionRail(false)} />
      )}

      <FAB />
    </div>
  );
};

export default Layout;
