import Layout from '../components/Layout/Layout';
import StreamWorkspace from '../components/Stream/StreamWorkspace';

const signals = [
  { time: '1m ago', type: 'increase', text: 'Uptime ↑ 99.7%' },
  { time: '10m ago', type: 'decrease', text: 'Error rate ↓ 0.5%' },
  { time: '15m ago', type: 'neutral', text: 'Backup completed: 100%' },
  { time: '25m ago', type: 'neutral', text: 'CPU load: 70%' },
  { time: '35m ago', type: 'neutral', text: 'Scheduled maintenance: 2hrs' },
];

const proposals = [
  {
    title: 'Scale Backup Server',
    description: 'Reduces potential downtime from 2hrs → 0.3hrs',
    confidence: 88,
    tags: ['Infrastructure', 'Uptime', 'Risk: Low'],
    simulation: {
      'Downtime reduction': '2hrs → 0.3hrs',
      'System resilience': '↑ 15%',
      'Cost': '$450/month',
      'Recovery time': '-85%',
      'Confidence': '88%'
    },
    execution: {
      'Server scaled': 'Yes',
      'Capacity': '+50%',
      'Downtime achieved': '0.3hrs',
      'Cost': '$450/month',
      'Status': 'Active'
    },
    feedback: [
      { stream: 'Insight', text: 'Cost-benefit ratio validated' },
      { stream: 'Orchestrate', text: 'System capacity confirmed' }
    ]
  },
  {
    title: 'Test Server Overload Scenario',
    description: 'Simulate high-traffic conditions',
    confidence: 75,
    tags: ['Testing', 'Performance', 'Risk: Low'],
    simulation: {
      'Test duration': '2 hours',
      'Traffic simulation': '10x normal',
      'Expected bottlenecks': '2 areas',
      'Confidence': '75%'
    },
    execution: {
      'Test completed': 'Yes',
      'Bottlenecks found': '2',
      'Performance': 'Within limits',
      'Status': 'Passed'
    }
  },
  {
    title: 'Optimize Database Queries',
    description: 'Reduce database load by 20%',
    confidence: 82,
    tags: ['Performance', 'Database', 'Risk: Low'],
    simulation: {
      'Load reduction': '↓ 20%',
      'Query speed': '↑ 35%',
      'Affected queries': '15',
      'Confidence': '82%'
    },
    execution: {
      'Queries optimized': '15',
      'Load reduced': '↓ 20%',
      'Speed improved': '↑ 35%',
      'Status': 'Deployed'
    }
  }
];

const actions = [
  {
    title: 'Backup Server Scaled',
    description: 'Increased backup server capacity by 50%',
    time: '30m ago',
    status: 'completed',
    result: 'Downtime reduced from 2hrs to 0.3hrs',
    feedback: [
      { stream: 'Insight', text: 'Cost justified by downtime savings' }
    ]
  },
  {
    title: 'System Overload Test',
    description: 'Tested 10x normal traffic load',
    time: '2h ago',
    status: 'completed',
    result: 'Performance within acceptable limits, 2 bottlenecks identified'
  },
  {
    title: 'Database Optimization',
    description: 'Optimized 15 database queries',
    time: '1d ago',
    status: 'completed',
    result: 'Load ↓ 20%, Speed ↑ 35%'
  }
];

const ResiliencePage = () => {
  return (
    <Layout currentModule="resilience">
      <div className="page-container">
        <header className="page-header">
          <h1>Lumi-Resilience</h1>
          <p className="page-subtitle">System resilience & business continuity intelligence stream</p>
        </header>
        
        <StreamWorkspace 
          streamName="Resilience"
          signals={signals}
          proposals={proposals}
          actions={actions}
        />
      </div>
    </Layout>
  );
};

export default ResiliencePage;
