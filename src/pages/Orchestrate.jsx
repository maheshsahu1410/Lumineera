import Layout from '../components/Layout/Layout';
import MetricCard from '../components/Dashboard/MetricCard';
import { Package, TrendingUp, Users, Clock } from 'lucide-react';
import './Dashboard.css';

const Orchestrate = () => {
  return (
    <Layout currentModule="orchestrate">
      <div className="dashboard-page">
        <header className="page-header">
          <h1>Lumi-Orchestrate</h1>
          <p className="page-subtitle">Inventory, logistics & vendor management</p>
        </header>

        <section className="dashboard-section">
          <h2>Current Metrics</h2>
          <div className="metrics-grid">
            <MetricCard
              label="Delivery Rate"
              value="92%"
              tooltip="On-time delivery last week"
              trend={3}
              icon={Clock}
            />
            <MetricCard
              label="Stock Levels"
              value="450 units"
              tooltip="Current inventory vs target 500 units"
              trend={-10}
              icon={Package}
            />
            <MetricCard
              label="Vendor Performance"
              value="87%"
              tooltip="Vendor compliance & reliability index"
              trend={5}
              icon={Users}
            />
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Trends & News</h2>
          <div className="trends-container">
            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge warning">Supplier Alert</span>
                <span className="trend-impact negative">-3% Delivery</span>
              </div>
              <h3>Vendor X → 3-day delay due to strike</h3>
              <p className="trend-description">Adjust reorder → impact on delivery times</p>
              <button className="trend-action">Simulate Impact</button>
            </div>

            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge warning">Logistics Cost</span>
                <span className="trend-impact negative">+5%</span>
              </div>
              <h3>Fuel price ↑ 5%</h3>
              <p className="trend-description">Simulate cost increase on budget forecast</p>
              <button className="trend-action">Simulate Impact</button>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Actions & Recommendations</h2>
          <div className="actions-list">
            <div className="action-item severity-warning">
              <div className="action-content">
                <h3>Switch to Vendor Y</h3>
                <p>Predicted result: Delivery rate ↑ 8%, Cost ↓ 2%</p>
                <div className="action-simulation">
                  <strong>Simulation:</strong> Delivery time -20%
                </div>
              </div>
              <div className="action-buttons">
                <button className="action-btn simulate">Simulate</button>
                <button className="action-btn implement">Implement</button>
                <button className="action-btn ask">Ask Lumineera</button>
              </div>
            </div>

            <div className="action-item severity-critical">
              <div className="action-content">
                <h3>Reorder Vendor X stock now</h3>
                <p>Inventory low: 20 units remaining</p>
                <div className="action-simulation">
                  <strong>Simulation:</strong> Stock replenished → Delivery on time ↑ 95%
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
          <h2>History & Review</h2>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-date">6 May 2025</div>
              <div className="timeline-content">
                <h4>Vendor switch completed</h4>
                <p>Delivery rate improved by 8%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">3 May 2025</div>
              <div className="timeline-content">
                <h4>Stock reorder placed</h4>
                <p>Inventory levels normalized</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Orchestrate;
