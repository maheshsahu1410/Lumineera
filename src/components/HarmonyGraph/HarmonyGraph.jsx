import { useState } from 'react';
import { Users, Package, Shield, TrendingUp, Activity } from 'lucide-react';
import './HarmonyGraph.css';

const nodes = [
  { id: 'engage', name: 'Engage', icon: Users, x: 250, y: 50, status: 'excellent' },
  { id: 'orchestrate', name: 'Orchestrate', icon: Package, x: 450, y: 150, status: 'good' },
  { id: 'shield', name: 'Shield', icon: Shield, x: 400, y: 350, status: 'warning' },
  { id: 'insight', name: 'Insight', icon: TrendingUp, x: 150, y: 350, status: 'excellent' },
  { id: 'resilience', name: 'Resilience', icon: Activity, x: 50, y: 150, status: 'excellent' }
];

const connections = [
  { from: 'engage', to: 'orchestrate', status: 'active', label: 'Campaign sync' },
  { from: 'engage', to: 'insight', status: 'active', label: 'Analytics' },
  { from: 'orchestrate', to: 'shield', status: 'active', label: 'Risk check' },
  { from: 'shield', to: 'insight', status: 'warning', label: 'Alert data' },
  { from: 'insight', to: 'resilience', status: 'active', label: 'Monitoring' },
  { from: 'resilience', to: 'engage', status: 'active', label: 'Health data' }
];

const HarmonyGraph = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const getNodeColor = (status) => {
    switch (status) {
      case 'excellent':
        return 'hsl(var(--glow-success))';
      case 'good':
        return 'hsl(var(--glow-cyan))';
      case 'warning':
        return 'hsl(var(--glow-warning))';
      case 'critical':
        return 'hsl(var(--glow-critical))';
      default:
        return 'hsl(var(--glow-cyan))';
    }
  };

  const getConnectionColor = (status) => {
    switch (status) {
      case 'active':
        return 'hsl(var(--glow-cyan))';
      case 'warning':
        return 'hsl(var(--glow-warning))';
      case 'error':
        return 'hsl(var(--glow-critical))';
      default:
        return 'hsl(var(--border))';
    }
  };

  return (
    <div className="harmony-graph-container">
      <div className="graph-header">
        <h2>Harmony Graph</h2>
        <p className="graph-subtitle">Live stream connections and data flow</p>
      </div>

      <div className="harmony-graph">
        <svg viewBox="0 0 500 400" className="graph-svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connections */}
          {connections.map((conn, index) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            
            return (
              <g key={index}>
                <line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={getConnectionColor(conn.status)}
                  strokeWidth="2"
                  strokeDasharray={conn.status === 'active' ? '0' : '5,5'}
                  className="connection-line"
                  filter="url(#glow)"
                />
                
                <circle
                  cx={(fromNode.x + toNode.x) / 2}
                  cy={(fromNode.y + toNode.y) / 2}
                  r="3"
                  fill={getConnectionColor(conn.status)}
                  className="connection-pulse"
                />
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;
            
            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className={`graph-node ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedNode(node.id)}
              >
                <circle
                  r={isSelected ? '35' : '30'}
                  fill="hsl(var(--card))"
                  stroke={getNodeColor(node.status)}
                  strokeWidth="3"
                  filter="url(#glow)"
                  className="node-circle"
                />
                
                <foreignObject x="-12" y="-12" width="24" height="24">
                  <Icon size={24} style={{ color: getNodeColor(node.status) }} />
                </foreignObject>
                
                <text
                  y="45"
                  textAnchor="middle"
                  fill="hsl(var(--foreground))"
                  fontSize="12"
                  fontWeight="500"
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {selectedNode && (
        <div className="node-details">
          <h3>{nodes.find(n => n.id === selectedNode)?.name} Stream</h3>
          <div className="detail-connections">
            <h4>Active Connections:</h4>
            <ul>
              {connections
                .filter(c => c.from === selectedNode || c.to === selectedNode)
                .map((conn, i) => (
                  <li key={i}>
                    <span className="connection-label">{conn.label}</span>
                    <span className={`connection-status ${conn.status}`}>
                      {conn.status}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HarmonyGraph;
