import Layout from '../components/Layout/Layout';
import StreamWorkspace from '../components/Stream/StreamWorkspace';

const signals = [
  { time: '5m ago', type: 'decrease', text: 'Risk score ↓ 18%' },
  { time: '12m ago', type: 'neutral', text: 'Vendor X compliance failed' },
  { time: '18m ago', type: 'increase', text: 'Fraud attempts detected: 3' },
  { time: '25m ago', type: 'neutral', text: 'Emergency action executed' },
  { time: '32m ago', type: 'increase', text: 'Risk exposure: $85K → $0' },
];

const proposals = [
  {
    title: 'Pause Vendor X Orders',
    description: 'Vendor X failed compliance check - immediate risk mitigation required',
    confidence: 96,
    tags: ['Compliance', 'Risk Mitigation', 'Risk: High'],
    simulation: {
      'Pause orders': '15 orders',
      'Cancel shipments': '8 shipments',
      'Audit duration': '2-3 weeks',
      'Risk reduction': '-18%',
      'Alternative vendors': '3 options',
      'Audit cost': '$15K',
      'Confidence': '96%'
    },
    execution: {
      'Executed': 'May 9, 9:15 AM',
      'Orders PAUSED': 'All 15 orders',
      'Exposure reduction': '$85K → $0',
      'Prevented loss': '$50K',
      'Task created': 'TASK-003',
      'Status': 'CONTAINED'
    },
    feedback: [
      { stream: 'Orchestrate', text: 'Alternative vendors identified: 3 options' },
      { stream: 'Insight', text: 'Loss prevention validated: $50K' }
    ]
  },
  {
    title: 'Add Approval Workflow',
    description: 'Mitigation for suspicious transactions',
    confidence: 78,
    tags: ['Security', 'Process Improvement', 'Risk: Medium'],
    simulation: {
      'Risk reduction': '-12%',
      'Processing delay': '+2 hours',
      'False positives': '< 5%',
      'Confidence': '78%'
    },
    execution: {
      'Workflow created': 'Yes',
      'Approval chain': '2 levels',
      'Notification': 'Email + SMS',
      'Status': 'Ready to deploy'
    }
  },
  {
    title: 'Block Phishing Domain',
    description: 'Finance department targeted - recommended block',
    confidence: 91,
    tags: ['Security', 'Phishing', 'Risk: Medium'],
    simulation: {
      'Domain blocked': 'Yes',
      'Affected users': '12 employees',
      'Training required': 'Yes',
      'Confidence': '91%'
    },
    execution: {
      'Domain': 'Blocked',
      'Firewall updated': 'Yes',
      'Users notified': '12',
      'Status': 'Active'
    }
  }
];

const actions = [
  {
    title: 'Vendor X Orders Paused',
    description: 'Emergency action: paused 15 orders, cancelled 8 shipments',
    time: '1h ago',
    status: 'completed',
    result: 'Exposure reduced: $85K → $0, Loss prevented: $50K',
    feedback: [
      { stream: 'Orchestrate', text: 'Alternative vendors ready: 3 options' },
      { stream: 'Insight', text: 'Financial impact validated' }
    ]
  },
  {
    title: 'Phishing Domain Blocked',
    description: 'Blocked malicious domain targeting Finance',
    time: '3h ago',
    status: 'completed',
    result: '12 users notified, training scheduled'
  },
  {
    title: 'Compliance Audit Initiated',
    description: 'Vendor X audit scheduled for 2-3 weeks',
    time: '5h ago',
    status: 'pending'
  }
];

const ShieldPage = () => {
  return (
    <Layout currentModule="shield">
      <div className="page-container">
        <header className="page-header">
          <h1>Lumi-Shield</h1>
          <p className="page-subtitle">Risk management & fraud detection intelligence stream</p>
        </header>
        
        <StreamWorkspace 
          streamName="Shield"
          signals={signals}
          proposals={proposals}
          actions={actions}
        />
      </div>
    </Layout>
  );
};

export default ShieldPage;
