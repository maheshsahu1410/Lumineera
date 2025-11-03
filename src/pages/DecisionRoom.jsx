import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Check, X, MessageSquare, TrendingUp, AlertTriangle } from 'lucide-react';
import './DecisionRoom.css';

const DecisionRoom = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);

  const unifiedProposals = [
    {
      id: 1,
      objective: 'Increase Sales ↑ 12%',
      streams: ['Engage', 'Orchestrate'],
      plan: 'Scale Campaign X by 10% + Ensure inventory coverage',
      confidence: 84,
      status: 'pending',
      impact: '+$12K/week revenue',
      risks: ['Inventory shortfall', 'Supply chain delay'],
      timeline: '2 weeks',
      discussion: [
        { stream: 'Engage', agent: 'Marketing AI', comment: 'Campaign performance excellent, ready to scale' },
        { stream: 'Orchestrate', agent: 'Ops AI', comment: 'Inventory confirmed: 520 units, 104 days coverage' },
        { stream: 'MetaAgent', agent: 'Central AI', comment: 'Consensus: Approve. All requirements met.' }
      ]
    },
    {
      id: 2,
      objective: 'Risk Mitigation: Vendor X',
      streams: ['Shield', 'Orchestrate', 'Insight'],
      plan: 'Pause Vendor X orders + Switch to alternatives + Track financial impact',
      confidence: 96,
      status: 'approved',
      impact: 'Loss prevented: $50K',
      risks: ['Transition delay', 'Quality variance'],
      timeline: '3 weeks (audit)',
      discussion: [
        { stream: 'Shield', agent: 'Risk AI', comment: 'Critical: Vendor X failed compliance - immediate pause required' },
        { stream: 'Orchestrate', agent: 'Ops AI', comment: '3 alternative vendors ready, transition plan prepared' },
        { stream: 'Insight', agent: 'Finance AI', comment: 'Financial impact: -$85K exposure, +$50K loss prevention' },
        { stream: 'MetaAgent', agent: 'Central AI', comment: 'Consensus: Approved. Execute immediately.' }
      ]
    },
    {
      id: 3,
      objective: 'Budget Optimization',
      streams: ['Insight', 'Engage'],
      plan: 'Shift 5% budget: Display → Influencer marketing',
      confidence: 85,
      status: 'pending',
      impact: 'Margin ↑ 2.3%',
      risks: ['Display performance drop', 'Influencer ROI variance'],
      timeline: '1 week',
      discussion: [
        { stream: 'Insight', agent: 'Finance AI', comment: 'ROI analysis shows 15% improvement potential' },
        { stream: 'Engage', agent: 'Marketing AI', comment: '3 influencers identified, ready to activate' },
        { stream: 'MetaAgent', agent: 'Central AI', comment: 'Review: Low risk, high potential. Recommend approval.' }
      ]
    },
    {
      id: 4,
      objective: 'System Resilience ↑ 15%',
      streams: ['Resilience', 'Insight'],
      plan: 'Scale backup server + Reduce downtime 2hrs → 0.3hrs',
      confidence: 88,
      status: 'review',
      impact: 'Downtime -85%',
      risks: ['Cost: $450/month', 'Migration complexity'],
      timeline: '3 days',
      discussion: [
        { stream: 'Resilience', agent: 'Systems AI', comment: 'Downtime reduction critical for business continuity' },
        { stream: 'Insight', agent: 'Finance AI', comment: 'Cost justified: $450/month vs downtime losses' },
        { stream: 'MetaAgent', agent: 'Central AI', comment: 'Under review: Cost-benefit analysis in progress' }
      ]
    },
    {
      id: 5,
      objective: 'Email Campaign Launch',
      streams: ['Engage', 'Resilience'],
      plan: 'Target 3,500 inactive users + Monitor system load',
      confidence: 82,
      status: 'approved',
      impact: 'Revenue: $42K projected',
      risks: ['Email server load', 'Low conversion rate'],
      timeline: 'Active now',
      discussion: [
        { stream: 'Engage', agent: 'Marketing AI', comment: 'Segmentation complete: VIP/Regular/Casual (3 segments)' },
        { stream: 'Resilience', agent: 'Systems AI', comment: 'Email server load: Normal, capacity confirmed' },
        { stream: 'MetaAgent', agent: 'Central AI', comment: 'Approved: Campaign launched, monitoring active' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'status-approved';
      case 'pending':
        return 'status-pending';
      case 'review':
        return 'status-review';
      default:
        return '';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <Check size={16} />;
      case 'pending':
        return <AlertTriangle size={16} />;
      default:
        return <MessageSquare size={16} />;
    }
  };

  return (
    <Layout currentModule="decision-room">
      <div className="decision-room-page">
        <header className="page-header">
          <h1>Decision Room</h1>
          <p className="page-subtitle">Cross-stream collaboration & unified decision making</p>
          <div className="room-stats">
            <div className="stat">
              <span className="stat-value">{unifiedProposals.length}</span>
              <span className="stat-label">Active Proposals</span>
            </div>
            <div className="stat">
              <span className="stat-value">{unifiedProposals.filter(p => p.status === 'approved').length}</span>
              <span className="stat-label">Approved</span>
            </div>
            <div className="stat">
              <span className="stat-value">86%</span>
              <span className="stat-label">Harmony Index</span>
            </div>
          </div>
        </header>

        <div className="proposals-table">
          <div className="table-header">
            <div className="col-objective">Objective</div>
            <div className="col-streams">Streams</div>
            <div className="col-plan">Unified Plan</div>
            <div className="col-confidence">Confidence</div>
            <div className="col-status">Status</div>
            <div className="col-actions">Actions</div>
          </div>

          {unifiedProposals.map((proposal) => (
            <div key={proposal.id} className="proposal-row-wrapper">
              <div className="proposal-row">
                <div className="col-objective">
                  <h3>{proposal.objective}</h3>
                  <div className="impact">
                    <TrendingUp size={14} />
                    <span>{proposal.impact}</span>
                  </div>
                </div>
                
                <div className="col-streams">
                  {proposal.streams.map((stream, idx) => (
                    <span key={idx} className="stream-badge">{stream}</span>
                  ))}
                </div>
                
                <div className="col-plan">
                  <p>{proposal.plan}</p>
                  <div className="timeline">Timeline: {proposal.timeline}</div>
                </div>
                
                <div className="col-confidence">
                  <div className="confidence-circle">
                    <span>{proposal.confidence}%</span>
                  </div>
                </div>
                
                <div className="col-status">
                  <span className={`status-badge ${getStatusColor(proposal.status)}`}>
                    {getStatusIcon(proposal.status)}
                    {proposal.status}
                  </span>
                </div>
                
                <div className="col-actions">
                  <button 
                    className="btn-view-discussion"
                    onClick={() => setSelectedProposal(selectedProposal === proposal.id ? null : proposal.id)}
                  >
                    <MessageSquare size={16} />
                    Discussion
                  </button>
                  {proposal.status === 'pending' && (
                    <button className="btn-approve-unified">
                      <Check size={16} />
                      Approve
                    </button>
                  )}
                </div>
              </div>

              {selectedProposal === proposal.id && (
                <div className="discussion-panel">
                  <div className="discussion-header">
                    <h4>Stream Discussion</h4>
                    <button onClick={() => setSelectedProposal(null)}>
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="discussion-thread">
                    {proposal.discussion.map((comment, idx) => (
                      <div key={idx} className={`comment ${comment.stream.toLowerCase()}`}>
                        <div className="comment-header">
                          <span className="comment-stream">{comment.stream}</span>
                          <span className="comment-agent">{comment.agent}</span>
                        </div>
                        <p className="comment-text">{comment.comment}</p>
                      </div>
                    ))}
                  </div>

                  <div className="risks-section">
                    <h5>Identified Risks</h5>
                    <ul className="risks-list">
                      {proposal.risks.map((risk, idx) => (
                        <li key={idx}>
                          <AlertTriangle size={14} />
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DecisionRoom;
