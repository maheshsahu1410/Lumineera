import Layout from '../components/Layout/Layout';
import MetricCard from '../components/Dashboard/MetricCard';
import { DollarSign, TrendingUp, PieChart, Target } from 'lucide-react';
import './Dashboard.css';

const Insight = () => {
  return (
    <Layout currentModule="insight">
      <div className="dashboard-page">
        <header className="page-header">
          <h1>Lumi-Insight</h1>
          <p className="page-subtitle">Finances & central intelligence</p>
        </header>

        <section className="dashboard-section">
          <h2>Current Metrics</h2>
          <div className="metrics-grid">
            <MetricCard
              label="Revenue"
              value="₹1.2 Cr"
              tooltip="Revenue for last 30 days"
              trend={8}
              icon={DollarSign}
            />
            <MetricCard
              label="Costs"
              value="₹60 L"
              tooltip="Total operational costs"
              trend={-3}
              icon={TrendingUp}
            />
            <MetricCard
              label="Margin"
              value="50%"
              tooltip="Revenue – Costs / Revenue"
              trend={3}
              icon={PieChart}
            />
            <MetricCard
              label="ROAS"
              value="3.5x"
              tooltip="Return on ad spend"
              trend={4}
              icon={Target}
            />
            <MetricCard
              label="Profitability"
              value="₹60 L"
              tooltip="Net profit"
              trend={5}
              icon={DollarSign}
            />
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Trends & News</h2>
          <div className="trends-container">
            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge warning">Competitor</span>
                <span className="trend-impact negative">-2% Revenue</span>
              </div>
              <h3>Competitor Y launched flash sale</h3>
              <p className="trend-description">Predicted revenue drop 2%</p>
              <button className="trend-action">Simulate Impact</button>
            </div>

            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge">Market Update</span>
                <span className="trend-impact">+3% Opportunity</span>
              </div>
              <h3>Market demand increasing</h3>
              <p className="trend-description">Opportunity to increase pricing by 3%</p>
              <button className="trend-action">Simulate Impact</button>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Recommendations</h2>
          <div className="actions-list">
            <div className="action-item severity-success">
              <div className="action-content">
                <h3>Shift 5% budget from display → influencer</h3>
                <p>Confidence: 85%</p>
                <div className="action-simulation">
                  <strong>Prediction:</strong> Margin ↑ 2.3%
                </div>
              </div>
              <div className="action-buttons">
                <button className="action-btn simulate">Simulate</button>
                <button className="action-btn implement">Implement</button>
                <button className="action-btn ask">Ask Lumineera</button>
              </div>
            </div>

            <div className="action-item severity-success">
              <div className="action-content">
                <h3>Optimize operational costs</h3>
                <p>Confidence: 78%</p>
                <div className="action-simulation">
                  <strong>Prediction:</strong> Cost reduction ↓ 8%, Profitability ↑ 5%
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
          <h2>Review / Logs</h2>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-date">8 May 2025</div>
              <div className="timeline-content">
                <h4>Budget reallocation</h4>
                <p>Predicted margin increase: 2.3% (Actual: 2.5%)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">4 May 2025</div>
              <div className="timeline-content">
                <h4>Cost optimization implemented</h4>
                <p>Operational costs reduced by 8%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Insight;
