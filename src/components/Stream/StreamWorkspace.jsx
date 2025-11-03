import SignalsFeed from './SignalsFeed';
import IntelligenceBoard from './IntelligenceBoard';
import ActionsQueue from './ActionsQueue';
import './StreamWorkspace.css';

const StreamWorkspace = ({ streamName, signals, proposals, actions }) => {
  return (
    <div className="stream-workspace">
      <div className="workspace-grid">
        <div className="workspace-section">
          <SignalsFeed signals={signals} />
        </div>
        
        <div className="workspace-section">
          <IntelligenceBoard proposals={proposals} />
        </div>
        
        <div className="workspace-section">
          <ActionsQueue actions={actions} />
        </div>
      </div>
    </div>
  );
};

export default StreamWorkspace;
