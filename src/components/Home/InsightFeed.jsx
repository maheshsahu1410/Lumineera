import React, { useState } from 'react';
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
    simulation: 'Stock replenished → Delivery on time ↑ 95%',
    prediction: [
      { label: 'Order', value: '500 units' },
      { label: 'Cost', value: '$12,500 estimate' },
      { label: 'Coverage', value: '104 days' },
      { label: 'On-time delivery', value: '↑95%' },
      { label: 'Stockout probability', value: '2%' },
      { label: 'Revenue protection', value: '$45K/week' },
      { label: 'Confidence', value: '95%' }
    ],
    execution: [
      "PO created: PO-2025-0512",
      "Order placed: May 9, 2:30 PM",
      "Payment processed: $12,500",
      "Vendor confirmed",
      "Tracking: Daily updates",
      "Warehouse: Space allocated",
      "Tasks created in system",
      "Teams notified: 3 departments",
      "Status: Order Confirmed"
    ]
  },
  {
    id: 2,
    title: 'Increase Instagram ad spend by 5%',
    stream: 'Lumi-Engage',
    severity: 'success',
    eta: 'Immediate',
    icon: TrendingUp,
    description: 'Predicted CTR ↑ 3%, CAC ↓ 1%',
    simulation: 'Pulse ↑ 2%, Ripple: Engaged Customers ↑ 5%',
    prediction: [
      { label: 'Budget', value: '$250/week' },
      { label: 'CTR', value: '2.8->2.88' },
      { label: 'CAC', value: '$45->44.55' },
      { label: 'New customers', value: '150/week' },
      { label: 'Revenue increase', value: '$12K/week' },
      { label: 'ROI', value: '4,700' },
      { label: 'Engagement', value: '12' },
      { label: 'Confidence', value: '88%' }
    ],
    execution: [
      "Campaign Launched: CPG-IG-0509",
      "Started: May 9, 6:00 PM",
      "5 Reels created & posted",
      "Budget activated: $5,250",
      "Live metrics (1hr): Impressions 2,450, CTR 3.5%, Conversions 3",
      "Real-time tracking Active",
      "Team notified: 4 departments"
  ]
  },
  {
    id: 3,
    title: 'Vendor X failed compliance check',
    stream: 'Lumi-Shield',
    severity: 'critical',
    eta: 'Urgent',
    icon: Shield,
    description: 'Risk score +18%. Suggested: Investigate & pause future orders.',
    simulation: 'Pause orders → Risk score ↓ 18%',
    prediction: [
      { label: 'Pause orders', value: '15' },
      { label: 'Cancel shipments', value: '8' },
      { label: 'Audit duration', value: '2-3 weeks' },
      { label: 'Risk reduction', value: '18%' },
      { label: 'Exposure', value: '$85K' },
      { label: 'Alternative vendors', value: '3 options' },
      { label: 'Prevented loss', value: '$50K' },
      { label: 'Audit cost', value: '$15K' },
      { label: 'Confidence', value: '96%' }
    ],
    execution: [
      "Emergency Action Executed: May 9, 9:15 AM",
      "All 15 orders PAUSED",
      "Payment holds: $34K",
      "Customers notified: 15 emails sent",
      "Audit scheduled: May 10",
      "Legal team briefed",
      "Risk score: 68/50",
      "Task created: TASK-003",
      "Status: CONTAINED"
  ]
  },
  {
    id: 4,
    title: 'Reactivate email campaign',
    stream: 'Lumi-Engage',
    severity: 'warning',
    eta: '2 days',
    icon: TrendingUp,
    description: 'Expected conversion increase 1.5%',
    simulation: 'Ripple map: Conversion node ↑ 1.5%',
    prediction: [
      { label: 'Target', value: '3,500 inactive users (3 segments: VIP, Regular, Casual)' },
      { label: 'Predicted open', value: '22%, 770 opens' },
      { label: 'Expected conversions', value: '53' },
      { label: 'Revenue forecast', value: '$42K' },
      { label: 'Cost', value: '$850' },
      { label: 'ROI', value: '4,841' },
      { label: 'Re-engagement', value: '525+15' },
      { label: 'Confidence', value: '82%' }
    ],

    execution: [
      "Campaign Live: Launched May 9, 10:00 AM",
      "Campaign ID: EML-REACT-0509",
      "Sent: 3,500 emails",
      "Live metrics (2hrs): Delivered 3,430, Opened 187 (5.4%), Conversions 2/170",
      "AB testing Active",
      "Follow-ups Scheduled",
      "Status: ACTIVE"
]

  }
];

const InsightFeed = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [actionType, setActionType] = useState(null);

  const getSeverityClass = (severity) => {
    switch(severity) {
      case 'success': return 'severity-success';
      case 'warning': return 'severity-warning';
      case 'critical': return 'severity-critical';
      default: return '';
    }
  };

  const handleSimulate = (id) => {
    setExpandedId(id);
    setActionType('simulate');
  };

  const handleImplement = (id) => {
    setExpandedId(id);
    setActionType('implement');
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
                <button className="insight-btn btn-simulate" onClick={() => handleSimulate(insight.id)}>
                  Simulate
                </button>
                <button className="insight-btn btn-implement" onClick={() => handleImplement(insight.id)}>
                  Implement
                </button>
                <button className="insight-btn btn-ask" onClick={() => handleAsk(insight.id)}>
                  Ask Lumineera
                </button>
              </div>
              {expandedId === insight.id && (
                <div className="insight-detail-panel">
                  {actionType === 'simulate' && (
                    <>
                      <b>Prediction Model:</b>
                      <ul>
                        {insight.prediction.map((item, i) => (
                          <li key={i}><span>{item.label}:</span> {item.value}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {actionType === 'implement' && (
                    <>
                      <b>Execution Log:</b>
                      <ul>
                        {insight.execution.map((log, i) => (
                          <li key={i}>{log}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightFeed;