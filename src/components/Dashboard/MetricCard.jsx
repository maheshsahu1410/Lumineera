import { TrendingUp, TrendingDown } from 'lucide-react';
import './MetricCard.css';

const MetricCard = ({ label, value, tooltip, trend, icon: Icon, onClick }) => {
  const trendDirection = trend && trend > 0 ? 'up' : 'down';
  
  return (
    <div className="metric-card" onClick={onClick} title={tooltip}>
      <div className="metric-header">
        {Icon && (
          <div className="metric-icon">
            <Icon size={20} />
          </div>
        )}
        <span className="metric-label">{label}</span>
      </div>
      
      <div className="metric-value">{value}</div>
      
      {trend !== undefined && (
        <div className={`metric-trend trend-${trendDirection}`}>
          {trendDirection === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{Math.abs(trend)}%</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
