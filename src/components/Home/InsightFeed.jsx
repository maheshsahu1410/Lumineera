import { AlertTriangle, TrendingUp, Package, Shield } from 'lucide-react';
import './InsightFeed.css';

const insights = [
  {
    id: 1,
    title: 'Reorder Vendor X stock now',
    stream: 'Lumi-Orchestrate',
    severity: 'warning',
    eta: '1 day',
    icon: Package,
    description: 'Inventory low: 20 units remaining. Auto-suggest reorder.',
    simulation: 'Stock replenished → Delivery on time ↑ 95%'
  },
  {
    id: 2,
    title: 'Increase Instagram ad spend by 5%',
    stream: 'Lumi-Engage',
    severity: 'success',
    eta: 'Immediate',
    icon: TrendingUp,
    description: 'Predicted CTR ↑ 3%, CAC ↓ 1%',
    simulation: 'Pulse ↑ 2%, Ripple: Engaged Customers ↑ 5%'
  },
  {
    id: 3,
    title: 'Vendor X failed compliance check',
    stream: 'Lumi-Shield',
    severity: 'critical',
    eta: 'Urgent',
    icon: Shield,
    description: 'Risk score +18%. Suggested: Investigate & pause future orders.',
    simulation: 'Pause orders → Risk score ↓ 18%'
  },
  {
    id: 4,
    title: 'Reactivate email campaign',
    stream: 'Lumi-Engage',
    severity: 'warning',
    eta: '2 days',
    icon: TrendingUp,
    description: 'Expected conversion increase 1.5%',
    simulation: 'Ripple map: Conversion node ↑ 1.5%'
  }
];

const InsightFeed = () => {
  const getSeverityClass = (severity) => {
    switch(severity) {
      case 'success': return 'severity-success';
      case 'warning': return 'severity-warning';
      case 'critical': return 'severity-critical';
      default: return '';
    }
  };

  const handleSimulate = (insight) => {
    console.log('Simulating:', insight.title);
  };

  const handleImplement = (insight) => {
    console.log('Implementing:', insight.title);
  };

  const handleAsk = (insight) => {
    console.log('Asking Lumineera about:', insight.title);
  };

  return (
    <div className="insight-feed">
      <h2 className="feed-title">Priority Insights & Recommendations</h2>
      
      <div className="insight-grid">
        {insights.map((insight) => {
          const Icon = insight.icon;
          
          return (
            <div key={insight.id} className={`insight-card ${getSeverityClass(insight.severity)}`}>
              <div className="insight-header">
                <div className="insight-icon">
                  <Icon size={20} />
                </div>
                <div className="insight-meta">
                  <span className="insight-stream">{insight.stream}</span>
                  <span className="insight-eta">ETA: {insight.eta}</span>
                </div>
              </div>

              <h3 className="insight-title">{insight.title}</h3>
              
              <p className="insight-description">{insight.description}</p>
              
              <div className="insight-simulation">
                <AlertTriangle size={14} />
                <span>{insight.simulation}</span>
              </div>

              <div className="insight-actions">
                <button className="insight-btn btn-simulate" onClick={() => handleSimulate(insight)}>
                  Simulate
                </button>
                <button className="insight-btn btn-implement" onClick={() => handleImplement(insight)}>
                  Implement
                </button>
                <button className="insight-btn btn-ask" onClick={() => handleAsk(insight)}>
                  Ask Lumineera
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightFeed;
