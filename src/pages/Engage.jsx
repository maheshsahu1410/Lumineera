import Layout from '../components/Layout/Layout';
import StreamWorkspace from '../components/Stream/StreamWorkspace';

const signals = [
  { time: '2m ago', type: 'increase', text: 'ROAS ↑ 4%' },
  { time: '5m ago', type: 'decrease', text: 'CTR ↓ 2%' },
  { time: '12m ago', type: 'increase', text: 'Campaign X engagement +15%' },
  { time: '18m ago', type: 'neutral', text: 'New audience segment identified' },
  { time: '25m ago', type: 'increase', text: 'Email open rate ↑ 8%' },
];

const proposals = [
  {
    title: 'Increase Campaign X Budget by 10%',
    description: 'Strong performance indicators suggest scaling opportunity',
    confidence: 87,
    tags: ['Brand Guideline', 'Budget Cap', 'Risk: Low'],
    simulation: {
      'Budget': '+$250/week',
      'CTR': '2.8% → 2.88%',
      'CAC': '$45 → $44.55',
      'New customers': '+150/week',
      'Revenue increase': '$12K/week',
      'ROI': '4,700%',
      'Engagement': '+12%',
      'Confidence': '88%'
    },
    execution: {
      'Campaign ID': 'CPG-IG-0509',
      'Started': 'May 9, 6:00 PM',
      'Status': '5 Reels created & posted',
      'Budget activated': '$5,250',
      'Impressions (1hr)': '2,450',
      'CTR (1hr)': '3.5%',
      'Conversions': '3',
      'Real-time tracking': 'Active',
      'Team notified': '4 departments'
    },
    feedback: [
      { stream: 'Orchestrate', text: 'Inventory levels confirmed sufficient' },
      { stream: 'Insight', text: 'ROI projection validated' }
    ]
  },
  {
    title: 'Adjust AdX Bidding Strategy',
    description: 'Optimize for conversion instead of clicks based on recent data',
    confidence: 72,
    tags: ['Performance', 'Risk: Medium'],
    simulation: {
      'Target': '3,500 inactive users',
      'Segments': '3 (VIP/Regular/Casual)',
      'Predicted open': '22% (770)',
      'Expected conversions': '53',
      'Revenue forecast': '$42K',
      'Cost': '$850',
      'ROI': '4,841%',
      'Re-engagement': '525 (15%)',
      'Confidence': '82%'
    },
    execution: {
      'Launched': 'May 9, 10:00 AM',
      'Campaign ID': 'EML-REACT-0509',
      'Sent': '3,500 emails',
      'Delivered': '3,430',
      'Opened (2hrs)': '187 (5.4%)',
      'Conversions': '2 ($170)',
      'A/B testing': 'Active',
      'Follow-ups': 'Scheduled',
      'Status': 'ACTIVE'
    },
    feedback: [
      { stream: 'Insight', text: 'CLV projection: +22%' }
    ]
  },
  {
    title: 'Launch Retargeting Campaign',
    description: 'High-value cart abandoners showing strong intent signals',
    confidence: 91,
    tags: ['Brand Guideline', 'Risk: Low'],
    simulation: {
      'Targeted users': '1,250',
      'Expected CTR': '4.2%',
      'Conversion rate': '12%',
      'Revenue projection': '$18K',
      'Cost': '$450',
      'ROI': '3,900%',
      'Confidence': '91%'
    },
    execution: {
      'Campaign launched': 'Active',
      'Users targeted': '1,250',
      'Actual CTR': '4.5%',
      'Conversions': '8',
      'Revenue': '$2,100',
      'Status': 'Running'
    }
  }
];

const actions = [
  {
    title: 'Campaign Budget Adjustment',
    description: 'Increased AdX budget by +10%',
    time: '1h ago',
    status: 'completed',
    result: 'ROAS improved by 7.4%',
    feedback: [
      { stream: 'Orchestrate', text: 'Inventory levels confirmed sufficient' },
      { stream: 'Insight', text: 'ROI projection validated' }
    ]
  },
  {
    title: 'Email Sequence Optimization',
    description: 'A/B test new subject lines',
    time: '3h ago',
    status: 'pending'
  },
  {
    title: 'Audience Segmentation',
    description: 'Created new high-value segment',
    time: '5h ago',
    status: 'completed',
    result: 'Segment size: 12.5K users',
    feedback: [
      { stream: 'Insight', text: 'CLV projection: +22%' }
    ]
  }
];

const Engage = () => {
  return (
    <Layout currentModule="engage">
      <div className="page-container">
        <header className="page-header">
          <h1>Lumi-Engage</h1>
          <p className="page-subtitle">Marketing and customer engagement intelligence stream</p>
        </header>
        
        <StreamWorkspace 
          streamName="Engage"
          signals={signals}
          proposals={proposals}
          actions={actions}
        />
      </div>
    </Layout>
  );
};

export default Engage;
