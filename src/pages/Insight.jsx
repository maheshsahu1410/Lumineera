import Layout from '../components/Layout/Layout';
import StreamWorkspace from '../components/Stream/StreamWorkspace';

const signals = [
  { time: '2m ago', type: 'increase', text: 'Margin ↑ 3%' },
  { time: '7m ago', type: 'increase', text: 'ROAS ↑ 4%' },
  { time: '15m ago', type: 'increase', text: 'Revenue +$12K/week' },
  { time: '22m ago', type: 'neutral', text: 'ROI forecast updated' },
  { time: '30m ago', type: 'increase', text: 'Conversion ↑ 2%' },
];

const proposals = [
  {
    title: 'Shift Budget: Display → Influencer',
    description: 'Shift 5% budget from display to influencer marketing',
    confidence: 85,
    tags: ['Budget Optimization', 'Marketing', 'Risk: Low'],
    simulation: {
      'Budget shift': '5% ($1,250)',
      'Predicted margin': '↑ 2.3%',
      'ROI improvement': '+15%',
      'Influencer reach': '+25K',
      'Engagement rate': '↑ 12%',
      'Confidence': '85%'
    },
    execution: {
      'Budget moved': '$1,250',
      'Campaign started': 'May 9',
      'Influencers': '3 activated',
      'Actual margin': '↑ 2.5%',
      'Status': 'Active'
    },
    feedback: [
      { stream: 'Engage', text: 'Influencer campaigns live' },
      { stream: 'Orchestrate', text: 'Fulfillment capacity confirmed' }
    ]
  },
  {
    title: 'Optimize Operational Costs',
    description: 'Cost reduction opportunities identified',
    confidence: 78,
    tags: ['Cost Optimization', 'Operations', 'Risk: Low'],
    simulation: {
      'Cost reduction': '↓ 8%',
      'Profitability': '↑ 5%',
      'Areas': '3 departments',
      'Timeline': '2 weeks',
      'Confidence': '78%'
    },
    execution: {
      'Reduction achieved': '↓ 8%',
      'Profit increase': '↑ 5%',
      'Departments': '3',
      'Status': 'Implemented'
    }
  },
  {
    title: 'Increase Pricing by 3%',
    description: 'Market demand increasing - pricing optimization opportunity',
    confidence: 72,
    tags: ['Pricing', 'Revenue', 'Risk: Medium'],
    simulation: {
      'Price increase': '+3%',
      'Revenue impact': '+$18K/month',
      'Customer retention': '-1%',
      'Margin improvement': '↑ 4%',
      'Confidence': '72%'
    },
    execution: {
      'New pricing': 'Active',
      'Revenue impact': '+$18K/month',
      'Churn rate': '-0.8%',
      'Status': 'Monitoring'
    }
  }
];

const actions = [
  {
    title: 'Budget Reallocation',
    description: 'Shifted 5% budget from display to influencer',
    time: '2h ago',
    status: 'completed',
    result: 'Predicted: 2.3% margin increase (Actual: 2.5%)',
    feedback: [
      { stream: 'Engage', text: '3 influencer campaigns activated' },
      { stream: 'Orchestrate', text: 'Inventory confirmed for increased demand' }
    ]
  },
  {
    title: 'Cost Optimization',
    description: 'Reduced operational costs across 3 departments',
    time: '1d ago',
    status: 'completed',
    result: 'Cost reduction: 8%, Profitability: ↑ 5%'
  },
  {
    title: 'ROI Analysis Update',
    description: 'Updated ROI projections based on campaign performance',
    time: '2d ago',
    status: 'completed',
    result: 'All forecasts updated and validated'
  }
];

const InsightPage = () => {
  return (
    <Layout currentModule="insight">
      <div className="page-container">
        <header className="page-header">
          <h1>Lumi-Insight</h1>
          <p className="page-subtitle">Finance & central intelligence stream</p>
        </header>
        
        <StreamWorkspace 
          streamName="Insight"
          signals={signals}
          proposals={proposals}
          actions={actions}
        />
      </div>
    </Layout>
  );
};

export default InsightPage;
