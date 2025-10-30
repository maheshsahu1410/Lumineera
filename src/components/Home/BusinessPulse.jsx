import { useNavigate } from 'react-router-dom';
import './BusinessPulse.css';

const segments = [
  {
    id: 'engage',
    label: 'Lumi-Engage',
    value: 78,
    color: '#1DE9B6',
    tooltip: 'Marketing CTR up 5%, CLV ↑ 8%',
    path: '/engage'
  },
  {
    id: 'orchestrate',
    label: 'Lumi-Orchestrate',
    value: 65,
    color: '#FFC107',
    tooltip: 'Stock-outs: 2%, Vendor delays: 5%',
    path: '/orchestrate'
  },
  {
    id: 'shield',
    label: 'Lumi-Shield',
    value: 40,
    color: '#FF4C4C',
    tooltip: 'Risk score ↑ 15%, Fraud alerts: 3',
    path: '/shield'
  },
  {
    id: 'insight',
    label: 'Lumi-Insight',
    value: 72,
    color: '#00F0FF',
    tooltip: 'Profitability margin ↑ 3%, ROAS ↑ 4%',
    path: '/insight'
  },
  {
    id: 'resilience',
    label: 'Lumi-Resilience',
    value: 85,
    color: '#1DE9B6',
    tooltip: 'System uptime 99.7%, Backup health 100%',
    path: '/resilience'
  }
];

const BusinessPulse = () => {
  const navigate = useNavigate();
  const overallScore = Math.round(segments.reduce((sum, seg) => sum + seg.value, 0) / segments.length);

  return (
    <div className="business-pulse">
      <h2 className="pulse-title">Business Pulse</h2>
      
      <div className="pulse-meter-container">
        <svg className="pulse-meter" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="16"
          />
          
          {/* Segments */}
          {segments.map((segment, index) => {
            const startAngle = (index * 72) - 90;
            const endAngle = ((index + 1) * 72) - 90;
            const largeArcFlag = 0;
            
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;
            
            const x1 = 100 + 80 * Math.cos(startRad);
            const y1 = 100 + 80 * Math.sin(startRad);
            const x2 = 100 + 80 * Math.cos(endRad);
            const y2 = 100 + 80 * Math.sin(endRad);
            
            return (
              <g key={segment.id} className="pulse-segment-group">
                <path
                  d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={segment.color}
                  fillOpacity="0.2"
                  className="pulse-segment"
                  onClick={() => navigate(segment.path)}
                />
                <title>{segment.tooltip}</title>
              </g>
            );
          })}
          
          {/* Center circle with score */}
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="hsl(var(--card))"
            stroke={overallScore >= 70 ? '#1DE9B6' : overallScore >= 50 ? '#FFC107' : '#FF4C4C'}
            strokeWidth="3"
          />
          
          <text
            x="100"
            y="95"
            textAnchor="middle"
            fontSize="36"
            fontWeight="bold"
            fill="hsl(var(--foreground))"
          >
            {overallScore}
          </text>
          <text
            x="100"
            y="115"
            textAnchor="middle"
            fontSize="12"
            fill="hsl(var(--muted-foreground))"
          >
            Overall Health
          </text>
        </svg>

        <div className="pulse-legend">
          {segments.map((segment) => (
            <div key={segment.id} className="legend-item" onClick={() => navigate(segment.path)}>
              <div className="legend-color" style={{ background: segment.color }} />
              <div className="legend-info">
                <span className="legend-label">{segment.label}</span>
                <span className="legend-value">{segment.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPulse;
