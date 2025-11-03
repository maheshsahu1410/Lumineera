import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import './SignalsFeed.css';

const SignalsFeed = ({ signals = [] }) => {
  const getSignalIcon = (type) => {
    switch (type) {
      case 'increase':
        return <TrendingUp size={16} className="signal-icon-up" />;
      case 'decrease':
        return <TrendingDown size={16} className="signal-icon-down" />;
      default:
        return <Activity size={16} className="signal-icon-neutral" />;
    }
  };

  return (
    <div className="signals-feed">
      <div className="feed-header">
        <h3>Signals Feed</h3>
        <span className="feed-status">Live</span>
      </div>
      
      <div className="signals-list">
        {signals.map((signal, index) => (
          <div key={index} className="signal-item">
            <div className="signal-time">{signal.time}</div>
            <div className="signal-content">
              {getSignalIcon(signal.type)}
              <span className="signal-text">{signal.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignalsFeed;
