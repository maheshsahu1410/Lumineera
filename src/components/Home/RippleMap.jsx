import { useState } from 'react';
import './RippleMap.css';

const nodes = [
  {
    id: 'ad-campaign',
    label: 'Instagram Ads',
    x: 30,
    y: 40,
    health: 75,
    impact: 80,
    tooltip: 'CTR 3% below target → +5% ad spend suggested',
    simulation: 'Pulse + Engaged Customers ↑ 7%, CAC ↓ 3%'
  },
  {
    id: 'vendor',
    label: 'Vendor X',
    x: 60,
    y: 30,
    health: 60,
    impact: 70,
    tooltip: 'Delivery delays: 3%, Compliance OK',
    simulation: 'Delivery rate ↓ 3%, Cost ↑ 2%'
  },
  {
    id: 'server',
    label: 'Backend Server 1',
    x: 70,
    y: 60,
    health: 85,
    impact: 90,
    tooltip: 'CPU load ↑ 70%, Backup ok',
    simulation: 'System Resilience ↓ 5%, Risk ↑ 2%'
  },
  {
    id: 'campaign',
    label: 'Email Campaign',
    x: 40,
    y: 70,
    health: 80,
    impact: 60,
    tooltip: 'Open rate 15%, CTR 2.5%',
    simulation: 'Conversion ↑ 1.5%, CLV ↑ 5%'
  },
  {
    id: 'inventory',
    label: 'Inventory System',
    x: 50,
    y: 50,
    health: 65,
    impact: 85,
    tooltip: 'Stock levels: 20 units remaining',
    simulation: 'Reorder → Delivery on time ↑ 95%'
  }
];

const connections = [
  { from: 'ad-campaign', to: 'campaign' },
  { from: 'campaign', to: 'inventory' },
  { from: 'vendor', to: 'inventory' },
  { from: 'server', to: 'inventory' },
  { from: 'inventory', to: 'ad-campaign' }
];

const RippleMap = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const getNodeColor = (health) => {
    if (health >= 75) return '#1DE9B6';
    if (health >= 50) return '#FFC107';
    return '#FF4C4C';
  };

  const getNodeSize = (impact) => {
    return 30 + (impact / 100) * 30;
  };

  return (
    <div className="ripple-map">
      <h2 className="ripple-title">System Ripple Map</h2>
      
      <div className="ripple-container">
        <svg className="ripple-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* Connections */}
          {connections.map((conn, index) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;

            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
                opacity="0.5"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const size = getNodeSize(node.impact);
            const color = getNodeColor(node.health);
            const isSelected = selectedNode === node.id;
            const isHovered = hoveredNode === node.id;

            return (
              <g key={node.id}>
                {/* Ripple effect on hover */}
                {isHovered && (
                  <>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={size / 50 + 2}
                      fill="none"
                      stroke={color}
                      strokeWidth="0.3"
                      opacity="0.4"
                      className="ripple-pulse"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={size / 50 + 4}
                      fill="none"
                      stroke={color}
                      strokeWidth="0.2"
                      opacity="0.2"
                      className="ripple-pulse-delayed"
                    />
                  </>
                )}

                <circle
                  cx={node.x}
                  cy={node.y}
                  r={size / 50}
                  fill={color}
                  fillOpacity={isSelected ? 0.8 : 0.6}
                  stroke={color}
                  strokeWidth={isSelected ? 0.8 : 0.5}
                  className="ripple-node"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(isSelected ? null : node.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <title>{node.tooltip}</title>
                </circle>

                {/* Node label */}
                <text
                  x={node.x}
                  y={node.y + size / 50 + 3}
                  textAnchor="middle"
                  fontSize="2.5"
                  fill="hsl(var(--foreground))"
                  pointerEvents="none"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {selectedNode && (
          <div className="node-detail">
            {(() => {
              const node = nodes.find(n => n.id === selectedNode);
              return (
                <>
                  <h3>{node.label}</h3>
                  <p className="node-tooltip">{node.tooltip}</p>
                  <p className="node-simulation">
                    <strong>Simulation:</strong> {node.simulation}
                  </p>
                  <button className="detail-close" onClick={() => setSelectedNode(null)}>
                    Close
                  </button>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default RippleMap;
