import { useNavigate } from 'react-router-dom';
import { Users, Package, Shield, TrendingUp, Activity } from 'lucide-react';
import './StreamCards.css';

const streamData = [
  {
    id: 'engage',
    name: 'Lumi-Engage',
    icon: Users,
    path: '/engage',
    health: 'excellent',
    lastUpdate: '7m ago',
    topProposal: 'Marketing: Adjust AdX by +10%',
    metrics: {
      primary: 'CTR ↑ 5%',
      secondary: 'ROAS ↑ 4%'
    }
  },
  {
    id: 'orchestrate',
    name: 'Lumi-Orchestrate',
    icon: Package,
    path: '/orchestrate',
    health: 'good',
    lastUpdate: '12m ago',
    topProposal: 'Operations: Optimize inventory levels',
    metrics: {
      primary: 'Stock-outs: 2%',
      secondary: 'Fulfillment: 95%'
    }
  },
  {
    id: 'shield',
    name: 'Lumi-Shield',
    icon: Shield,
    path: '/shield',
    health: 'warning',
    lastUpdate: '5m ago',
    topProposal: 'Security: Review access permissions',
    metrics: {
      primary: 'Risk score: Medium',
      secondary: 'Alerts: 3 active'
    }
  },
  {
    id: 'insight',
    name: 'Lumi-Insight',
    icon: TrendingUp,
    path: '/insight',
    health: 'excellent',
    lastUpdate: '3m ago',
    topProposal: 'Analytics: Revenue forecast updated',
    metrics: {
      primary: 'Margin ↑ 3%',
      secondary: 'Conversion ↑ 2%'
    }
  },
  {
    id: 'resilience',
    name: 'Lumi-Resilience',
    icon: Activity,
    path: '/resilience',
    health: 'excellent',
    lastUpdate: '10m ago',
    topProposal: 'Infrastructure: Scale capacity',
    metrics: {
      primary: 'Uptime: 99.7%',
      secondary: 'Health: 100%'
    }
  }
];

const StreamCards = () => {
  const navigate = useNavigate();

  const getHealthClass = (health) => {
    switch (health) {
      case 'excellent':
        return 'health-excellent';
      case 'good':
        return 'health-good';
      case 'warning':
        return 'health-warning';
      case 'critical':
        return 'health-critical';
      default:
        return 'health-good';
    }
  };

  return (
    <div className="stream-cards-container">
      <h2 className="stream-cards-title">Lumi Streams</h2>
      <div className="stream-cards-grid">
        {streamData.map((stream) => {
          const Icon = stream.icon;
          return (
            <div
              key={stream.id}
              className={`stream-card ${getHealthClass(stream.health)}`}
              onClick={() => navigate(stream.path)}
            >
              <div className="stream-card-header">
                <div className="stream-icon-wrapper">
                  <Icon className="stream-icon" size={24} />
                </div>
                <div className="stream-health">
                  <div className="health-indicator" />
                  <span className="health-label">{stream.health}</span>
                </div>
              </div>

              <h3 className="stream-name">{stream.name}</h3>
              
              <div className="stream-metrics">
                <div className="metric">
                  <span className="metric-value">{stream.metrics.primary}</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{stream.metrics.secondary}</span>
                </div>
              </div>

              <div className="stream-footer">
                <div className="last-update">
                  <span className="update-label">Updated</span>
                  <span className="update-time">{stream.lastUpdate}</span>
                </div>
              </div>

              <div className="stream-proposal">
                <div className="proposal-tag">Top Proposal</div>
                <p className="proposal-text">{stream.topProposal}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StreamCards;
