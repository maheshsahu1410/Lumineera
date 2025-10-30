import Layout from '../components/Layout/Layout';
import MetricCard from '../components/Dashboard/MetricCard';
import { Users, DollarSign, Eye, TrendingUp, MousePointer } from 'lucide-react';
import './Dashboard.css';

const Engage = () => {
  return (
    <Layout currentModule="engage">
      <div className="dashboard-page">
        <header className="page-header">
          <h1>Lumi-Engage</h1>
          <p className="page-subtitle">Customer experience, support & marketing</p>
        </header>

        <section className="dashboard-section">
          <h2>Current Metrics</h2>
          <div className="metrics-grid">
            <MetricCard
              label="CLV"
              value="₹12,500"
              tooltip="Customer Lifetime Value for top 20% customers"
              trend={8}
              icon={DollarSign}
            />
            <MetricCard
              label="CAC"
              value="₹1,200"
              tooltip="Acquisition cost per new customer last 30 days"
              trend={-3}
              icon={Users}
            />
            <MetricCard
              label="Impressions"
              value="450,000"
              tooltip="Total ad impressions across all campaigns"
              trend={12}
              icon={Eye}
            />
            <MetricCard
              label="Conversion Rate"
              value="2.8%"
              tooltip="Percentage of visitors → customers"
              trend={5}
              icon={TrendingUp}
            />
            <MetricCard
              label="CTR"
              value="1.9%"
              tooltip="Click-through rate of campaigns"
              trend={-2}
              icon={MousePointer}
            />
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Trends & Signals</h2>
          <div className="trends-container">
            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge">Social Media</span>
                <span className="trend-impact">+3% CTR</span>
              </div>
              <h3>Instagram trending topic X</h3>
              <p className="trend-description">Highlights node on ripple map. Simulate campaign impact → CTR ↑ 3%</p>
              <button className="trend-action">Simulate Impact</button>
            </div>

            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge warning">Competitor</span>
                <span className="trend-impact negative">-1% Share</span>
              </div>
              <h3>Competitor Y launched promo</h3>
              <p className="trend-description">Node highlight. Simulate effect → market share ↓ 1%</p>
              <button className="trend-action">Simulate Impact</button>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Actions & Recommendations</h2>
          <div className="actions-list">
            <div className="action-item severity-success">
              <div className="action-content">
                <h3>Increase Instagram ad spend by 5%</h3>
                <p>Predicted CTR ↑ 3%, CAC ↓ 1%</p>
                <div className="action-simulation">
                  <strong>Simulation:</strong> Pulse ↑ 2%, Ripple: Engaged Customers ↑ 5%
                </div>
              </div>
              <div className="action-buttons">
                <button className="action-btn simulate">Simulate</button>
                <button className="action-btn implement">Implement</button>
                <button className="action-btn ask">Ask Lumineera</button>
              </div>
            </div>

            <div className="action-item severity-warning">
              <div className="action-content">
                <h3>Reactivate email campaign</h3>
                <p>Expected conversion increase 1.5%</p>
                <div className="action-simulation">
                  <strong>Simulation:</strong> Ripple map: Conversion node ↑ 1.5%
                </div>
              </div>
              <div className="action-buttons">
                <button className="action-btn simulate">Simulate</button>
                <button className="action-btn implement">Implement</button>
                <button className="action-btn ask">Ask Lumineera</button>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>History & Logs</h2>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-date">5 May 2025</div>
              <div className="timeline-content">
                <h4>Increased Instagram spend</h4>
                <p>CTR ↑ 3% (Predicted 2.8%)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2 May 2025</div>
              <div className="timeline-content">
                <h4>Lessons learned</h4>
                <p>Top performing campaigns: short reels &lt;15s</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Engage;
