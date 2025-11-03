import { useState } from 'react';
import { X, Shield, DollarSign, AlertTriangle, FileText } from 'lucide-react';
import './GovernanceDrawer.css';

const policies = [
  {
    stream: 'Engage (Marketing)',
    icon: DollarSign,
    policies: [
      { name: 'Brand Guidelines', description: 'All campaigns must align with brand voice and visual identity', level: 'critical' },
      { name: 'Budget Cap', description: 'Monthly marketing spend capped at $50,000', level: 'high' },
      { name: 'Compliance', description: 'GDPR and CCPA compliance required for all data usage', level: 'critical' }
    ]
  },
  {
    stream: 'Orchestrate (Operations)',
    icon: FileText,
    policies: [
      { name: 'Quality Standards', description: 'All products must meet ISO 9001 quality benchmarks', level: 'high' },
      { name: 'Delivery Time', description: 'Standard delivery within 48 hours', level: 'medium' },
      { name: 'Sustainability', description: 'Use eco-friendly packaging for 80%+ of orders', level: 'medium' }
    ]
  },
  {
    stream: 'Shield (Risk)',
    icon: Shield,
    policies: [
      { name: 'Legal Compliance', description: 'All actions must comply with local and international laws', level: 'critical' },
      { name: 'Incident Response', description: 'Security incidents must be addressed within 1 hour', level: 'critical' },
      { name: 'Data Protection', description: 'Encrypt all sensitive customer data at rest and in transit', level: 'critical' }
    ]
  },
  {
    stream: 'Insight (Finance)',
    icon: AlertTriangle,
    policies: [
      { name: 'Cost Controls', description: 'Operating expenses must not exceed 65% of revenue', level: 'high' },
      { name: 'Profit Margins', description: 'Maintain minimum 20% profit margin on core products', level: 'high' },
      { name: 'Audit Trail', description: 'All financial transactions logged and auditable', level: 'critical' }
    ]
  }
];

const GovernanceDrawer = ({ isOpen, onClose }) => {
  const [selectedStream, setSelectedStream] = useState(null);

  const getLevelColor = (level) => {
    switch (level) {
      case 'critical':
        return 'level-critical';
      case 'high':
        return 'level-high';
      case 'medium':
        return 'level-medium';
      default:
        return 'level-low';
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className={`governance-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div>
            <h2>Governance & Policies</h2>
            <p className="drawer-subtitle">Stream rules, compliance, and audit controls</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="drawer-content">
          {policies.map((streamPolicies, index) => {
            const Icon = streamPolicies.icon;
            const isExpanded = selectedStream === index;
            
            return (
              <div key={index} className="policy-section">
                <button
                  className={`policy-section-header ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => setSelectedStream(isExpanded ? null : index)}
                >
                  <div className="section-title">
                    <Icon size={20} />
                    <span>{streamPolicies.stream}</span>
                  </div>
                  <span className="policy-count">{streamPolicies.policies.length} policies</span>
                </button>

                {isExpanded && (
                  <div className="policy-list">
                    {streamPolicies.policies.map((policy, pIndex) => (
                      <div key={pIndex} className="policy-item">
                        <div className="policy-header">
                          <h4 className="policy-name">{policy.name}</h4>
                          <span className={`policy-level ${getLevelColor(policy.level)}`}>
                            {policy.level}
                          </span>
                        </div>
                        <p className="policy-description">{policy.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="drawer-footer">
          <button className="btn-secondary">View Audit Log</button>
          <button className="btn-primary">Edit Policies</button>
        </div>
      </div>
    </>
  );
};

export default GovernanceDrawer;
