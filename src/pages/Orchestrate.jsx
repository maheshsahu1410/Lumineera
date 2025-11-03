import Layout from '../components/Layout/Layout';
import StreamWorkspace from '../components/Stream/StreamWorkspace';

const signals = [
  { time: '3m ago', type: 'decrease', text: 'Stock-outs ↓ 2%' },
  { time: '8m ago', type: 'increase', text: 'Fulfillment rate ↑ 95%' },
  { time: '15m ago', type: 'neutral', text: 'Vendor X delivery scheduled' },
  { time: '20m ago', type: 'increase', text: 'On-time delivery ↑ 95%' },
  { time: '28m ago', type: 'neutral', text: 'Warehouse space allocated' },
];

const proposals = [
  {
    title: 'Reorder Vendor X Stock',
    description: 'Inventory low: restock to maintain 95% fulfillment rate',
    confidence: 95,
    tags: ['Vendor Management', 'Inventory', 'Risk: Low'],
    simulation: {
      'Order': '500 units',
      'Cost': '$12,500 estimate',
      'Arrival': 'May 12',
      'Stock level': '520 units',
      'On-time delivery': '↑95%',
      'Revenue protection': '$45K/week',
      'Confidence': '95%'
    },
    execution: {
      'PO created': 'PO-2025-0512',
      'Order placed': 'May 9, 2:30 PM',
      'Coverage': '104 days',
      'Stockout probability': '2%',
      'Payment processed': '$12,500',
      'Vendor confirmed': 'Yes',
      'Tracking': 'Daily updates',
      'Warehouse': 'Space allocated',
      'Teams notified': '3 departments',
      'Status': 'Order Confirmed'
    },
    feedback: [
      { stream: 'Engage', text: 'Campaign delivery secured' },
      { stream: 'Insight', text: 'Revenue protection: $45K/week' }
    ]
  },
  {
    title: 'Switch to Vendor Y',
    description: 'Predicted result: Delivery rate ↑ 8%, Cost ↓ 2%',
    confidence: 82,
    tags: ['Vendor Switch', 'Cost Optimization', 'Risk: Medium'],
    simulation: {
      'Delivery improvement': '↑ 8%',
      'Cost reduction': '↓ 2%',
      'Delivery time': '-20%',
      'Quality score': '92%',
      'Confidence': '82%'
    },
    execution: {
      'New vendor': 'Vendor Y',
      'Contract signed': 'Pending',
      'Transition period': '2 weeks',
      'Status': 'Ready to implement'
    }
  },
  {
    title: 'Optimize Logistics Route',
    description: 'Fuel prices ↑ 5%: adjust delivery routes to minimize cost impact',
    confidence: 78,
    tags: ['Logistics', 'Cost Savings', 'Risk: Low'],
    simulation: {
      'Fuel cost reduction': '↓ 3%',
      'Delivery time': 'No change',
      'Route optimization': '3 routes updated',
      'Confidence': '78%'
    },
    execution: {
      'Routes updated': '3',
      'Drivers notified': 'Yes',
      'Cost savings': '$2,100/month',
      'Status': 'Implementation ready'
    }
  }
];

const actions = [
  {
    title: 'Vendor X Reorder',
    description: 'Ordered 500 units from Vendor X',
    time: '2h ago',
    status: 'completed',
    result: 'PO-2025-0512 confirmed, delivery May 12',
    feedback: [
      { stream: 'Engage', text: 'Campaign delivery capacity secured' },
      { stream: 'Insight', text: 'Revenue protection: $45K/week validated' }
    ]
  },
  {
    title: 'Warehouse Space Allocation',
    description: 'Allocated space for incoming stock',
    time: '4h ago',
    status: 'completed',
    result: 'Space allocated, teams notified'
  },
  {
    title: 'Logistics Route Update',
    description: 'Updated 3 delivery routes for fuel efficiency',
    time: '1d ago',
    status: 'pending'
  }
];

const Orchestrate = () => {
  return (
    <Layout currentModule="orchestrate">
      <div className="page-container">
        <header className="page-header">
          <h1>Lumi-Orchestrate</h1>
          <p className="page-subtitle">Inventory, logistics & vendor management intelligence stream</p>
        </header>
        
        <StreamWorkspace 
          streamName="Orchestrate"
          signals={signals}
          proposals={proposals}
          actions={actions}
        />
      </div>
    </Layout>
  );
};

export default Orchestrate;
